import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
}

export function Button({
  children,
  icon,
  iconWidth,
  iconHeight,
  backgroundColor = "transparent",
  color,
  border,
  borderRadius,
  width,
  height,
  ...rest
}: ButtonProps) {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        color,
        border,
        borderRadius,
        width,
        height,
        cursor: "pointer",
      }}
      {...rest}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          style={{
            width: iconWidth,
            height: iconHeight,
          }}
        />
      )}
      {children}
    </button>
  );
}
