import styled, { css } from "styled-components";

interface StyledButtonProps {
  $backgroundColor?: string;
  $color?: string;
  $border?: string;
  $borderRadius?: string;
  $width?: string;
  $height?: string;
  $hoverColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ $backgroundColor, $color, $border, $borderRadius, $width, $height, $hoverColor }) => css`
    background-color: ${$backgroundColor || "transparent"};
    color: ${$color };
    border: ${$border || "none"};
    border-radius: ${$borderRadius };
    width: ${$width };
    height: ${$height };

    &:hover {
      background-color: ${$hoverColor };
    }
  `}
`;
