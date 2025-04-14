import { InputContainer, Label, InputStyled, InputContent } from "./styles";
import InputMask from "react-input-mask";
import React from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  label?: string;
  placeholder?: string | number; // agora aceita string ou número
  cpf?: boolean;
  inputSize?: "lg" | "md" | "sm";
  image?: string;
  alt?: string;
}

export function Input({
  label,
  placeholder,
  cpf,
  inputSize = "md",
  image,
  alt,
  ...rest
}: InputProps) {
  const HEIGHT = {
    sm: 30,
    md: 35,
    lg: 40,
  };
  const WIDTH = {
    sm: 150,
    md: 300,
    lg: 500,
  };

  const inputHeight = HEIGHT[inputSize];
  const inputWidth = WIDTH[inputSize];

  return (
    <InputContainer>
      {label && <Label>{label}</Label>}

      <InputContent $height={inputHeight} $width={inputWidth}>
        {image && <img src={image} alt={alt} />}
        {cpf ? (
          <InputMask mask="999.999.999-99" {...rest}>
            {(inputProps: any) => (
              <InputStyled {...inputProps} placeholder={placeholder} />
            )}
          </InputMask>
        ) : (
          <InputStyled type="text" placeholder={placeholder} {...rest} />
        )}
      </InputContent>
    </InputContainer>
  );
}
