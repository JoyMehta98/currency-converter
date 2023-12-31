import {
  Typography as MuiTypography,
  TypographyProps,
} from "@material-tailwind/react/components/Typography";

export const Typography = ({
  children,
  key,
  variant,
  color,
  textGradient,
  as,
  className,
  onClick,
}: TypographyProps) => (
  // @ts-expect-error error from material-tailwind
  <MuiTypography
    key={key}
    variant={variant}
    color={color}
    textGradient={textGradient}
    as={as}
    onClick={onClick}
    className={className}
  >
    {children}
  </MuiTypography>
);
