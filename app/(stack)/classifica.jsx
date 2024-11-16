import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Classifica = ({ liga }) => {
    const classificaData = liga.squadre || [];  // Array di oggetti con i dati della classifica

    return (
        <View style={styles.squadContainer}>
            <Image style={styles.squadImage} source={liga.pathImmagine} />
            <Text style={styles.squadName}>{liga.nome}</Text>

            <ScrollView contentContainerStyle={styles.tableContainer}>
                {/* Intestazioni della tabella */}
                <View style={styles.row}>
                    <Text style={styles.headerText}>POS</Text>
                    <Text style={styles.headerText}>SQUADRA</Text>
                    <Text style={styles.headerText}>V</Text>
                    <Text style={styles.headerText}>P</Text>
                    <Text style={styles.headerText}>S</Text>
                    <Text style={styles.headerText}>GF</Text>
                    <Text style={styles.headerText}>GS</Text>
                    <Text style={styles.headerText}>PTI</Text>
                </View>
                {/* Righe della tabella */}
                {classificaData.map((item, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={styles.text}>{index + 1}</Text>
                        <Text style={styles.text}>{item.nome}</Text>
                        <Text style={styles.text}>{item.w}</Text>
                        <Text style={styles.text}>{item.d}</Text>
                        <Text style={styles.text}>{item.l}</Text>
                        <Text style={styles.text}>{item.gf}</Text>
                        <Text style={styles.text}>{item.gs}</Text>
                        <Text style={styles.text}>{item.pti}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    squadContainer: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        padding: 10,
    },
    squadImage: {
        width: 50,
        height: 50,
        marginBottom: 4,
    },
    squadName: {
        textAlign: 'center',
        fontSize: 16, // Ho aumentato il fontSize per renderlo visibile
        color: 'white',
        fontStyle: "italic",
    },
    tableContainer: {
        width: '100%',
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)', // Linea di separazione
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.3)', // Linea di separazione tra righe
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        width: '12%',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        width: '12%',
        textAlign: 'center',
    },
});

export default Classifica;
