import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerTitle}>Acaí Prime</Text>
            <Text style={styles.header.SubTitle}>O sabor puro da Amazônia</Text>

            </View>
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {

    }
})