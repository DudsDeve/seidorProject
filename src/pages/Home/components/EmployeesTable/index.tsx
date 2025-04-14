import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeModel } from "@/models/employeeModel";
import data from "@database/database.json";
import { PATHS } from "@utils/paths";
import {
  ActionsTable,
  ScrollBody,
  StyledTable,
  TableContainer,
  TableRow,
  Td,
  Th,
} from "./styles";

import EditIcon from "@assets/icons/editEmployeeBlackIcon.svg";
import DeleteIcon from "@assets/icons/deleteIcon.svg";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Modal } from "../Modal";
import { calcularSalarioBaseIR } from "@utils/CacularIRRF";

export function EmployessTable() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState<EmployeeModel[]>(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );

  const navigate = useNavigate();

  // Aplica o cálculo
  const salarioBaseList = calcularSalarioBaseIR(600); // ← valor fixo de previdência

  // Juntando dados
  const mergedEmployees = employees.map((employee) => {
    const calculado = salarioBaseList.find((e) => e.id === employee.id);
    return {
      ...employee,
      salarioBaseIR: calculado?.salarioBaseIR ?? 0,
    };
  });

  const filteredEmployees = mergedEmployees.filter((employee) => {
    return (
      employee.nome?.toLowerCase().includes(search.toLowerCase()) ||
      employee.cpf?.includes(search)
    );
  });

  const handleDeleteClick = (id: number) => {
    setSelectedEmployeeId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedEmployeeId !== null) {
      const updatedList = employees.filter(
        (emp) => emp.id !== selectedEmployeeId.toString()
      );
      setEmployees(updatedList);
    }
    setModalOpen(false);
    setSelectedEmployeeId(null);
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
    setSelectedEmployeeId(null);
  };

  return (
    <TableContainer>
      <Input
        type="text"
        placeholder="Buscar por nome ou CPF"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StyledTable>
        <thead>
          <TableRow>
            <Th>Nome</Th>
            <Th>CPF</Th>
            <Th>Salário Base IR</Th>
            <Th>Desconto</Th>
            <Th>Dependentes</Th>
            <Th>Desconto IRPF</Th>
            <Th>Atualizado em</Th>
            <Th>Criado em</Th>
            <Th></Th>
          </TableRow>
        </thead>
        <ScrollBody>
          <StyledTable>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <TableRow key={index}>
                  <Td>{employee.nome}</Td>
                  <Td>{employee.cpf}</Td>
                  <Td>R$ {employee.salarioBaseIR?.toFixed(2)}</Td>
                  <Td>R$ {employee.descontoIRPF.toFixed(2)}</Td>
                  <Td>{employee.dependentes}</Td>
                  <Td>{employee.atualizadoEm}</Td>
                  <Td>{employee.criadoEm}</Td>
                  <Td>
                    <ActionsTable>
                      <Button
                        icon={EditIcon}
                        $iconHeight="20px"
                        $iconWidth="20px"
                        $border="none"
                        onClick={() => {
                          navigate(
                            PATHS.EDIT_EMPLOYEE.replace(
                              ":id",
                              employee.id.toString()
                            )
                          );
                        }}
                      />
                      <Button
                        icon={DeleteIcon}
                        $iconHeight="20px"
                        $iconWidth="20px"
                        $border="none"
                        onClick={() => handleDeleteClick(Number(employee.id))}
                      />
                    </ActionsTable>
                  </Td>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </ScrollBody>
      </StyledTable>

      <Modal
        isOpen={modalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </TableContainer>
  );
}
