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
  color,
  label,
  error,
  success,
  arrow,
  value,
  onChange,
  selected,
  offset,
  dismiss,
  animate,
  lockScroll,
  containerProps,
  labelProps,
  menuProps,
  disabled,
  name,
  className,
}: Props) => (
  <MuiSelect
    variant={variant}
    size={size}
    color={color}
    label={label}
    error={error}
    success={success}
    arrow={arrow}
    value={value}
    onChange={onChange}
    selected={selected}
    offset={offset}
    dismiss={dismiss}
    animate={animate}
    lockScroll={lockScroll}
    containerProps={containerProps}
    labelProps={labelProps}
    menuProps={menuProps}
    disabled={disabled}
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
