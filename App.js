import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from "react";
import { LightSensor } from "expo-sensors";

export default function App() {

  const [{ illuminance }, definirIluminacao ] = useState({ illuminance: 0})

  useEffect(function() {
    LightSensor.addListener(definirIluminacao)
  }, [])

  function VerificarLuz(escuro, claro) {
    return illuminance > 20 ? claro : escuro
  }

  return (
    <ScrollView
      style={{ backgroundColor: VerificarLuz("#FFFBEB", "#20262E") }}
    >
      <StatusBar barStyle={VerificarLuz("dark-content", "light-content")} 
      backgroundColor={VerificarLuz("#FFFBEB", "#20262E")}/>

      <View>
        <Text
          style={{ color: VerificarLuz("#222", "#fff"), fontSize: 32, textAlign: "center"}}
        > Sensores do Smartphone!</Text>
        <Text
          style={{ color: VerificarLuz("#222", "#fff"), fontSize: 18, textAlign: "left"}}
        > Testando a iluminação do ambiente</Text>
        <Text
          style={{ color: VerificarLuz("#222", "#fff"), fontSize: 10, textAlign: "left"}}
        > { illuminance }</Text>

        <Image source={{ uri: "http://picsum.photos/200/200" }} style={{ height: 200}}/>
      </View>
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
