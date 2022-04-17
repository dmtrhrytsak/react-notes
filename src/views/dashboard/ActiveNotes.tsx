import { useSelector } from 'react-redux';

import {
  selectActiveNotes,
  archiveNote,
  removeNote,
} from '@/store/features/notes.slice';
import { useAppDispatch } from '@/utils/hooks/redux.hooks';
import { ActiveNotesTable } from '@/views/dashboard';

import { INote } from '@/utils/types/note.types';

const ActiveNotes: React.FC = () => {
  const notes = useSelector(selectActiveNotes);

  const dispatch = useAppDispatch();

  const handleNoteRemove = (noteId: INote['id']) => {
    dispatch(removeNote({ noteId }));
  };

  const handleNoteArchive = (noteId: INote['id']) => {
    dispatch(archiveNote({ noteId }));
  };

  return (
    <ActiveNotesTable
      notes={notes}
      onNoteRemove={handleNoteRemove}
      onNoteArchive={handleNoteArchive}
    />
  );
};

export default ActiveNotes;
