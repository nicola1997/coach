import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, Entypo, MaterialIcons } from "@expo/vector-icons";

const Navbar = () => {
    const [leagues, setLeagues] = useState({});
    const [yourTeam, setYourTeam] = useState({});

    const loadData = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading data:', e);
            return null;
        }
    };

    useEffect(() => {
        const fetchLeaguesData = async () => {
            const leghe = await loadData('leghe');
            const yourTeamFetch = await loadData('yourTeam');
            setLeagues(leghe);
            setYourTeam(yourTeamFetch || {});
        };
        fetchLeaguesData();
    }, []);

    const navLinks = [
        { icon: <FontAwesome name="gear" size={24} color="white" />, route: "/menu" },
        { icon: <FontAwesome5 name="search" size={24} color="white" />, route: "/menu" },
        { icon: <Ionicons name="earth-sharp" size={24} color="white" />, route: "/menu" },
        { icon: <MaterialCommunityIcons name="account-tie" size={24} color="white" />, route: "/menu" },
        { icon: <Entypo name="home" size={24} color="white" />, route: "/menu" },
        { icon: <MaterialIcons name="email" size={24} color="white" />, route: "/menu" },
    ];

    return (
        <SafeAreaProvider>
            <View style={styles.navbar}>
                {navLinks.map((link, index) => (
                    <Link key={index} style={styles.navButton} href={link.route}>
                        <Text style={styles.navButtonText}>
                            {link.icon}
                        </Text>
                    </Link>
                ))}
                {yourTeam.pathImmagine ? (
                    <Image source={yourTeam.pathImmagine} style={styles.squadImage} />
                ) : null}
            </View>

            <View>
                {Array.isArray(yourTeam.calciatori) && yourTeam.calciatori.length > 0 ? (
                    yourTeam.calciatori.map((calciatore, index) => (
                        <View key={index} style={{ marginBottom: 10 }}>
                            <Text style={{ fontWeight: 'bold' }}>{calciatore.nome}</Text>
                            <Text>Età: {calciatore.eta}</Text>
                            <Text>Posizione: {calciatore.posizione}</Text>
                        </View>
                    ))
                ) : (
                    <Text>Nessun calciatore disponibile.</Text>
                )}
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
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
        paddingTop: 10, // Adjust top padding to ensure enough space
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: 'white',
        fontSize: 18,
    },
    squadImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
        borderRadius: 20,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
});

export default Navbar;
