import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TransactionItemContainer,
  TransactionText,
  TransactionDate,
  DescriptionText,
  ActionsContainer,
  ActionButton,
  TransactionDetailsContainer,
} from "./TransactionItem.styles";
import { TransactionType } from "../../types/Transaction";
import { useTheme } from "styled-components/native";

interface TransactionItemProps {
  category: string;
  amount: number;
  date: string;
  type: TransactionType;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  category,
  amount,
  date,
  type,
  description,
  onEdit,
  onDelete,
}) => {
  const theme = useTheme();

  return (
    <TransactionItemContainer>
      {/* Left Section */}
      <TransactionDetailsContainer>
        <TransactionText>
          {type === "income" ? "+" : "-"} {amount} ({category})
        </TransactionText>
        <TransactionDate>{new Date(date).toLocaleDateString()}</TransactionDate>
        {description && <DescriptionText>{description}</DescriptionText>}
      </TransactionDetailsContainer>

      {/* Action Buttons */}
      <ActionsContainer>
        <ActionButton onPress={onEdit}>
          <MaterialIcons name="edit" size={20} color={theme.primary} />
        </ActionButton>
        <ActionButton onPress={onDelete}>
          <MaterialIcons name="delete" size={20} color={theme.error} />
        </ActionButton>
      </ActionsContainer>
    </TransactionItemContainer>
  );
};

export default TransactionItem;
