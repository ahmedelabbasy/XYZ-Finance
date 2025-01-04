import React, { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeTransaction, updateTransaction } from "../../store/transactionsSlice";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import FilterModal from "../../components/modals/FilterModal/FilterModal";
import SortModal from "../../components/modals/SortModal/SortModal";
import { Container, Header, IconButton } from "./MyTransactionsScreen.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Transaction } from "../../types/Transaction";
import UpdateTransactionModal from "../../components/modals/UpdateTransaction/UpdateTransaction";
import { useTheme } from "styled-components/native";

const MyTransactionsScreen = ({ navigation }: any) => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  
  const dispatch = useDispatch();
  const theme = useTheme();

  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [filterType, setFilterType] = useState<"income" | "expense" | null>(
    null
  );
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [sortKey, setSortKey] = useState<"date" | "amount" | null>(null);

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);

  const slideAnimList = useRef(new Animated.Value(-300)).current; // For list
  const slideAnimHeader = useRef(new Animated.Value(300)).current; // For header

  // Trigger animations on component mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnimList, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnimHeader, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Handle filtering and sorting logic
  useEffect(() => {
    let filtered = [...transactions];

    // Apply Type Filter
    if (filterType) {
      filtered = filtered.filter((t) => t.type === filterType);
    }

    // Apply Date Filter
    if (filterDate) {
      filtered = filtered.filter(
        (t) => new Date(t.date).toDateString() === filterDate.toDateString()
      );
    }

    // Apply Sorting
    if (sortKey === "date") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortKey === "amount") {
      filtered.sort((a, b) => b.amount - a.amount);
    }

    setFilteredTransactions(filtered);
  }, [transactions, filterType, filterDate, sortKey]);

  const handleRemove = (id: string) => {
    dispatch(removeTransaction(id));
  };

const handleUpdate = (transaction: Transaction) => {
  setSelectedTransaction(transaction);
  setIsUpdateModalVisible(true);
};
  

  const handleClearFilter = () => {
    setFilterType(null);
    setFilterDate(null);
  };

  const handleClearSort = () => {
    setSortKey(null);
  };

  return (
    <Container>
      {/* Animated Header */}
      <Animated.View
        style={{
          transform: [{ translateX: slideAnimHeader }],
        }}
      >
        <Header>
          <IconButton onPress={() => setIsFilterModalVisible(true)}>
            <MaterialIcons name="filter-alt" size={24} color={theme.primary} />
          </IconButton>
          <IconButton onPress={() => setIsSortModalVisible(true)}>
            <MaterialIcons name="sort" size={24} color={theme.primary} />
          </IconButton>
        </Header>
      </Animated.View>

      {/* Transactions List with Slide-In Animation */}
      <Animated.FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id}
        style={{ transform: [{ translateX: slideAnimList }] }}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: theme.background, gap: 8 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionItem
            category={item.category}
            amount={item.amount}
            date={item.date}
            type={item.type}
            description={item.description}
            onEdit={() => handleUpdate(item)}
            onDelete={() => handleRemove(item.id)}
          />
        )}
      />

      {/* Filter Modal */}
      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        onFilter={(type) => setFilterType(type)}
        onDateChange={(date) => setFilterDate(date)}
        onClear={handleClearFilter}
      />

      {/* Sort Modal */}
      <SortModal
        isVisible={isSortModalVisible}
        onClose={() => setIsSortModalVisible(false)}
        onSort={(key) => setSortKey(key)}
        onClear={handleClearSort}
      />

      <UpdateTransactionModal
        isVisible={isUpdateModalVisible}
        transaction={selectedTransaction}
        onClose={() => setIsUpdateModalVisible(false)}
        onUpdate={(updatedTransaction) =>
          dispatch(updateTransaction(updatedTransaction))
        }
      />
    </Container>
  );
};

export default MyTransactionsScreen;
