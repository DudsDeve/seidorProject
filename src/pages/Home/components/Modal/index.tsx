// components/ConfirmDeleteModal.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Actions, Content, Description, Overlay, Title } from "./styles";
import { Button } from "@components/Button";
import { theme } from "@styles/theme";

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function Modal({ isOpen, onConfirm, onCancel }: ModalProps) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Confirmar exclusão</Title>
          <Description>
            Tem certeza que deseja excluir este colaborador?
          </Description>
          <Actions>
            <Button
              $height="40px"
              $width="100%"
              $borderRadius="10px"
              $backgroundColor={theme.COLORS.GRAY_500}
              onClick={onCancel}
            >
              Cancelar
            </Button>
            <Button
              $height="40px"
              $width="100%"
              $borderRadius="10px"
              $backgroundColor={theme.COLORS.RED_100}
              $color={theme.COLORS.WHITE}
              onClick={onConfirm}
            >
              Confirmar
            </Button>
          </Actions>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
