import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { parseDates } from '@/utils/helpers/date.helpers';
import { RootState } from '@/store';
import { INote, Category, CategoryWithNotes } from '@/utils/types/note.types';
import { AddNoteDto, EditNoteDto } from '@/utils/dtos/note.dtos';
import { IStatistic } from '@/utils/types/statistic.types';

type AddNotePayload = { note: INote };
type EditNotePayload = { noteId: INote['id']; noteData: EditNoteDto };
type ArchiveNotePayload = { noteId: INote['id'] };
type UnarchiveNotePayload = { noteId: INote['id'] };
type RemoveNotePayload = { noteId: INote['id'] };

type NotesState = {
  notes: INote[];
};

const initialState: NotesState = {
  notes: [
    {
      id: 'Wog7RQheQf',
      name: 'Persisting Task',
      category: Category.TASK,
      content: 'Do not give up',
      archived: false,
      dates: '',
      createdAt: '2022-04-16T08:20:12.346Z',
    },
    {
      id: '93zxjamrDQ',
      name: 'Persisting Idea',
      category: Category.IDEA,
      content: 'Persistence is a talent multiplier',
      archived: false,
      dates: '',
      createdAt: '2022-04-16T08:20:28.806Z',
    },
    {
      id: '8ouAXYv2No',
      name: 'Persisting Thought',
      category: Category.THOUGHT,
      content: 'Energy and persistence conquer all things',
      archived: false,
      dates: '',
      createdAt: '2022-04-16T08:21:21.527Z',
    },
    {
      id: 'pNk46NVY5T',
      name: 'Persisting Quote',
      category: Category.QUOTE,
      content: 'Experience is the name everyone gives to their mistakes',
      archived: false,
      dates: '',
      createdAt: '2022-04-16T08:21:42.008Z',
    },
  ],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, { payload }: PayloadAction<AddNotePayload>) => {
        state.notes.push(payload.note);
      },
      prepare: (prevPayload: { noteData: AddNoteDto }) => ({
        payload: {
          note: {
            ...prevPayload.noteData,
            id: nanoid(10),
            archived: false,
            dates: parseDates(prevPayload.noteData.content),
            createdAt: new Date().toISOString(),
          },
        },
      }),
    },
    editNote: (state, { payload }: PayloadAction<EditNotePayload>) => {
      const { noteId, noteData } = payload;

      state.notes = state.notes.map((note) =>
        note.id === noteId
          ? { ...note, ...noteData, dates: parseDates(noteData.content) }
          : note
      );
    },
    removeNote: (state, { payload }: PayloadAction<RemoveNotePayload>) => {
      state.notes = state.notes.filter((note) => note.id !== payload.noteId);
    },
    archiveNote: (state, { payload }: PayloadAction<ArchiveNotePayload>) => {
      const note = state.notes.find((note) => note.id === payload.noteId);

      if (!note) {
        return;
      }

      note.archived = true;
    },
    unarchiveNote: (
      state,
      { payload }: PayloadAction<UnarchiveNotePayload>
    ) => {
      const note = state.notes.find((note) => note.id === payload.noteId);

      if (!note) {
        return;
      }

      note.archived = false;
    },
  },
});

export const { addNote, editNote, removeNote, archiveNote, unarchiveNote } =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export const selectActiveNotes = (state: RootState) =>
  state.notes.notes.filter((note) => !note.archived);

export const selectArchivedeNotes = (state: RootState) =>
  state.notes.notes.filter((note) => note.archived);

export const selectNoteById = (state: RootState, noteId: INote['id']) => {
  const note = state.notes.notes.find((note) => note.id === noteId);

  if (!note) {
    return null;
  }

  const noteData = {
    name: note.name,
    content: note.content,
    category: note.category,
  };

  return noteData;
};

export const selectNoteCategories = (state: RootState) => [
  ...new Set(state.notes.notes.map((note) => note.category)),
];

export const selectCategoriesWithNotes = createSelector(selectNotes, (notes) =>
  notes.reduce<CategoryWithNotes>((categories, note) => {
    if (categories[note.category]) {
      categories[note.category].push(note);
    } else {
      categories[note.category] = [note];
    }

    return categories;
  }, {} as CategoryWithNotes)
);

export const selectStatistics = createSelector(
  [selectNoteCategories, selectCategoriesWithNotes],
  (categories, categoriesWithNotes) => {
    const statistics: IStatistic[] = [];

    for (const category of categories) {
      const currentNotes = categoriesWithNotes[category];

      const states = currentNotes.reduce(
        (states, item) => {
          const itemState = item.archived ? 'archived' : 'active';

          states[itemState] += 1;

          return states;
        },
        { active: 0, archived: 0 }
      );

      statistics.push({ category, items: states });
    }

    return statistics;
  }
);

export default notesSlice.reducer;
