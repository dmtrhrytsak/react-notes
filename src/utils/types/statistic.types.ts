import { Category, NoteState } from '@/utils/types/note.types';

export type IStatistic = {
  category: Category;
  items: Record<NoteState, number>;
};
