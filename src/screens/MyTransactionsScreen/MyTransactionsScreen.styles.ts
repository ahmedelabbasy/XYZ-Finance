import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  margin-left: 16px;
`;
