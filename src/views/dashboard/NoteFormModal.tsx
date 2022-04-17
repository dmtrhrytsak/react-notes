import { FormikHelpers } from 'formik';

import { Modal } from '@/components/ui';
import { NoteForm } from '@/components/notes';
import { AddNoteDto } from '@/utils/dtos/note.dtos';

type NoteFormModalProps = {
  isModalVisible: boolean;
  onModalShow: () => void;
  onModalHide: () => void;
  onNoteAdd: (
    noteData: AddNoteDto,
    formikHelpers: FormikHelpers<AddNoteDto>
  ) => void;
};

const NoteFormModal: React.FC<NoteFormModalProps> = ({
  isModalVisible,
  onModalShow,
  onModalHide,
  onNoteAdd,
}) => {
  return (
    <>
      <Modal isVisible={isModalVisible} onHide={onModalHide}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            <NoteForm onSubmit={onNoteAdd} />
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <div className="flex justify-end">
        <button
          className="fixed z-10 bottom-6 w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold leading-4"
          onClick={onModalShow}
        >
          Add Note
        </button>
      </div>
    </>
  );
};

export default NoteFormModal;
