import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const themes = [
  { title: "LET'S DANCE", subtitle: 'Créativité • Alliance • Sensualité', symbol: '♫' },
  { title: "LET'S FLY", subtitle: 'Ingéniosité • Innovation', symbol: '✈' },
  { title: "LET'S FIGHT", subtitle: 'Résilience • Force', symbol: '✦' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>EN DIRECT DU WEB</Text>
          <Text style={styles.logo}>BOUDEWARE</Text>
          <Text style={styles.tagline}>Une divertissante revue d'histoire culturelle.</Text>
          <Text style={styles.meta}>4 générations · 3 thèmes · 13 épisodes · 30 minutes</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>EXPLORER LA SAISON 1</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>LES 3 UNIVERS</Text>
        {themes.map((theme) => (
          <TouchableOpacity key={theme.title} style={styles.card}>
            <Text style={styles.symbol}>{theme.symbol}</Text>
            <View style={styles.cardCopy}>
              <Text style={styles.cardTitle}>{theme.title}</Text>
              <Text style={styles.cardSubtitle}>{theme.subtitle}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.episode}>
          <Text style={styles.episodeLabel}>À L'AFFICHE</Text>
          <Text style={styles.episodeTitle}>SAISON 1</Text>
          <Text style={styles.episodeText}>13 épisodes pour traverser quatre générations de culture, de musique, d'images et d'idées.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#090909' },
  container: { padding: 24, paddingBottom: 48 },
  hero: { paddingTop: 48, paddingBottom: 42 },
  kicker: { color: '#f4c542', fontSize: 12, fontWeight: '800', letterSpacing: 2.5, marginBottom: 14 },
  logo: { color: '#fff', fontSize: 48, fontWeight: '900', letterSpacing: -2 },
  tagline: { color: '#d4d4d4', fontSize: 18, lineHeight: 26, marginTop: 14, maxWidth: 330 },
  meta: { color: '#8f8f8f', fontSize: 12, lineHeight: 19, marginTop: 14 },
  button: { alignSelf: 'flex-start', backgroundColor: '#f4c542', paddingHorizontal: 18, paddingVertical: 14, borderRadius: 4, marginTop: 24 },
  buttonText: { color: '#090909', fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  sectionTitle: { color: '#fff', fontSize: 13, fontWeight: '900', letterSpacing: 2, marginBottom: 14 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#151515', borderRadius: 10, padding: 18, marginBottom: 10, borderWidth: 1, borderColor: '#262626' },
  symbol: { color: '#f4c542', fontSize: 25, width: 42 },
  cardCopy: { flex: 1 },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '900' },
  cardSubtitle: { color: '#8f8f8f', fontSize: 12, marginTop: 5 },
  arrow: { color: '#666', fontSize: 28 },
  episode: { backgroundColor: '#f4c542', borderRadius: 10, padding: 22, marginTop: 22 },
  episodeLabel: { color: '#090909', fontSize: 11, fontWeight: '900', letterSpacing: 2 },
  episodeTitle: { color: '#090909', fontSize: 30, fontWeight: '900', marginTop: 7 },
  episodeText: { color: '#161616', fontSize: 14, lineHeight: 21, marginTop: 8 }
});
