import {View, Text, StyleSheet, Platform, Image} from "react-native";

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
})
{
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>{hp}</Text>
            </View  >
            <Image source={image} accessibilityLabel={`${name} pokemon`} />
            <View>
                <Text>{type}</Text>
            </View>
            <View>
                <Text>Moves: {moves.join(", ")}</Text>
            </View>
            <View>
                <Text>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
})