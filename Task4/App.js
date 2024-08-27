import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Platform} from 'react-native';
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
  return (
    <View style={styles.container}>
      <PokemonCard {...blastoiseData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
 