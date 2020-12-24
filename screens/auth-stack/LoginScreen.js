//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ContentWrapper from '../../components/UI/ContentWrapper'

export default function LoginScreen(props) {
  return (
    <ContentWrapper>
      <View style={styles.container}>
        <Text>This is the LoginScreen</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text>Go to HomeScreen</Text>
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
