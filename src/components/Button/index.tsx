import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles"; // ajuste o path se necessário

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: string;
  $iconWidth?: string;
  $iconHeight?: string;
  $backgroundColor?: string;
  $color?: string;
  $border?: string;
  $borderRadius?: string;
  $width?: string;
  $height?: string;
  $onHover?: string;
}

export function Button({
  children,
  icon,
  $iconWidth,
  $iconHeight,
  $backgroundColor,
  $color,
  $border,
  $borderRadius,
  $width,
  $height,
  $onHover,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      $backgroundColor={$backgroundColor}
      $color={$color}
      $border={$border}
      $borderRadius={$borderRadius}
      $width={$width}
      $height={$height}
      $hoverColor={$onHover}
      {...rest}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={{
            width: $iconWidth,
            height: $iconHeight,
            marginRight: children ? "8px" : "0",
          }}
        />
      )}
      {children}
    </StyledButton>
  );
}
