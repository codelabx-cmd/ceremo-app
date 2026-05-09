import { Image, Text, View } from "react-native";

export default function VenueCard({
  title,
  location,
  price,
  rating,
  image
}: any) {
  return (
    <View style={{
      width: 220,
      marginRight: 16,
      borderRadius: 16,
      backgroundColor: "#fff",
      overflow: "hidden",
      elevation: 2
    }}>
      <Image
        source={{
          uri: image || "https://picsum.photos/300"
        }}
        style={{
          width: "100%",
          height: 120
        }}
      />

      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "600" }}>{title}</Text>

        <Text style={{ color: "gray", fontSize: 12 }}>
          {location}
        </Text>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 6
        }}>
          <Text style={{ color: "#FF4D6D", fontWeight: "600" }}>
            {price}
          </Text>

          <Text>⭐ {rating || "4.5"}</Text>
        </View>
      </View>
    </View>
  );
}