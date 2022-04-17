import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux.hooks';
import { editNote, selectNoteById } from '@/store/features/notes.slice';
import { NoteForm } from '@/components/notes';
import { EditNoteDto } from '@/utils/dtos/note.dtos';
import { useEffect } from 'react';

const EditNote: React.FC = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const note = useAppSelector((state) => selectNoteById(state, noteId!));

  const dispatch = useAppDispatch();

  const handleNoteEdit = (noteData: EditNoteDto) => {
    dispatch(editNote({ noteId: noteId!, noteData }));
    navigate('/');
  };

  useEffect(() => {
    if (!note) {
      navigate('/', { replace: true });
    }
  }, [note, navigate]);

  if (!note) {
    return null;
  }

  return <NoteForm initialValues={note} onSubmit={handleNoteEdit} />;
};

export default EditNote;
