import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/transactionsSlice";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { Container } from "./ManageTransactionScreen.styles";

const ManageTransactionScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const handleSubmit = (newTransaction: any) => {

    dispatch(addTransaction(newTransaction));
    Alert.alert(
      "Success",
      "Transaction added successfully! Click OK to see all transactions.",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Transactions"), // Navigate to Transactions screen
        },
        {
          text: "No, Thanks.",
          style: "cancel", 
        },
      ]
    );
  };

  return (
    <Container>
      <Animated.View entering={SlideInLeft.duration(1000)}>
        <TransactionForm
          onSubmit={handleSubmit}
        />
      </Animated.View>
    </Container>
  );
};

export default ManageTransactionScreen;