import React, { useState } from "react";
import { Modal, Animated } from "react-native";
import {
  ModalContainer,
  ModalContent,
  Title,
  ButtonRow,
  ActionButton,
  ActionButtonText,
  OptionsContainer,
  Option,
  OptionText,
  ActionButtonCancel,
  ActionButtonClear,
} from "./FilterModal.styles";
import DatePickerField from "../../../components/DatePickerField/DatePickerField";
import { TransactionTypeFilter } from "../../../types/FilterSortTypes";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFilter: (type: TransactionTypeFilter) => void;
  onDateChange: (date: Date | null) => void;
  onClear: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  onClose,
  onFilter,
  onDateChange,
  onClear,
}) => {
  const [selectedType, setSelectedType] = useState<TransactionTypeFilter>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [animation] = useState(new Animated.Value(0));

  const handleApply = () => {
    onFilter(selectedType);
    onDateChange(selectedDate);
    onClose();
  };

  const handleClear = () => {
    setSelectedType(null);
    setSelectedDate(null);
    onClear();
    onClose();
  };

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Modal visible={isVisible} transparent animationType="none">
      <ModalContainer>
        <Animated.View
          style={{
            opacity: animation,
            transform: [{ scale: animation }],
          }}
        >
          <ModalContent>
            <Title>Filter Options</Title>

            {/* Filter by Type */}
            <OptionsContainer>
              <Option
                isSelected={selectedType === "income"}
                onPress={() => setSelectedType("income")}
              >
                <OptionText isSelected={selectedType === "income"}>
                  Income
                </OptionText>
              </Option>
              <Option
                isSelected={selectedType === "expense"}
                onPress={() => setSelectedType("expense")}
              >
                <OptionText isSelected={selectedType === "expense"}>
                  Expense
                </OptionText>
              </Option>
            </OptionsContainer>

            {/* Date Picker */}
            <DatePickerField
              label="Filter by Date"
              selectedDate={selectedDate || new Date()}
              onChange={(date) => setSelectedDate(date)}
              error={undefined}
            />

            {/* Action Buttons */}
            <ButtonRow>
              <ActionButtonCancel onPress={onClose}>
                <ActionButtonText>Cancel</ActionButtonText>
              </ActionButtonCancel>
              <ActionButtonClear onPress={handleClear}>
                <ActionButtonText>Clear</ActionButtonText>
              </ActionButtonClear>
              <ActionButton onPress={handleApply}>
                <ActionButtonText>Set</ActionButtonText>
              </ActionButton>
            </ButtonRow>
          </ModalContent>
        </Animated.View>
      </ModalContainer>
    </Modal>
  );
};

export default FilterModal;
