import { ReactNode, forwardRef } from "react";
import {
  Button as MuiButton,
  ButtonProps,
} from "@material-tailwind/react/components/Button";

interface Props extends Omit<ButtonProps, "children"> {
  children?: ReactNode;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  id: string;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      variant,
      size,
      onClick,
      disabled = false,
      className = "",
      id,
      loading,
    }: Props,
    ref
  ) => (
    // @ts-expect-error error from material-tailwind
    <MuiButton
      id={id}
      onClick={onClick}
      disabled={disabled || loading}
      size={size}
      variant={variant}
      className={`flex items-center ${className}`}
      ref={ref}
    >
      {children}
    </MuiButton>
  )
);
