import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
// import { COLORS } from "../constants/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ceremo</Text>
        <Text style={styles.subtitle}>Plan your perfect event</Text>
      </View>

      <View style={styles.right}>
        <Ionicons name="location-outline" size={18} />
        <Text>Bangalore</Text>
        <Ionicons name="notifications-outline" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", color: COLORS.textPrimary },
  subtitle: { color: COLORS.textSecondary },
  right: { flexDirection: "row", gap: 10, alignItems: "center" },
});