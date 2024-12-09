import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Pressable, Modal } from 'react-native';
import { leghe } from "./teams";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Componente per il rendering di una squadra
const Squad = ({ item, setModalVisible, setYourTeam }) => (
    <View style={styles.squadContainer}>
        <Pressable onPress={() => { setModalVisible(true); setYourTeam(item); }}>
            <Image source={item.pathImmagine} style={styles.squadImage} />
            <Text style={styles.squadName}>{item.nome}</Text>
        </Pressable>
    </View>
);

// Componente per il rendering delle leghe
const LeagueGrid = ({ title, teams, setModalVisible, setYourTeam }) => (
    <View style={styles.leagueContainer}>
        <Text style={styles.leagueTitle}>{title}</Text>
        <FlatList
            data={teams}
            renderItem={({ item }) => <Squad item={item} setModalVisible={setModalVisible} setYourTeam={setYourTeam} />}
            keyExtractor={(item) => item.nome}
            numColumns={10}  // Modificato il numero di colonne
            columnWrapperStyle={styles.columnWrapper}
        />
    </View>
);

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [yourTeam, setYourTeam] = useState({});

    // Funzione per salvare i dati su AsyncStorage
    const saveData = async (key, data) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving data', e);
        }
    };

    const leagueTitles = [
        "Serie A",
        "La Liga",
        "Ligue 1",
        "Bundesliga",
        "Premier League",
        "Liga Portugal",
        "Saudi League"
    ];

    const leaguesData = leagueTitles.map((title, index) => ({
        title,
        teams: leghe[index]?.squadre || [], // Usa ? per evitare errori se leghe non contiene abbastanza elementi
    }));


    // Carica i dati delle leghe all'avvio
    useEffect(() => {
        saveData("leghe", leghe);
    }, []);

    return (
        <SafeAreaProvider style={styles.container}>
            <FlatList
                data={leaguesData}
                renderItem={({ item }) => (
                    <LeagueGrid title={item.title} teams={item.teams} setModalVisible={setModalVisible} setYourTeam={setYourTeam} />
                )}
                keyExtractor={(item) => item.title}
            />

            {/* Modal di conferma */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Confermi {yourTeam?.nome}?</Text>
                        <Link
                            style={[styles.button, styles.buttonConferm]}
                            onPress={() => { setModalVisible(false); saveData("yourTeam", yourTeam); }}
                            href="/msg"
                        >
                            <Text style={styles.textStyle}>CONFERMA</Text>
                        </Link>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>NO</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaProvider>
    );
};

// Stili
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#161717',
    },
    leagueContainer: {
        marginBottom: 20,
    },
    leagueTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',  // Aggiunto colore per la leggibilità
        fontStyle: "italic", // Italico per dare un effetto più "citato" al messaggio

    },
    squadContainer: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
    },
    squadImage: {
        width: 50,
        height: 50,
        marginBottom: 4,
    },
    squadName: {
        textAlign: 'center',
        fontSize: 9,
        color: 'white',  // Aggiunto colore per la leggibilità
        fontStyle: "italic", // Italico per dare un effetto più "citato" al messaggio

    },
    columnWrapper: {
        justifyContent: 'space-between', // Spaziatura tra le colonne
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonConferm: {
        backgroundColor: '#136329',
    },
    buttonClose: {
        backgroundColor: '#e60439',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default App;
