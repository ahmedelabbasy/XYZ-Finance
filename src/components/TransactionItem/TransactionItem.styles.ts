import styled from "styled-components/native";

export const TransactionItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.transactionItemBackground};
  padding: 12px;
  margin-bottom: 8px;
  shadow-color: ${({ theme }) => theme.shadow};
  shadow-offset: 0px 1px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 1;
`;

export const TransactionText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
`;

export const TransactionDate = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.transactionItemDescription};
`;

export const DescriptionText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.transactionItemDescription};
  margin-top: 4px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const TransactionDetailsContainer = styled.View`
  flex: 1;
`;
