import {StyleSheet, Text, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import React from "react";
import Navbar from "@/app/(stack)/Navbar";

const world = () => {
    return (
        <ThemedView style={styles.container}>
            <Navbar/>

            <ThemedText>
                WORLD
            </ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161717', // colore di sfondo per il contenitore
    },
    navbar: {
        flexDirection: 'row', // Allinea gli elementi orizzontalmente
        justifyContent: 'space-between', // Spaziatura tra gli elementi
        alignItems: 'center', // Allinea gli elementi verticalmente al centro
        backgroundColor: '#073e75',
        paddingHorizontal: 10, // Aggiungi un po' di spazio ai lati
        paddingVertical: 10, // Padding superiore e inferiore
        width: '100%', // Imposta la larghezza della navbar su tutta la larghezza dello schermo
        top: 0,
        left: 0,
    },
    navbarText: {
        color: 'white', // Colore del testo della navbar
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default world;
