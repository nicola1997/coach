import { StyleSheet, View, Text, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Link} from "expo-router";

export default function HomeScreen() {
    return (
        <SafeAreaProvider>
            <ImageBackground
                source={require("../../assets/images/calma.jpg")}
                style={styles.image}
                resizeMode="contain"
            >
                <SafeAreaView style={styles.container}>
                    <View>
                        <Text style={styles.title}>COACH</Text>
                        <Link href="/explore" style={styles.newGameButton}>
                            <Text>Nuova Partita</Text>
                        </Link>
                    </View>
                    <View>
                        <Link style={styles.newGameButton} onPress={() => { return 2 }} href={"/explore"}>
                            <Text>Continua Partita</Text>
                        </Link>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
        textAlign: 'left',
        marginVertical: 8,
        color: '#fff',
        fontSize: 24,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    newGameButton: {
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
});
