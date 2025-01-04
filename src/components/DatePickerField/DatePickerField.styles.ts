import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 16px;
  padding-start: 9px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.inputBorder};
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.modalBackground};
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.modalCardBackground};
  padding: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  padding: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
`;
