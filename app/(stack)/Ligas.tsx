import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const ligas = ({item, sendNomeLiga}) => {


    return (
        <Pressable onPress={() => sendNomeLiga(item.nome)}>
            <View style={styles.squadContainer}>
                <Image style={styles.squadImage} source={item.pathImmagine}/>
                <Text style={styles.squadName}>{item.nome}</Text>
            </View>
        </Pressable>

    );
};

const styles = StyleSheet.create({
    squadContainer: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        borderRadius: 8, // Raggio di curvatura aumentato per un aspetto più morbido
        borderWidth: 1, // Border per dare risalto ai box
        borderColor: "rgba(255,255,255,0.3)", // Colore del bordo bianco trasparente per un effetto elegante
    },
    squadImage: {
        width: 50,
        height: 50,
        marginBottom: 4,
    },
    squadName: {
        textAlign: 'center',
        fontSize: 9,
        color: 'white',  // Aggiunto colore per la leggibilità
        fontStyle: "italic", // Italico per dare un effetto più "citato" al messaggio

    },
});

export default ligas;
