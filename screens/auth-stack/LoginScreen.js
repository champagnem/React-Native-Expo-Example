//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ContentWrapper from '../../components/UI/ContentWrapper'
import variable from '../../native-base-theme/variables/commonColor'

export default function LoginScreen(props) {
  return (
    <ContentWrapper>
      <View style={styles.container}>
        <Text>This is the LoginScreen</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to HomeScreen</Text>
        </TouchableOpacity>
      </View>
    </ContentWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variable.containerBgColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    backgroundColor: variable.brandCharcoal,
    padding: 10,
  },
  buttonText: { color: variable.brandWhite },
})
