//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ContentWrapper from '../../components/UI/ContentWrapper'

export default function SettingsScreen(props) {
  return (
    <ContentWrapper withHeader withMiddleText={'Settings'}>
      <View style={styles.container}>
        <Text>This is the SettingsScreen</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text>Go to HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
          <Text>Toggle Menu Drawer</Text>
        </TouchableOpacity>
      </View>
    </ContentWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
})
