import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const squad = ({item}) => {


    return (
        <View style={styles.squadContainer}>
            <Image style={styles.squadImage} source={item.pathImmagine} />
            <Text style={styles.squadName}>{item.nome}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    squadContainer: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
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

export default squad;
