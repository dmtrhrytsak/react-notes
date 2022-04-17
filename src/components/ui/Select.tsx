import { Field, useField, FieldHookConfig } from 'formik';

import { FormControl } from '@/components/ui';

type SelectProps = {
  label: string;
} & FieldHookConfig<string>;

const Select = ({ label, ...props }: SelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <FormControl.Label htmlFor={props.id || props.name}>
        {label}
      </FormControl.Label>
      <Field
        as="select"
        {...field}
        className="p-1 bg-white w-full border-2 border-transperent outline-none focus:border-blue-600"
        {...props}
      />
      {meta.touched && meta.error && (
        <FormControl.ErrorMessage>{meta.error}</FormControl.ErrorMessage>
      )}
    </div>
  );
};
export default Select;
