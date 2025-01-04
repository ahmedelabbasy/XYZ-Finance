import styled from "styled-components/native";

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.modalBackground};
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.modalCardBackground};
  padding: 16px;
  border-radius: 8px;
  width: 90%;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 0px 2px;
  shadow-radius: 8px;
  elevation: 5;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
  text-align: center;
`;

export const CategoryItem = styled.TouchableOpacity<{ isLast: boolean }>`
  padding: 16px;
  border-bottom-width: ${({ isLast }) => (isLast ? "0px" : "1px")};
  border-bottom-color: ${({ theme }) => theme.inputBorder};
`;

export const CategoryText = styled.Text`
  font-size: 16px;
`;

export const TypeToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
`;

export const StyledButtonContainer = styled.View`
  margin-top: 16px;
`;
