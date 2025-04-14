import styled from 'styled-components'

export const TableContainer = styled.div`
  padding: 2rem;
  width: 100%;
  overflow-x: auto;
  
`
export const TableRow = styled.tr`
display: grid;
grid-template-columns: 3fr 1.3fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr  ;
border-radius: 5px;

`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`

export const Th = styled.th`
  background-color: ${({ theme }) => theme.COLORS.BLUE_500 };
  color:${({ theme }) => theme.COLORS.WHITE };
  text-align: left;
  padding: 0.75rem;
  border-right: 1px solid  ${({theme}) => theme.COLORS.GRAY_500};
`

export const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
`
export const ActionsTable = styled.div`
display: flex;
align-items: center;
justify-content: end  ;
gap: 0.5rem;

`