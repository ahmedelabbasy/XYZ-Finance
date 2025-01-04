import React, { useState, useRef, useEffect } from "react";
import { Animated, TextInputProps } from "react-native";
import { Container, Input, ErrorText } from "./AppInput.styles";
import { useTheme } from "styled-components/native";

interface AppInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(0)).current;
  const theme = useTheme();

  useEffect(() => {
    // If value is set programmatically, move the label to the top
    if (value) {
      Animated.timing(animatedLabel, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else if (!isFocused) {
      // Reset the label if the input is empty
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [value, isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Container>
      <Animated.Text
        style={{
          position: "absolute",
          top: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [20, -10],
          }),
          left: 10,
          fontSize: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
          }),
          color: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.placeholderText, theme.primary],
          }),
        }}
      >
        {label}
      </Animated.Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          borderBottomColor: error ? theme.error : theme.inputBorder,
          borderBottomWidth: 1,
          color: theme.text,
        }}
        {...props}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default AppInput;
