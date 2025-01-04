import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 16px;
  position: relative;
`;

export const Label = styled.Text`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.placeholderText};
  font-size: 16px;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.inputBorder};
  padding: 8px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  margin-top: 4px;
`;
