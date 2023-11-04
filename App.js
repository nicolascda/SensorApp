import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import React from "react";

export default function App() {
  return (
    <ScrollView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFBEB"}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
