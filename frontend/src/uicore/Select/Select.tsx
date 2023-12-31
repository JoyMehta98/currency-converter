import {
  Select as MuiSelect,
  SelectProps,
  Option,
} from "@material-tailwind/react/components/Select";

interface OptionItem {
  label: string;
  value: string;
}

interface Props extends Omit<SelectProps, "children"> {
  options: OptionItem[];
}

export const Select = ({
  options,
  variant,
  size,
  label,
  value,
  onChange,
  name,
  className,
}: Props) => (
  // @ts-expect-error error from material-tailwind
  <MuiSelect
    variant={variant}
    size={size}
    label={label}
    value={value}
    onChange={onChange}
    name={name}
    className={className}
  >
    {options.map((item) => (
      <Option
        key={item.label}
        value={item.value}
        className="flex items-center gap-1"
      >
        {item.label}
      </Option>
    ))}
  </MuiSelect>
);
