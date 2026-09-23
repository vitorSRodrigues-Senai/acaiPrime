import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Acaí Prime</Text>
                <Text style={styles.headerSubtitle}>O sabor puro da Amazônia</Text>
            </View>

            <Image source={require('../assets/mulher.jpg')} style={styles.avatarPlaceholder} />

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#9b9b9b"
  },

  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 24,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#7B1FA2',
    borderWidth: 2
  },
})
