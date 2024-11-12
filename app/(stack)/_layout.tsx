import { Stack, useRouter, useSegments } from 'expo-router';
import React from 'react';
import Navbar from "@/app/(stack)/Navbar";
import { View, StyleSheet } from 'react-native';

export default function StackLayout() {
    const segments = useSegments(); // Ottiene l'intero percorso della schermata attuale
    const currentScreen = segments[segments.length - 1]; // Prende solo l'ultimo segmento del percorso

    // Array di schermate che dovrebbero avere la Navbar
    const screensWithNavbar = ["menu", "msg", "manager","search", "options", "world", "HomeView","home"];

    // Funzione per verificare se la navbar dovrebbe essere visibile
    const shouldShowNavbar = screensWithNavbar.includes(currentScreen);

    return (
        <View style={styles.container}>
            {/* Mostra Navbar solo se shouldShowNavbar è true */}
            {shouldShowNavbar && <Navbar />}

            {/* Stack Navigator */}
            <Stack
                screenOptions={{
                    headerShown: false, // Nasconde l'header di navigazione di default
                    animation: 'none', // Disabilita l'animazione di transizione di default
                }}
            >
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="home" options={{ title: 'Home' }} />
                <Stack.Screen name="explore" options={{ title: 'Explore' }} />
                <Stack.Screen name="menu" options={{ title: 'Menu' }} />
                <Stack.Screen name="msg" options={{ title: 'Messages' }} />
                <Stack.Screen name="manager" options={{ title: 'Manager' }} />
                <Stack.Screen name="search" options={{ title: 'Search' }} />
                <Stack.Screen name="options" options={{ title: 'Options' }} />
                <Stack.Screen name="world" options={{ title: 'World' }} />
                <Stack.Screen name="HomeView" options={{ title: 'HomeView' }} />
            </Stack>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 60,
        backgroundColor: '#073e75',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 0,
        paddingTop: 10,
    },
    navButton: {
        alignItems: 'center',
    },
});
