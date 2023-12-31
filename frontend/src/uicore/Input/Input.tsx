import {
  Input as MuiInput,
  InputProps,
} from "@material-tailwind/react/components/Input";

export interface Props extends InputProps {
  name: string;
}

export const Input = ({
  variant,
  size,
  label,
  className,
  name,
  required = true,
  type,
  value,
  onChange,
}: Props) => (
  <div className="flex flex-col w-full">
    <MuiInput
      id={`input-${name}`}
      variant={variant}
      size={size}
      label={label}
      required={required}
      className={className}
      crossOrigin //'crossOrigin' is required in '@types/react' v18.2.20 and later but not needed in versions below
      value={value}
      onChange={onChange}
      type={type}
    />
  </div>
);
