import styled from "styled-components";

export const MainContainer = styled.section`
background: ${({ theme }) => theme.COLORS.GRAY_500};
width: 100%;

height:100vh;
padding: 2rem;
display: flex;
flex-direction: column;
gap: 1rem;

`
export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem;
background: ${({ theme }) => theme.COLORS.WHITE};

width: 100%;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const InputsContainer = styled.div`
display: flex;
gap: 1rem;`