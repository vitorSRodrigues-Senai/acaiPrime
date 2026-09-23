import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {

  return (
    <ScrollView>
    {/* header */}
      <Header />
    {/* header */}
     
    {/* content */}
      <View style={styles.content}>
        <View style={styles.grettingSection}>
          <Text>
            
          </Text>

        </View>

      </View>
    {/* content */}

    </ScrollView>
  )

}

  const styles = StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
 