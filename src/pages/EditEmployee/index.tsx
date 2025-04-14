import { useParams } from "react-router-dom";
import { ContentContainer, InputsContainer, MainContainer } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { theme } from "@styles/theme";
import data from "@database/database.json";
import { EmployeeModel } from "@/models/employeeModel";

export function EditEmployee() {
  const employees: EmployeeModel[] = data;
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    return (
      <MainContainer>
        <h2>Colaborador não encontrado</h2>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div>
        <h2>Editar colaborador {employee.nome}</h2>
      </div>
      <div key={employee.id}>
        <ContentContainer>
          <InputsContainer>
            <Input label="Nome" inputSize="md" placeholder={employee.nome} />
            <Input label="CPF" cpf inputSize="md" placeholder={employee.cpf} />
            <Input
              label="Salário"
              inputSize="md"
              type="number"
              placeholder={employee.salario}
            />
            <Input
              label="Dependentes"
              inputSize="md"
              type="number"
              placeholder={employee.dependentes}
            />
          </InputsContainer>

          <Button
            $width="10%"
            $height="40px"
            $borderRadius="10px"
            $border="none"
            $backgroundColor={theme.COLORS.BLUE_500}
            $color={theme.COLORS.WHITE}
            $onHover={theme.COLORS.BLUE_200}
          >
            <span>Atualizar colaborador</span>
          </Button>
        </ContentContainer>
      </div>
    </MainContainer>
  );
}
