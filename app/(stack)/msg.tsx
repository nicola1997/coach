import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import React from "react";
import calcioFrasi from './calcioFrasi';

const Msg = () => {
    return (
        <ThemedView style={styles.container}>
            <ImageBackground  source={require("../../assets/images/ufficio.jpg")}
            >

            <FlatList
                data={calcioFrasi}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.msgBox}>
                        <Text style={styles.msgText}>{item.text}</Text>
                    </View>
                )}
            />
            </ImageBackground>

        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(22,23,23,0.69)', // Colore di sfondo scuro per un look moderno
        paddingHorizontal: 16, // Aggiunta di padding orizzontale per un migliore margine sui lati
    },
    msgBox: {
        backgroundColor: 'rgba(14,29,78,0.17)', // Sfondo semitrasparente per il box dei messaggi
        marginVertical: 8, // Margine verticale tra i messaggi
        padding: 12, // Aggiunta di padding per dare respiro al testo
        borderRadius: 8, // Raggio di curvatura aumentato per un aspetto più morbido
        borderWidth: 1, // Border per dare risalto ai box
        borderColor: "rgba(255,255,255,0.3)", // Colore del bordo bianco trasparente per un effetto elegante
    },
    msgText: {
        fontSize: 16,
        color: "white", // Testo bianco per contrasto sullo sfondo scuro
        fontStyle: "italic", // Italico per dare un effetto più "citato" al messaggio
        lineHeight: 22, // Aggiunta di line-height per una migliore leggibilità
    },
});

export default Msg;
