import { View, Text, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { Link } from "expo-router";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navbar = () => {
    let [yourTeam, setYourTeam] = useState({});

    const navLinks = [
        {icon: <FontAwesome name="gear" size={24} color="white" />, route: "/options"},
        {icon: <FontAwesome5 name="search" size={24} color="white" />, route: "/search"},
        {icon: <Ionicons name="earth-sharp" size={24} color="white" />, route: "/world"},
        {icon: <MaterialCommunityIcons name="account-tie" size={24} color="white" />, route: "/manager"},
        {icon: <Entypo name="home" size={24} color="white" />, route: "/home"},
        {icon: <MaterialIcons name="email" size={24} color="white" />, route: "/msg"},
    ];

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
        const fetchData = async () => {
            const data = await loadData('yourTeam');
            setYourTeam(data || {});
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                {navLinks.map((link, index) => (
                    <Link key={index} style={styles.navButton} href={link.route}>
                        {link.icon}
                    </Link>
                ))}
                {yourTeam.pathImmagine ? (
                    <Image source={yourTeam.pathImmagine} style={styles.squadImage} />
                ) : (
                    <Text style={styles.squadText}>TEAM</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        position: 'absolute', // Usa fixed per evitare il problema dell'absolute
        top: 0,
        left: 0,
        width: 60,
        backgroundColor: '#073e75',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',  // La navbar occupa tutta l'altezza
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, // Rispetta l'area sicura
        paddingBottom: 10, // Aggiungi un po' di padding inferiore per migliorare il layout
    },
    navButton: {
        alignItems: 'center',
    },
    squadImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
        borderRadius: 20,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    squadText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Navbar;
