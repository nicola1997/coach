import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "@expo/vector-icons/Ionicons";
import {Link} from "expo-router";
import {Entypo, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {legacyBlobToArrayBufferAsync} from "expo/build/devtools/blobUtils";
const Navbar = () => {
    const [yourTeam, setYourTeam] = useState('');

    const loadData = async (key) => {
        try {
            const storedValue = await AsyncStorage.getItem(key);
            if (storedValue !== null) {
                setYourTeam(storedValue);
            }
        } catch (e) {
            alert('Error loading data');
        }
    };

    useEffect(() => {
        loadData("yourTeam")
    }, []);
    return (
        <SafeAreaProvider >

        <View style={styles.navbar}>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}>{yourTeam}</Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><AntDesign name="message1" size={24} color="white" /></Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><Entypo name="home" size={24} color="white" /></Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><Entypo name="man" size={24} color="white" /></Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><Ionicons name="earth-sharp" size={24} color="white" /></Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><FontAwesome5 name="search" size={24} color="white" /></Text>
            </Link>
            <Link style={styles.navButton} href={"/menu"}>
                <Text style={styles.navButtonText}><FontAwesome name="gear" size={24} color="white" /></Text>
            </Link>
        </View>
        </SafeAreaProvider>

    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#361d47', // Colore di sfondo della navbar
        height: 70, // Altezza della navbar
        paddingTop: 20, // Spazio per il notch se necessario (su iPhone X)
        position: 'absolute', // Posizione fissa
        top: -10, // Al top della schermata
        left: 0,
        right: 0,
        zIndex: 1, // Assicura che la navbar stia sopra altri contenuti
    },
    navButton: {
        padding: 10,
    },
    navButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Navbar;
