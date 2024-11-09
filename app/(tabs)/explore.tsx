import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Pressable, Alert, Modal } from 'react-native';
import { serieA, laLiga, ligue1, bundesliga, premierLeague, ligaPortugal } from '@/assets/teams';
import { SafeAreaProvider } from "react-native-safe-area-context";

const renderSquad = ({ item, setModalVisible }) => (
    <View style={styles.squadContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
            <Image source={item.pathImmagine} style={styles.squadImage} />
            <Text style={styles.squadName}>{item.nome}</Text>
        </Pressable>
    </View>
);

const LeagueGrid = ({ title, teams, setModalVisible }) => (
    <View style={styles.leagueContainer}>
        <Text style={styles.leagueTitle}>{title}</Text>
        <FlatList
            data={teams}
            renderItem={(props) => renderSquad({ ...props, setModalVisible })}
            keyExtractor={(item) => item.nome}
            numColumns={10} // You can adjust the number of columns
            columnWrapperStyle={styles.columnWrapper}
        />
    </View>
);

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    // Data for all leagues to be rendered in FlatList
    const leaguesData = [
        { title: "Serie A", teams: serieA },
        { title: "La Liga", teams: laLiga },
        { title: "Ligue 1", teams: ligue1 },
        { title: "Bundesliga", teams: bundesliga },
        { title: "Premier League", teams: premierLeague },
        { title: "Liga Portugal", teams: ligaPortugal },
    ];

    return (
        <SafeAreaProvider style={styles.container}>
            <FlatList
                data={leaguesData}
                renderItem={({ item }) => (
                    <LeagueGrid title={item.title} teams={item.teams} setModalVisible={setModalVisible} />
                )}
                keyExtractor={(item) => item.title}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Confermi?</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#217ad3',
    },
    leagueContainer: {
        marginBottom: 20,
    },
    leagueTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    squadContainer: {
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
    },
    squadImage: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    squadName: {
        textAlign: 'center',
        fontSize: 12,
    },
    columnWrapper: {
        justifyContent: 'space-between',
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
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
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
