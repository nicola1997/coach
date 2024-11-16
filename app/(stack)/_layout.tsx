import { Stack, useRouter, useSegments } from 'expo-router';
import React from 'react';
import Navbar from "@/app/(stack)/Navbar";
import { View, StyleSheet, SafeAreaView } from 'react-native';

export default function StackLayout() {
    const segments = useSegments();
    const currentScreen = segments[segments.length - 1];

    const screensWithNavbar = [ "msg", "manager", "search", "options", "world", "home"];

    const shouldShowNavbar = screensWithNavbar.includes(currentScreen);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Show Navbar only if shouldShowNavbar is true */}
                {shouldShowNavbar && <Navbar />}
                {/* Main content section that will be shown on the right */}
                <View style={styles.mainContent}>
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            animation: 'none',
                        }}
                    >
                        <Stack.Screen name="index" options={{ title: 'Home' }} />
                        <Stack.Screen name="home" options={{ title: 'Home' }} />
                        <Stack.Screen name="explore" options={{ title: 'Explore' }} />
                        <Stack.Screen name="msg" options={{ title: 'Messages' }} />
                        <Stack.Screen name="manager" options={{ title: 'Manager' }} />
                        <Stack.Screen name="search" options={{ title: 'Search' }} />
                        <Stack.Screen name="options" options={{ title: 'Options' }} />
                        <Stack.Screen name="world" options={{ title: 'World' }} />
                    </Stack>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // Ensure navbar is on the left and content is on the right
    },
    mainContent: {
        flex: 1, // Take the remaining space to the right of the navbar
        marginLeft: 60, // Offset content to the right to account for the navbar width
    }
});
