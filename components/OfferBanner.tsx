import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function OfferBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wedding Combo Package</Text>
      <Text style={styles.price}>Starting at ₹1,20,000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  title: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  price: { color: "#fff", marginTop: 5 },
});