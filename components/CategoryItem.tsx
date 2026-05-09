import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function CategoryItem({ title, icon }: any) {
  return (
    <View style={{
      alignItems: "center",
      marginRight: 16
    }}>
      <View style={{
        backgroundColor: "#FFF0F2",
        padding: 14,
        borderRadius: 16
      }}>
        <Ionicons name={icon} size={22} color="#FF4D6D" />
      </View>

      <Text style={{ marginTop: 6 }}>{title}</Text>
    </View>
  );
}