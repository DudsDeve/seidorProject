import { ContentContainer, InputsContainer, MainContainer } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { theme } from "@styles/theme";
export function NewEmployee() {
  return (
    <MainContainer>
      <div>
        <h2>Adicione um novo colaborador</h2>
      </div>
      <ContentContainer>
        <InputsContainer>
          <Input label="Nome" height="md" placeholder="Digite seu nome" />
          <Input label="CPF" cpf height="md" placeholder="Digite seu CPF" />
          <Input
            label="Salário"
            type="number"
            height="md"
            placeholder="Informe seu salário atual"
          />
          <Input
            label="Dependentes"
            height="md"
            type="number"
            placeholder="Informe o número de dependentes"
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
          <span>Adicionar colaborador</span>
        </Button>
      </ContentContainer>
    </MainContainer>
  );
}
