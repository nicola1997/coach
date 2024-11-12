import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import React from "react";
import Navbar from "@/app/(stack)/Navbar";

const HomeView = () => {
    return (

        <View style={styles.container}>
            <ThemedText>
                Caro allenatore,
                HOMEVIEW
            </ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161717',
        paddingTop: 50, // Aggiungi un padding in alto per lasciare spazio alla Navbar
    },
});

export default HomeView;
