import { pixelToRem } from "@/helpers/pixelToRem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.section`
 display: flex;
 flex-direction: column;
 gap:${pixelToRem(10)};
width:8%;
background: ${({ theme }) => theme.COLORS.BLUE_900};
color:${({theme})=> theme.COLORS.WHITE};
padding:${pixelToRem(10)}
`
export const ContentContainer = styled.div`
display:flex;
flex-direction: column;
gap:${pixelToRem(10)}
`

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${pixelToRem(10)};
font-size: ${pixelToRem(16)};
  padding: ${pixelToRem(5)};
  border-radius: ${pixelToRem(5)};
text-decoration: none;
color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;

  img {
    width: ${pixelToRem(16)};
    height: ${pixelToRem(16)};
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.COLORS.BLUE_500};
    transition: 0.24s;
  }
`