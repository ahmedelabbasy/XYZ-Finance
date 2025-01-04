import React, { useState, useRef } from "react";
import {
  Container,
  TypeToggle,
  TypeButton,
  TypeButtonText,
  StyledButton,
  StyledButtonText,
  CategoryItem,
  CategoryText,
} from "./TransactionForm.styles";
import AppInput from "../AppInput/AppInput";
import DatePickerField from "../DatePickerField/DatePickerField";
import { Transaction, TransactionType } from "../../types/Transaction";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { DUMMY_CATEGORIES_LIST } from "../../constants/constants";

interface TransactionFormProps {
  onSubmit: (transaction: Transaction) => void; // Required callback for form submission
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [type, setType] = useState<TransactionType>(TransactionType.Income);
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<string>(new Date().toISOString());
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<{ amount?: string; category?: string }>(
    {}
  );

  const actionSheetRef = useRef<ActionSheetRef>(null);

  const validateForm = () => {
    const newErrors: { amount?: string; category?: string } = {};

    // Validate Amount
    const amountRegex = /^[0-9]{1,7}(\.[0-9]{1,2})?$/; // Allows up to 7 digits with optional decimal
    if (!amount || !amountRegex.test(amount)) {
      newErrors.amount = "Amount must be up to 7 digits and numeric.";
    }

    // Validate Category
    if (!category) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearForm = () => {
    setType(TransactionType.Income);
    setAmount('');
    setCategory('');
    setDate(new Date().toISOString());
    setDescription('');
  }

  const handleSubmit = () => {
    if (!validateForm()) return;

    const newTransaction: Transaction = {
      id: new Date().getTime().toString(),
      type,
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    clearForm();
    onSubmit(newTransaction);
  };

  return (
    <Container>
      {/* Transaction Type Toggle */}
      <TypeToggle>
        <TypeButton
          active={type === TransactionType.Income}
          onPress={() => setType(TransactionType.Income)}
        >
          <TypeButtonText active={type === TransactionType.Income}>
            Income
          </TypeButtonText>
        </TypeButton>
        <TypeButton
          active={type === TransactionType.Expense}
          onPress={() => setType(TransactionType.Expense)}
        >
          <TypeButtonText active={type === TransactionType.Expense}>
            Expense
          </TypeButtonText>
        </TypeButton>
      </TypeToggle>

      {/* Form Inputs */}
      <AppInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        error={errors.amount}
      />
      {/* Disabled Input for Category */}
      <AppInput
        label="Category"
        value={category}
        editable={false}
        onChangeText={() => {}}
        onPress={() => actionSheetRef.current?.show()}
        error={errors.category}
      />

      {/* Action Sheet for Category Selection */}
      <ActionSheet ref={actionSheetRef}>
        {DUMMY_CATEGORIES_LIST.map((cat, index) => (
          <CategoryItem
            key={index}
            isLast={index === DUMMY_CATEGORIES_LIST.length - 1}
            onPress={() => {
              setCategory(cat);
              actionSheetRef.current?.hide();
            }}
          >
            <CategoryText>{cat}</CategoryText>
          </CategoryItem>
        ))}
      </ActionSheet>
      <AppInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        error={undefined}
      />
      <DatePickerField
        label="Date"
        selectedDate={new Date(date)}
        onChange={(selectedDate) => setDate(selectedDate.toISOString())}
        error={undefined}
      />
      <StyledButton onPress={handleSubmit}>
        <StyledButtonText>Add Transaction</StyledButtonText>
      </StyledButton>
    </Container>
  );
};

export default TransactionForm;
