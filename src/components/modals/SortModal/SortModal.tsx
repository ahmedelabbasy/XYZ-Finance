import React, { useState } from "react";
import { Modal, Animated } from "react-native";
import {
  ModalContainer,
  ModalContent,
  Title,
  ButtonRow,
  ActionButtonText,
  OptionsContainer,
  Option,
  OptionText,
} from "./SortModal.styles";
import { SortKey } from "../../../types/FilterSortTypes";
import { ActionButton, ActionButtonCancel, ActionButtonClear } from "../FilterModal/FilterModal.styles";

interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSort: (key: SortKey) => void;
  onClear: () => void;
}

const SortModal: React.FC<SortModalProps> = ({
  isVisible,
  onClose,
  onSort,
  onClear,
}) => {
  const [selectedSortKey, setSelectedSortKey] = useState<SortKey>(null);
  const [animation] = useState(new Animated.Value(0));

  const handleApply = () => {
    onSort(selectedSortKey);
    onClose();
  };

  const handleClear = () => {
    setSelectedSortKey(null);
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
            <Title>Sort Options</Title>

            {/* Sort Options */}
            <OptionsContainer>
              <Option
                isSelected={selectedSortKey === "date"}
                onPress={() => setSelectedSortKey("date")}
              >
                <OptionText isSelected={selectedSortKey === "date"}>
                  By Date
                </OptionText>
              </Option>
              <Option
                isSelected={selectedSortKey === "amount"}
                onPress={() => setSelectedSortKey("amount")}
              >
                <OptionText isSelected={selectedSortKey === "amount"}>
                  By Amount
                </OptionText>
              </Option>
            </OptionsContainer>

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

export default SortModal;
