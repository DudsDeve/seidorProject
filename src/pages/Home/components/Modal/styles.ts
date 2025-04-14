import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
`;

export const Title = styled(Dialog.Title)`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled(Dialog.Description)`
  margin: 1rem 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;


`;
