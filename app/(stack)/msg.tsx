import {StyleSheet, Text, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Navbar from "@/app/(stack)/Navbar";
import React from "react";

const msg = () => {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navbarText}>E-Mail</Text>
                {/* Puoi aggiungere altre icone o elementi nella navbar */}
            </View>
            <Navbar/>
            <ThemedText>
                Caro allenatore,

                Siamo molto felici di darti il benvenuto nella nostra squadra! Siamo entusiasti di lavorare sotto la tua
                guida e di imparare ogni giorno da te.
                Con la tua esperienza e il tuo impegno, siamo certi che insieme raggiungeremo grandi traguardi.

                Siamo pronti a seguirti, a dare il massimo ad ogni allenamento e a migliorare come squadra, perché
                sappiamo
                che sotto la tua leadership saremo in grado di crescere e affrontare ogni sfida con determinazione.

                Grazie per la tua fiducia in noi, e per aver scelto di far parte della nostra squadra. Siamo pronti per
                iniziare questo nuovo capitolo insieme!

                Con entusiasmo,
                La tua squadra {}
            </ThemedText>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#032143', // colore di sfondo per il contenitore
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

export default msg;
