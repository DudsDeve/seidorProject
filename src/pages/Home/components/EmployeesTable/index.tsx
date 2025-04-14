import { EmployeeModel } from "@/models/employeeModel";
import {
  ActionsTable,
  StyledTable,
  TableContainer,
  TableRow,
  Td,
  Th,
} from "./styles";
import data from "@database/database.json";

import EditIcon from "@assets/icons/editEmployeeBlackIcon.svg";
import DeleteIcon from "@assets/icons/deleteIcon.svg";
import { Button } from "@components/Button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@utils/paths";
export function EmployessTable() {
  const employees: EmployeeModel[] = data;
  const navigate = useNavigate();
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Salário</Th>
            <Th>Desconto</Th>
            <Th>Dependentes</Th>
            <Th>Desconto IRPF</Th>
            <Th>Atualizado em</Th>
            <Th>Criado em</Th>
            <Th></Th>
          </TableRow>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <Td>{employee.nome}</Td>
              <Td>{employee.cpf}</Td>
              <Td>R$ {employee.salario.toFixed(2)}</Td>
              <Td>R$ {employee.desconto.toFixed(2)}</Td>
              <Td>{employee.dependentes}</Td>
              <Td>R$ {employee.descontoIRPF.toFixed(2)}</Td>
              <Td>{employee.atualizadoEm}</Td>
              <Td>{employee.criadoEm}</Td>
              <Td>
                <ActionsTable>
                  <Button
                    icon={EditIcon}
                    iconHeight="20px"
                    iconWidth="20px"
                    border="none"
                    onClick={() => {
                      navigate(`${PATHS.EDIT_EMPLOYEE}/${employee.id}`);
                    }}
                  />
                  <Button
                    icon={DeleteIcon}
                    iconHeight="20px"
                    iconWidth="20px"
                    border="none"
                  />
                </ActionsTable>
              </Td>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
