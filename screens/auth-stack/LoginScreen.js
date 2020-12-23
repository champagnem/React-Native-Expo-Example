//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the LoginScreen</Text>
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Go to HomeScreen</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
})
