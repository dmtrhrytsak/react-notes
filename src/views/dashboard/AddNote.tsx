import { FormikHelpers } from 'formik';

import { useAppDispatch } from '@/utils/hooks/redux.hooks';
import { addNote } from '@/store/features/notes.slice';
import { useModal } from '@/utils/hooks/modal.hook';
import { NoteFormModal } from '@/views/dashboard';
import { AddNoteDto } from '@/utils/dtos/note.dtos';

const AddNote: React.FC = () => {
  const { isVisible, handleShow, handleHide } = useModal();

  const dispatch = useAppDispatch();

  const handleNoteAdd = (
    noteData: AddNoteDto,
    { resetForm }: FormikHelpers<AddNoteDto>
  ) => {
    dispatch(addNote({ noteData }));
    resetForm();
  };

  return (
    <NoteFormModal
      isModalVisible={isVisible}
      onModalShow={handleShow}
      onModalHide={handleHide}
      onNoteAdd={handleNoteAdd}
    />
  );
};

export default AddNote;
