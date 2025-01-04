import styled from "styled-components/native";
import { darkTheme, lightTheme } from "../../../theme/theme";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.modalBackground};
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.modalCardBackground};
  padding: 24px;
  border-radius: 16px;
  width: 90%;
  elevation: 5;
  shadow-color: ${({ theme }) => theme.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${lightTheme.primary};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin: 0 8px;
`;

export const ActionButtonCancel = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.error};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin: 0 8px;
`;
export const ActionButtonClear = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.clear};
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  margin: 0 8px;
`;


export const ActionButtonText = styled.Text`
  color: ${darkTheme.text};
  font-size: 16px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Option = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex: 1;
  padding: 12px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${({ isSelected, theme }) => (isSelected ? lightTheme.primary : theme.notActiveOptionBackground)};
  align-items: center;
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected, theme }) => (isSelected ? theme.activeOptionTxt : lightTheme.primary)};
  font-size: 16px;
  font-weight: bold;
`;
