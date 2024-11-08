import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, SafeAreaView, View, Text, TouchableOpacity, SectionList} from 'react-native';

import {useState} from "react";

export default function TabTwoScreen() {
  const [activeTab, setActiveTab] = useState('Formation');

  const { serieATeams, laLigaTeams, ligue1Teams, premierLeagueTeams, bundesligaTeams } = require('../../assets/teams.js');
  return (

      <SafeAreaView style={{ flex: 5 }}>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Seleziona la tua squadra</Text>
          </View>

          <View style={styles.fieldContainer}>
            <SectionList
                sections={serieATeams}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={styles.item}>
                      <Text style={styles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />          </View>

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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
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
