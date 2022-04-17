import { INote } from '@/utils/types/note.types';

export type AddNoteDto = Pick<INote, 'name' | 'content' | 'category'>;
export type EditNoteDto = Pick<INote, 'name' | 'content' | 'category'>;
