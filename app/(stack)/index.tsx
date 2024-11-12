import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <StatusBar backgroundColor="#61dafb" hidden={true} />

            <View style={styles.container}>
                {/* Colonna di sinistra per il testo e il link */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>COACH</Text>
                    <Link href="/explore">
                        <Text style={styles.linkText}>Nuova Partita</Text>
                    </Link>
                </View>

                {/* Colonna di destra per l'immagine */}
                <ImageBackground
                    source={require("../../assets/images/ancelotti.jpg")}
                    style={styles.imageBackground}
                    resizeMode="cover"
                />
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',  // Allinea i contenuti orizzontalmente
    },
    textContainer: {
        flex: 0, // La colonna di sinistra occupa metà dello schermo
        justifyContent: 'center', // Centra i contenuti verticalmente
        alignItems: 'center', // Centra i contenuti orizzontalmente
        backgroundColor: '#161717', // Puoi cambiare il colore di sfondo se vuoi
        padding: 20, // Aggiungi un po' di spazio ai bordi
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    linkText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
    },
    imageBackground: {
        flex: 1, // La colonna di destra occupa metà dello schermo
    },
});
