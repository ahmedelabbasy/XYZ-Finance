import styled from "styled-components/native";

export const ChartContainer = styled.View`
  background-color: ${({ theme }) => theme.pieChartBackground};
  padding: 16px;
  border-radius: 12px;
  elevation: 4;
  shadow-color: ${({ theme }) => theme.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
`;
