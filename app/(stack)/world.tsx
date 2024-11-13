import {FlatList, ImageBackground, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {ThemedView} from "@/components/ThemedView";
import Squad from "./squad";  // Assicurati che il percorso sia corretto

const World = () => {
    const [leagues, setLeagues] = useState([]);

    const loadData = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Errore nel caricamento dei dati:', e);
            return [];
        }
    };

    useEffect(() => {
        const fetchLeaguesData = async () => {
            const leghe = await loadData('leghe');
            setLeagues(leghe || []);
            console.log(leghe.nome)

        };
        fetchLeaguesData();
    }, []);

    const renderTeam = ({item}) => <Squad item={item} />;

    return (
        <ThemedView style={styles.container}>

                <FlatList
                    data={leagues}  // Passa i dati caricati da AsyncStorage
                    renderItem={renderTeam}  // Rende ogni elemento usando il componente Squad
                    keyExtractor={(item, index) => index.toString()} // Imposta una chiave unica per ogni elemento
                />
         </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161717',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default World;
