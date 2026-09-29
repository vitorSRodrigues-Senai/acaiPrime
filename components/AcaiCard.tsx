import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type AcaiCardProps = {
  name: string;
  description: string;
  price: string;
  image: ImageSourcePropType;
};

export default function AcaiCard({
  name,
  description,
  price,
  image,
}: AcaiCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
        <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 105,
    borderRadius: 12,
    resizeMode: "cover",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#302238",
    marginTop: 10,
  },
  description: {
    minHeight: 34,
    fontSize: 11,
    lineHeight: 16,
    color: "#817185",
    marginTop: 3,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "800",
    color: "#8724b5",
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8724b5",
  },
  
});
