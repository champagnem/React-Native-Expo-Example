//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Settings')}
      >
         <Text>Go to SettingsScreen</Text>
     </TouchableOpacity> 

     <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.toggleDrawer()}
      >
         <Text>Toggle Menu Drawer</Text>
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
    justifyContent: "space-evenly",
  },
  button:{
    alignItems: "center",
    backgroundColor: "grey",
    padding: 10
  }
})
