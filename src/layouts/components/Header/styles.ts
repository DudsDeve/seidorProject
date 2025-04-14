import { pixelToRem } from '@/helpers/pixelToRem'
import styled from 'styled-components'


export const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 ${pixelToRem(20)};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  
  img {
    width: ${pixelToRem(200)};}

`

export const PerfilContainer = styled.div`
display: flex;
align-items: center;
gap: ${pixelToRem(20)};
`
export const PerfilElipse = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  border-radius: 50%;
  height: ${pixelToRem(60)};
  width: ${pixelToRem(60)};
  display: flex; 
  justify-content: center; 
  align-items: center;     

  img {
    width: ${pixelToRem(52)};
    height: ${pixelToRem(52)};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 50%;
    
  }
`
export const PerfilName = styled.div`
  display: flex;
  flex-direction: column;
 

  span{
  color: ${({ theme }) => theme.COLORS.GRAY_800};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS};

  }
 
}
`


