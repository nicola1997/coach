import {Stack} from 'expo-router';
import React from 'react';
import {useColorScheme} from '@/hooks/useColorScheme';

export default function StackLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false, // Nasconde l'header di navigazione, se desiderato
                animation:'none'
            }}
        >
            {/* Schermata Home */}
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />

            {/* Schermata Explore */}
            <Stack.Screen
                name="explore"
                options={{
                    title: 'Explore',
                }}
            />

            {/* Schermata Menu */}
            <Stack.Screen
                name="menu"
                options={{
                    title: 'Menu',
                }}
            />
            <Stack.Screen
                name="msg"
                options={{
                    title: 'Msg',
                }}
            />
            <Stack.Screen
                name="home"
                options={{
                    title: 'home',
                }}
            />
            <Stack.Screen
                name="manager"
                options={{
                    title: 'manager',
                }}
            />
            <Stack.Screen
                name="search"
                options={{
                    title: 'search',
                }}
            />
            <Stack.Screen
                name="options"
                options={{
                    title: 'options',
                }}
            />
            <Stack.Screen
                name="world"
                options={{
                    title: 'world',
                }}
            />
            <Stack.Screen
                name="HomeView"
                options={{
                    title: 'HomeView',
                }}
            />
        </Stack>
    );
}
