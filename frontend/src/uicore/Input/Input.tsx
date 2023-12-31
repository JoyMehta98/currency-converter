import {
  Input as MuiInput,
  InputProps,
} from "@material-tailwind/react/components/Input";
import { FieldErrorMessage } from "../FieldErrorMessage";

export interface Props extends InputProps {
  name: string;
  errorMessage?: AnyType;
}

export const Input = ({
  variant,
  size,
  color,
  label,
  success,
  icon,
  labelProps,
  containerProps,
  className,
  shrink,
  inputRef,
  placeholder,
  name,
  disabled,
  required = true,
  errorMessage,
  type,
  value,
  onChange,
}: Props) => (
  <div className="flex flex-col w-full">
    <MuiInput
      id={`input-${name}`}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      label={label}
      required={required}
      placeholder={placeholder}
      error={Boolean(errorMessage)}
      success={success}
      icon={icon}
      labelProps={labelProps}
      containerProps={containerProps}
      className={className}
      shrink={shrink}
      inputRef={inputRef}
      crossOrigin //'crossOrigin' is required in '@types/react' v18.2.20 and later but not needed in versions below
      value={value}
      onChange={onChange}
      type={type}
    />

    {errorMessage && <FieldErrorMessage message={errorMessage} />}
  </div>
);
