import React from "react";
import { ChartContainer } from "./AppPieChart.styles";

import { GroupedTransaction } from "../../hooks/useGroupedTransactions";
import { PieChart } from "react-native-chart-kit";
import { useTheme } from "styled-components/native";

interface AppPieChartProps {
  data: GroupedTransaction[];
}

const AppPieChart: React.FC<AppPieChartProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <ChartContainer>
      <PieChart
        data={data}
        width={300}
        height={200}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="10"
        chartConfig={{
          backgroundGradientFrom: theme.pieChartBackground,
          backgroundGradientTo: theme.pieChartBackground,
          color: () => theme.primary,
        }}
      />
    </ChartContainer>
  );
};

export default AppPieChart;
