import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-native";
import {
  ModalOverlay,
  ModalContent,
  Title,
  CategoryItem,
  CategoryText,
  StyledButtonContainer,
  TypeToggleContainer,
} from "./UpdateTransaction.styles";
import AppInput from "../../AppInput/AppInput";
import {
  CancelButton,
  StyledButton,
  StyledButtonText,
  TypeButton,
  TypeButtonText,
} from "../../TransactionForm/TransactionForm.styles";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { Transaction, TransactionType } from "../../../types/Transaction";
import { DUMMY_CATEGORIES_LIST } from "../../../constants/constants";

interface UpdateTransactionModalProps {
  isVisible: boolean;
  transaction: Transaction | null;
  onClose: () => void;
  onUpdate: (transaction: Transaction) => void;
}

const UpdateTransactionModal: React.FC<UpdateTransactionModalProps> = ({
  isVisible,
  transaction,
  onClose,
  onUpdate,
}) => {
  const [type, setType] = useState<TransactionType>(
    transaction?.type || TransactionType.Income
  );
  const [amount, setAmount] = useState<string>(
    transaction?.amount.toString() || ""
  );
  const [category, setCategory] = useState<string>(transaction?.category || "");
  const [description, setDescription] = useState<string>(
    transaction?.description || ""
  );
  const [errors, setErrors] = useState<{ amount?: string; category?: string }>(
    {}
  );

  const actionSheetRef = useRef<ActionSheetRef>(null);

  useEffect(() => {
    if (transaction) {
      setType(transaction.type);
      setAmount(transaction.amount.toString());
      setCategory(transaction.category);
      setDescription(transaction.description);
    }
  }, [transaction]);

  const validateForm = () => {
    const newErrors: { amount?: string; category?: string } = {};

    // Validate Amount
    const amountRegex = /^[0-9]{1,7}(\.[0-9]{1,2})?$/;
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

  const handleSubmit = () => {
    if (!validateForm()) return;

    const updatedTransaction: Transaction = {
      ...transaction!,
      type,
      amount: parseFloat(amount),
      category,
      description,
    };

    onUpdate(updatedTransaction);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <ModalOverlay>
        <ModalContent>
          <Title>Update Transaction</Title>

          {/* Transaction Type Toggle */}
          <TypeToggleContainer>
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
          </TypeToggleContainer>

          {/* Form Inputs */}
          <AppInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            error={errors.amount}
          />
          <AppInput
            label="Category"
            value={category}
            editable={false}
            onChangeText={() => {}}
            onPress={() => actionSheetRef.current?.show()}
            error={errors.category}
          />
          <ActionSheet ref={actionSheetRef}>
            {DUMMY_CATEGORIES_LIST.map((cat, index) => (
              <CategoryItem
                key={index}
                onPress={() => {
                  setCategory(cat);
                  actionSheetRef.current?.hide();
                }}
                isLast={index === DUMMY_CATEGORIES_LIST.length - 1}
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

          {/* Submit Button */}
          <StyledButtonContainer>
            <StyledButton onPress={handleSubmit}>
              <StyledButtonText>Update Transaction</StyledButtonText>
            </StyledButton>
            <CancelButton onPress={onClose}>
              <StyledButtonText>Close</StyledButtonText>
            </CancelButton>
          </StyledButtonContainer>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default UpdateTransactionModal;
