import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform, ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const blastoiseData = {
    name: "Blastoise",
    image: require("./assets/blastoise.png"),
    type: "Water",
    hp: 50,
    moves: ["Water cannon"],
    weaknesses: ["Fire"],
};
const charizardData = {
  name: "Charizard",
  image: require("./assets/charizard.png"),
  type: "Fire",
  hp: 50,
  moves: ["Fire"],
  weaknesses: ["Water"],
};

const EnteiData = {
  name: "Entei",
  image: require("./assets/Entei.png"),
  type: "Fire",
  hp: 50,
  moves: ["Fire"],
  weaknesses: ["Water"],
};

const gengarData = {
  name: "Gengar",
  image: require("./assets/gengar.png"),
  type: "Poison",
  hp: 50,
  moves: ["Poison"],
  weaknesses: ["Water"],
};
const LugiaData = {
  name: "Lugia",
  image: require("./assets/Lugia.png"),
  type: "Pyschic",
  hp: 50,
  moves: ["Flying"],
  weaknesses: ["Water"],
};
const MewtwoData = {
  name: "Mewtwo",
  image: require("./assets/Mewtwo.png"),
  type: "Pyschic",
  hp: 50,
  moves: ["Flying"],
  weaknesses: ["N/A"],
};
const nidorinaData = {
  name: "Nidorina",
  image: require("./assets/nidorina.png"),
  type: "Poison",
  hp: 50,
  moves: ["Rivalry"],
  weaknesses: ["N/A"],
};
const RaikouData = {
  name: "Raikou",
  image: require("./assets/Raikou.png"),
  type: "Electric",
  hp: 50,
  moves: ["Electric"],
  weaknesses: ["Earth"],
};
const sudowoodoData = {
  name: "Sudowoodo",
  image: require("./assets/sudowoodo.png"),
  type: "Rock",
  hp: 50,
  moves: ["Earth"],
  weaknesses: ["Water"],
};
const SuicuneData = {
  name: "Suicune",
  image: require("./assets/Suicune.png"),
  type: "Water",
  hp: 50,
  moves: ["Water"],
  weaknesses: ["Fire"],
};

  return (
    <View style={styles.container}>
      <ScrollView>
        <PokemonCard {...blastoiseData} />
        <PokemonCard {...charizardData} />
        <PokemonCard {...EnteiData} />
        <PokemonCard {...gengarData} />
        <PokemonCard {...LugiaData} />
        <PokemonCard {...MewtwoData} />
        <PokemonCard {...nidorinaData} />
        <PokemonCard {...RaikouData} />
        <PokemonCard {...sudowoodoData} />
        <PokemonCard {...SuicuneData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
 