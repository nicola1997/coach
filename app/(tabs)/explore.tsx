import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useState} from "react";

export default function TabTwoScreen() {
  const [activeTab, setActiveTab] = useState('Formation');

  const tabs = ['Formation', 'Shape', 'Defence', 'Attack', 'Set Pieces', 'Captain'];
  return (

      <SafeAreaView style={{ flex: 5 }}>

        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Arsenal</Text>
            <Text style={styles.headerSubtitle}>Tactics - Team Instructions</Text>
            <Text style={styles.date}>Monday 10th Oct 2024</Text>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[styles.tab, activeTab === tab && styles.activeTab]}
                    onPress={() => setActiveTab(tab)}
                >
                  <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
            ))}
          </View>

          {/* Field and Tactics */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldText}>Field goes here</Text>
          </View>

          {/* Instructions */}
          <View style={styles.instructions}>
            <Text style={styles.instructionTitle}>Final Third</Text>
            <Text style={styles.instructionText}>Early Crosses</Text>
            <Text style={styles.instructionText}>Run At Defence</Text>
            <Text style={styles.instructionText}>Passing Style: Short</Text>
            <Text style={styles.instructionText}>Passing Focus: Mixed</Text>
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
    container: {
      flex: 1,
      backgroundColor: '#3E2D65',
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    header: {
      padding: 16,
      backgroundColor: '#4B3B71',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 24,
      color: '#FFF',
      fontWeight: 'bold',
    },
    headerSubtitle: {
      fontSize: 16,
      color: '#D1C4E9',
    },
    date: {
      fontSize: 14,
      color: '#BDBDBD',
      marginBottom: 4,
    },
    continueButton: {
      backgroundColor: '#33AA55',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
      position: 'absolute',
      right: 16,
      top: 16,
    },
    continueText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    tabs: {
      flexDirection: 'row',
      backgroundColor: '#6E5B9F',
      paddingVertical: 8,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
    },
    tabText: {
      color: '#E0E0E0',
    },
    activeTab: {
      backgroundColor: '#A682E3',
      borderRadius: 4,
    },
    activeTabText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    fieldContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1F1448',
      marginVertical: 8,
      padding: 16,
      borderRadius: 8,
    },
    fieldText: {
      fontSize: 16,
      color: '#FFF',
    },
    instructions: {
      padding: 16,
      backgroundColor: '#4B3B71',
    },
    instructionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: 8,
    },
    instructionText: {
      fontSize: 14,
      color: '#E0E0E0',
      marginBottom: 4,
    },

});
