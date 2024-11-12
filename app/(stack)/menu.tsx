import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "./Navbar"
const playersFlatList = () => {
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

    const renderCalciatore = ({item}) => (
        <View style={styles.calciatoreRow}>
            <Text style={styles.calciatoreCell}>{item.nome}</Text>
            <Text style={styles.calciatoreCell}>{item.eta}</Text>
            <Text style={styles.calciatoreCell}>{item.posizione}</Text>
            <Text style={styles.calciatoreCell}>{item.livelloAbilita}</Text>
        </View>
    );

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Navbar/>

                    <View style={styles.scrollView}>
                    {yourTeam.calciatori && yourTeam.calciatori.length > 0 ? (
                        <FlatList
                            data={yourTeam.calciatori}
                            renderItem={renderCalciatore}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.tableContainer}
                        />
                    ) : (
                        <Text style={styles.noPlayersText}>Nessun calciatore disponibile.</Text>
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
    scrollView: {
        flex: 1,
        marginLeft: 60,
        backgroundColor: '#032143',
    },
    tableContainer: {
        padding: 12,
    },
    calciatoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        backgroundColor: 'white',
    },
    calciatoreCell: {
        flex: 1,
        textAlign: 'center',
    },
    noPlayersText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default playersFlatList;
