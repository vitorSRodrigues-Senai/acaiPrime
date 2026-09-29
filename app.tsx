import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AcaiCard from "./components/AcaiCard";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido.`);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <Header />

      <View style={styles.content}>
        <View style={styles.grettingSection}>
          <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
          <Text style={styles.grettingSubTitle}>
            Escolha seu açaí favorito de hoje
          </Text>
        </View>

        <View style={styles.featured}>
          <Image
            style={styles.featuredImage}
            source={require("./assets/AcaiHero.jpg")}
          />

          <View style={styles.featuredHeader}>
            <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
            <Text style={styles.hotOrder}>MAIS PEDIDO</Text>
          </View>

          <Text style={styles.featuredDescription}>
            Açaí puro batido com morango, banana, leite condensado e granola
            crocante
          </Text>

          <View style={styles.featuredFooter}>
            <Text style={styles.featuredPrice}>R$ 22,90</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => { }}>
              <Feather name="shopping-bag" size={15} color="#ffffff" />
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>

        <View style={styles.cardContainer}>
          <AcaiCard
            name="Açaí Tradicional"
            description="Açaí cremoso com banana e granola tradicional"
            price="R$ 14,00"
            image={require("./assets/AcaiBanana.jpg")}
          />
          <AcaiCard
            name="Copo Tropical"
            description="Camadas de açaí, morango, kiwi e leite em pó"
            price="R$ 18,50"
            image={require("./assets/AcaiCopoFrutas.jpg")}
          />
          <AcaiCard
            name="Vitamina de Açaí"
            description="Bebida energética batida com guaraná e aveia"
            price="R$ 12,00"
            image={require("./assets/ShakeAcai.jpg")}
          />
          <AcaiCard
            name="Açaí Fit Zero"
            description="Zero adição de açúcar, com chia e castanhas"
            price="R$ 16,90"
            image={require("./assets/AcaiFit.jpg")}
          />
        </View>

        <View style={styles.orderBox}>
          <Text style={styles.orderTitle}>Qual é o seu nome?</Text>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>
            <TextInput
              style={styles.input}
              placeholder='Digite seu nome'
              value={name}
              onChangeText={setName}
            ></TextInput>

            <CustomButton title='fazer meu pedido' onPress={handleOrder} />

            {message !== '' && (
              <Text style={styles.messageText}>{message}</Text>
            )}
          </View>

          <Text style={styles.footer}>
            Açaí Prime • O sabor autêntico da Amazônia
          </Text>
        </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf7fb",
  },
  scrollContent: {
    paddingBottom: 24,
  },
  content: {
    paddingHorizontal: 12,
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24,
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  grettingSubTitle: {
    fontSize: 16,
    marginTop: 8,
    color: "#9b9b9b",
  },
  featured: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 24,

  },
  featuredImage: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 14,
  },
  featuredHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 14,
  },
  featuredTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: "800",
    color: "#302238",
  },
  hotOrder: {
    color: "#8724b5",
    backgroundColor: "#f4dcff",
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontSize: 10,
    fontWeight: "800",
  },
  featuredDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: "#725f78",
    marginTop: 5,
  },
  featuredFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  featuredPrice: {
    fontSize: 21,
    fontWeight: "800",
    color: "#8724b5",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#8724b5",
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#302238",
    marginBottom: 12,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
    marginBottom: 18,
  },
  orderBox: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  orderTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#302238",
    marginBottom: 12,
  },
  inputContainer: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#f1edf4",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    color: "#302238",
    fontSize: 14,
  },
  OrderSuccess: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#f3fff1",
    padding: 10,
    marginTop: 12,
    borderRadius: 24
  },
  OrderSuccessText: {
    flex: 1,
    fontSize: 12,
    color: "#26943c",
    borderRadius: 12
  },
  footer: {
    textAlign: "center",
    color: "#978d99",
    fontSize: 10,
    marginTop: 28,
  },
  orderSection: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0c5e2b',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#7be4a3',
    borderRadius: 8,
    padding: 4
  }
});
