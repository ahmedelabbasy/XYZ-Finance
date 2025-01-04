import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
  align-items: center;
`;

export const ValueText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 8px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
  color: ${({ theme }) => theme.primary};
`;