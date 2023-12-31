import { ReactNode, forwardRef } from "react";
import {
  Button as MuiButton,
  ButtonProps,
} from "@material-tailwind/react/components/Button";
import { Spinner } from "@material-tailwind/react/components/Spinner";

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
      color,
      fullWidth,
      onClick,
      disabled = false,
      ripple = true,
      className = "",
      preIcon,
      postIcon,
      id,
      type = "submit",
      loading,
    }: Props,
    ref
  ) => {
    const renderChildren = () => {
      if (loading) {
        return (
          <div className="flex gap-2 items-center justify-center">
            <Spinner className="mr-1" />
            {children}
          </div>
        );
      }

      if (preIcon ?? postIcon) {
        return (
          <>
            {preIcon && <span className="mr-2">{preIcon}</span>}
            {children}
            {postIcon && <span className="ml-2">{postIcon}</span>}
          </>
        );
      }

      return children;
    };

    return (
      <MuiButton
        color={color}
        id={id}
        onClick={onClick}
        disabled={disabled || loading}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        ripple={ripple}
        className={`flex items-center ${className}`}
        ref={ref}
        type={type}
      >
        {renderChildren()}
      </MuiButton>
    );
  }
);
