import { Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function StackLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack
            screenOptions={{
                headerShown: false, // Nasconde l'header di navigazione, se desiderato
            }}
        >
            {/* Schermata Home */}
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                    // Puoi rimuovere `tabBarIcon` poiché non ci sono più tab
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
        </Stack>
    );
}