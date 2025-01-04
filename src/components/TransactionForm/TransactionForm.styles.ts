import styled from "styled-components/native";
import { lightTheme } from "../../theme/theme";

interface TypeButtonProps {
  active: boolean;
}

export const Container = styled.View`
  padding: 16px;
`;

export const TypeToggle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TypeButton = styled.TouchableOpacity<TypeButtonProps>`
  flex: 1;
  padding: 12px;
  background-color: ${({ active, theme }) => (active ? lightTheme.primary : theme.notActiveOptionBackground)};
  border-radius: 4px;
  margin: 0 4px;
  align-items: center;
`;

export const TypeButtonText = styled.Text<TypeButtonProps>`
  color: ${({ active, theme }) => (active ? theme.activeOptionTxt : lightTheme.primary)};
  font-size: 16px;
  font-weight: bold;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${lightTheme.primary};
  padding: 12px;
  border-radius: 4px;
  align-items: center;
  margin-top: 16px;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.error};
  padding: 12px;
  border-radius: 4px;
  align-items: center;
  margin-top: 16px;
`;


export const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.buttonTxt};
  font-size: 16px;
  font-weight: bold;
`;

export const CategoryItem = styled.TouchableOpacity<{ isLast: boolean }>`
  padding: 16px;
  border-bottom-width: ${({ isLast }) => (isLast ? "0px" : "1px")};
  border-bottom-color: ${({ theme }) => theme.inputBorder};
  background-color: ${({ theme }) => theme.transactionItemBackground};
`;

export const CategoryText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
