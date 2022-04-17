import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '@/store/features/modal.slice';
import notesReducer from '@/store/features/notes.slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
