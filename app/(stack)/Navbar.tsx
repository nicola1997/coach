import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navbar = () => {
    let [yourTeam, setYourTeam] = useState({});

    const navLinks = [
        {icon: <FontAwesome name="gear" size={24} color="white" />, route: "/menu"},
        {icon: <FontAwesome5 name="search" size={24} color="white" />, route: "/menu"},
        {icon: <Ionicons name="earth-sharp" size={24} color="white" />, route: "/menu"},
        {icon: <MaterialCommunityIcons name="account-tie" size={24} color="white" />, route: "/menu"},
        {icon: <Entypo name="home" size={24} color="white" />, route: "/menu"},
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
        <SafeAreaProvider>
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
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
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