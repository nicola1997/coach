import { FlatList, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";
import Ligas from "./Ligas";
import Classifica from "@/app/(stack)/classifica";

const World = () => {
    const [leagues, setLeagues] = useState([]);
    const [nomeLigaPressed, setNomeLigaPressed] = useState('');

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
        };
        fetchLeaguesData();
    }, [nomeLigaPressed]);

    const sendNomeLiga = (liga) => {
        setNomeLigaPressed(liga);
    }

    const renderTeam = ({item}) => <Ligas item={item} sendNomeLiga={() => sendNomeLiga(item.nome)} />;

    // Trova la lega in base al nome premuto
    const selectedLiga = leagues.find(league => league.nome === nomeLigaPressed);

    return (
        <ThemedView style={styles.container}>
            {nomeLigaPressed && selectedLiga ? (
                <Classifica liga={selectedLiga} />
            ) : (
                <FlatList
                    data={leagues}
                    renderItem={renderTeam}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                />
            )}
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.76)',
    },
});

export default World;
