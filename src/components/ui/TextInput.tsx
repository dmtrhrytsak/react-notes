import { Field, useField, FieldHookConfig } from 'formik';

import { FormControl } from '@/components/ui';

type TextInputProps = {
  label: string;
} & FieldHookConfig<string>;

const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl.Label htmlFor={props.id || props.name}>
        {label}
      </FormControl.Label>
      <Field
        label={label}
        {...field}
        {...props}
        className="p-1 border-2 border-transperent outline-none focus:border-blue-600"
      />
      {meta.touched && meta.error && (
        <FormControl.ErrorMessage>{meta.error}</FormControl.ErrorMessage>
      )}
    </>
  );
};

export default TextInput;
