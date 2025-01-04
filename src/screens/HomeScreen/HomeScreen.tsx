import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import {
  Container,
  Section,
  SectionTitle,
  ValueText,
} from "./HomeScreen.styles";
import { useGroupedTransactions } from "../../hooks/useGroupedTransactions";
import AppPieChart from "../../components/AppPieChart/AppPieChart";

const HomeScreen = () => {

  const { incomeData, expenseData, totalIncome, TotalExpenses } = useGroupedTransactions();

  const fadeAnimValues = useRef(new Animated.Value(0)).current;
  const slideInIncomeChart = useRef(new Animated.Value(-300)).current;
  const slideInExpenseChart = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnimValues, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(slideInIncomeChart, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideInExpenseChart, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Container>
      {/* Income Section */}
      <Section>
        <Animated.View
          style={{
            transform: [{ translateX: slideInIncomeChart }],
          }}
        >
          <AppPieChart data={incomeData} />
        </Animated.View>
        <SectionTitle>
          Total Income:
        </SectionTitle>
        <Animated.View style={{ opacity: fadeAnimValues }}>
          <ValueText>${totalIncome}</ValueText>
        </Animated.View>
      </Section>

      {/* Expenses Section */}
      <Section>
        <Animated.View
          style={{
            transform: [{ translateX: slideInExpenseChart }],
          }}
        >
          <AppPieChart data={expenseData} />
        </Animated.View>
        <SectionTitle>Total Expenses:</SectionTitle>
        <Animated.View style={{ opacity: fadeAnimValues }}>
          <ValueText>${TotalExpenses}</ValueText>
        </Animated.View>
      </Section>
    </Container>
  );
};

export default HomeScreen;
