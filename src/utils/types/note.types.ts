export enum Category {
  TASK = 'task',
  IDEA = 'idea',
  QUOTE = 'quote',
  THOUGHT = 'thought',
}

export type CategoryWithNotes = Record<Category, INote[]>;

export type NoteState = 'active' | 'archived';

export interface INote {
  id: string;
  name: string;
  content: string;
  category: Category;
  archived: boolean;
  dates: string;
  createdAt: string;
}
