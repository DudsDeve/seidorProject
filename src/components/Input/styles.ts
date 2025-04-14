import { pixelToRem } from "@/helpers/pixelToRem";
import styled, { css } from "styled-components";

export const InputContainer = styled.section`
display: flex;
flex-direction: column;
gap: 0.5rem;`

export const Label = styled.label`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD};
color: ${theme.COLORS.GRAY_800};
`}
`

export const InputStyled = styled.input`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD};
color: ${theme.COLORS.GRAY_800};
padding: 0.5rem;
border-radius: 5px;
border: none;
outline: none;
width: 100%;
background-color: transparent;
  
`}
`

interface InputContentProps {
    $height: number
    $width: number
}
export const InputContent = styled.div<InputContentProps>`
display:flex;
align-items: center;
border-radius: 5px;
padding: 0 ${pixelToRem(15)};
box-shadow: none;

${({ theme, $height, $width }) => css`
height: ${pixelToRem($height)};
width: ${pixelToRem($width)};
border: 1px solid ${theme.COLORS.GRAY_800};
`}
        

&:focus-within {
outline: 1px solid ${({ theme }) => theme.COLORS.BLUE_500};
transition: outline 0.3s ease;
          }

img{
    width: ${pixelToRem(15)};
    height: ${pixelToRem(15)};
}
}`