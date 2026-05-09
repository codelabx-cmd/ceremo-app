// components/BottomNav.tsx
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  return (
    <View style={{
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#fff",
      borderRadius: 20,
      paddingVertical: 12,
      elevation: 5
    }}>
      <Ionicons name="home" size={24} color="#FF4D6D" />
      <Ionicons name="calendar" size={24} color="#aaa" />

      {/* Floating center button */}
      <TouchableOpacity style={{
        backgroundColor: "#FF4D6D",
        padding: 14,
        borderRadius: 30,
        marginTop: -30
      }}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>

      <Ionicons name="heart" size={24} color="#aaa" />
      <Ionicons name="person" size={24} color="#aaa" />
    </View>
  );
}