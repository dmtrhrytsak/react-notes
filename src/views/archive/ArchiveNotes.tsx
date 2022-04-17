import { useSelector } from 'react-redux';

import {
  selectArchivedeNotes,
  unarchiveNote,
} from '@/store/features/notes.slice';
import { useAppDispatch } from '@/utils/hooks/redux.hooks';
import { ArchiveNotesTable } from '@/views/archive';
import { INote } from '@/utils/types/note.types';

const ArchiveNotes: React.FC = () => {
  const notes = useSelector(selectArchivedeNotes);

  const dispatch = useAppDispatch();

  const handleNoteUnarchive = (noteId: INote['id']) => {
    dispatch(unarchiveNote({ noteId }));
  };

  return (
    <ArchiveNotesTable notes={notes} onNoteUnarchive={handleNoteUnarchive} />
  );
};

export default ArchiveNotes;
