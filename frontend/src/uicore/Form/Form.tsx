import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleSubmit: () => void;
  className?: string;
}

export const Form = ({ children, handleSubmit, className }: Props) => (
  <form onSubmit={handleSubmit} className={className} noValidate>
    {children}
  </form>
);
