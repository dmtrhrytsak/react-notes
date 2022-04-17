type Props = {
  children: React.ReactNode;
  [x: string]: any;
};

const FormErrorMessage = ({ children }: Props) => {
  return <p className="text-sm font-medium text-red-500">{children}</p>;
};

type FormLabelProps = {
  htmlFor: string;
} & Props;

const FormLabel = ({ children, htmlFor, ...props }: FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className="mb-1 font-semibold" {...props}>
      {children}
    </label>
  );
};

const FormControlWrapper = ({ children, ...props }: Props) => {
  return <div {...props}>{children}</div>;
};

const FormControl = ({ children, ...props }: Props) => {
  return (
    <div className="flex flex-col" {...props}>
      {children}
    </div>
  );
};

FormControl.Wrapper = FormControlWrapper;
FormControl.Label = FormLabel;
FormControl.ErrorMessage = FormErrorMessage;

export default FormControl;
