import { Typography } from "../Typography";

interface Props {
  message: string;
}

export const FieldErrorMessage = ({ message }: Props) => (
  <Typography variant="small" className="text-red-500">
    {message}
  </Typography>
);
