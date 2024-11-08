import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { serieA, laLiga, ligue1, bundesliga, premierLeague, ligaPortugal } from '@/assets/teams';
import {SafeAreaProvider} from "react-native-safe-area-context";

const renderSquad = ({ item }) => (
    <View style={styles.squadContainer}>
      <Image source={item.pathImmagine} style={styles.squadImage} />
      <Text style={styles.squadName}>{item.nome}</Text>
    </View>
);

const LeagueGrid = ({ title, teams }) => (
    <View style={styles.leagueContainer}>
      <Text style={styles.leagueTitle}>{title}</Text>
      <FlatList
          data={teams}
          renderItem={renderSquad}
          keyExtractor={(item) => item.nome}
          numColumns={3} // Puoi regolare il numero di colonne
          columnWrapperStyle={styles.columnWrapper}
      />
    </View>
);

const App = () => {
  return (
      <SafeAreaProvider style={styles.container}>
      <ScrollView style={styles.container}>
        <LeagueGrid title="Serie A" teams={serieA} />
        <LeagueGrid title="La Liga" teams={laLiga} />
        <LeagueGrid title="Ligue 1" teams={ligue1} />
        <LeagueGrid title="Bundesliga" teams={bundesliga} />
        <LeagueGrid title="Premier League" teams={premierLeague} />
        <LeagueGrid title="Liga Portugal" teams={ligaPortugal} />
      </ScrollView>
      </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#6aaced',
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
    borderRadius: 40,
    marginBottom: 5,
  },
  squadName: {
    textAlign: 'center',
    fontSize: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default App;
