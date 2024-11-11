import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Link} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, Entypo, MaterialIcons} from "@expo/vector-icons";
import ScrollView = Animated.ScrollView;

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
        {icon: <FontAwesome name="gear" size={24} color="white"/>, route: "/menu"},
        {icon: <FontAwesome5 name="search" size={24} color="white"/>, route: "/menu"},
        {icon: <Ionicons name="earth-sharp" size={24} color="white"/>, route: "/menu"},
        {icon: <MaterialCommunityIcons name="account-tie" size={24} color="white"/>, route: "/menu"},
        {icon: <Entypo name="home" size={24} color="white"/>, route: "/menu"},
        {icon: <MaterialIcons name="email" size={24} color="white"/>, route: "/menu"},
    ];

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.navbar}>
                    {navLinks.map((link, index) => (
                        <Link key={index} style={styles.navButton} href={link.route}>
                            <Text style={styles.navButtonText}>
                                {link.icon}
                            </Text>
                        </Link>
                    ))}
                    {yourTeam.pathImmagine ? (
                        <Image source={yourTeam.pathImmagine} style={styles.squadImage}/>
                    ) : null}
                </View>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.scrollContent}>
                        {Array.isArray(yourTeam.calciatori) && yourTeam.calciatori.length > 0 ? (
                            yourTeam.calciatori.map((calciatore, index) => (
                                <View key={index} style={styles.calciatoreContainer}>
                                    <View style={styles.calciatoreDetails}>
                                        <Text style={styles.calciatoreName}>{calciatore.nome}</Text>
                                        <Text style={styles.calciatoreAge}>Età: {calciatore.eta}</Text>
                                        <Text style={styles.calciatorePosition}>Posizione: {calciatore.posizione}</Text>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text>Nessun calciatore disponibile.</Text>
                        )}
                    </View>
                </ScrollView>



            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Keeps navbar fixed on the left and scrollable content on the right
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
    text: {
        fontSize: 42,
        padding: 12,
    },

    scrollView: {
        flex: 1,
        marginLeft: 60,
        backgroundColor: '#032143',
    },
    scrollContent: {
        padding: 12,
    },
    calciatoreContainer: {
        marginBottom: 10,
    },
    calciatoreDetails: {
        flexDirection: 'row', // Dispone gli elementi in orizzontale
        justifyContent: 'flex-start', // Allinea gli elementi all'inizio
        alignItems: 'center', // Centra verticalmente gli elementi
        padding: 10, // Aggiunge un po' di spazio interno
        borderWidth: 1, // Aggiunge il bordo
        borderColor: 'black', // Colore del bordo
        borderRadius: 5, // Rende gli angoli arrotondati
        backgroundColor: 'white', // Imposta lo sfondo bianco per il bordo
    },
    calciatoreName: {
        fontWeight: 'bold',
        marginRight: 5, // Spazio tra il nome e gli altri dettagli
    },
    calciatoreAge: {
        marginRight: 5, // Spazio tra età e posizione
    },
    calciatorePosition: {
        flexShrink: 1, // Impedisce che il testo vada fuori dal layout
    },
});

export default Navbar;
