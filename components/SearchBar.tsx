import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} />
      <TextInput placeholder="Search halls, catering..." style={styles.input} />
      <Ionicons name="options" size={18} color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.surface,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    gap: 10,
  },
  input: { flex: 1 },
});