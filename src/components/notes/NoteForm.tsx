import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormControl, TextInput, Select } from '@/components/ui';
import { Category } from '@/utils/types/note.types';
import { CATEGORIES } from '@/utils/constants/note.constants';
import { AddNoteDto } from '@/utils/dtos/note.dtos';

type FormValues = AddNoteDto;

const noteSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .max(20, 'Must be 20 characters or less'),
  content: Yup.string()
    .required('Required')
    .max(80, 'Must be 80 characters or less'),
  category: Yup.mixed<Category>().oneOf(Object.values(Category)),
});

type NoteFormProps = {
  initialValues?: FormValues;
  onSubmit: any;
};

const NoteForm: React.FC<NoteFormProps> = ({
  initialValues = { name: '', content: '', category: Category.TASK },
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={noteSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormControl.Wrapper className="mb-4 space-y-2">
          <FormControl>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="name"
            />
          </FormControl>

          <FormControl>
            <TextInput
              label="Content"
              name="content"
              type="text"
              placeholder="content"
            />
          </FormControl>

          <Select label="Category" name="category">
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormControl.Wrapper>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default NoteForm;
