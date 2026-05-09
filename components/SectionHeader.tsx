// components/SectionHeader.tsx
import { Text, TouchableOpacity, View } from "react-native";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        {title}
      </Text>

      <TouchableOpacity>
        <Text style={{ color: "#FF4D6D", fontWeight: "500" }}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
}