import { Category } from '../types/note.types';

export const CATEGORIES = Object.values(Category).filter(
  (value) => typeof value === 'string'
);
