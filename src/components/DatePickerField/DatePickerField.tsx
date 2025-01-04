import React, { useState } from "react";
import { Modal } from "react-native";
import {
  Container,
  Label,
  ErrorText,
  ModalBackground,
  ModalContent,
  ButtonRow,
  Button,
  ButtonText,
} from "./DatePickerField.styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useTheme } from "styled-components/native";

interface DatePickerFieldProps {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date) => void;
  error?: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  selectedDate,
  onChange,
  error,
}) => {
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDateChange = (_: any, date?: Date) => {
    if (date) onChange(date);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Button onPress={() => setIsModalVisible(true)}>
        <ButtonText>{moment(selectedDate).format("DD-MM-YYYY")}</ButtonText>
      </Button>
      {error && <ErrorText>{error}</ErrorText>}

      {/* Modal for Date Picker */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <ModalBackground>
          <ModalContent>
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
              textColor={theme.text}
              
            />
            <ButtonRow>
              <Button onPress={() => setIsModalVisible(false)}>
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button onPress={() => setIsModalVisible(false)}>
                <ButtonText>Set</ButtonText>
              </Button>
            </ButtonRow>
          </ModalContent>
        </ModalBackground>
      </Modal>
    </Container>
  );
};

export default DatePickerField;
