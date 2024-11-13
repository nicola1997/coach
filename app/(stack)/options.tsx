import {ImageBackground, StyleSheet} from 'react-native';
import React from "react";
import {ThemedView} from "@/components/ThemedView";

const options = () => {
    return (
        <ThemedView style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/gear.png")}
                style={styles.backgroundImage}
            >

            </ImageBackground>

        </ThemedView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161717', // colore di sfondo per il contenitore
    },
    backgroundImage: {
        flex: 1,  // Ensures it takes up full height and width
        width: '100%',  // Ensures the image covers full width
        height: '100%',  // Ensures the image covers full height
        resizeMode: 'cover',  // Optional: Makes sure the image covers the container without distorting
    },
});

export default options;
