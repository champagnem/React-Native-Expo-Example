//Librairies
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import ContentWrapper from '../../components/UI/ContentWrapper'
import { useStateValue } from '../../hooks/Contexts'
import variable from '../../native-base-theme/variables/commonColor'

export default function HomeScreen(props) {
  const [{ globalLanguage }] = useStateValue()

  return (
    <ContentWrapper withHeader withMiddleText={'Home'}>
      <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <Text>globalLanguage value is: {globalLanguage}</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Go to SettingsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
          <Text style={styles.buttonText}>Toggle Menu Drawer</Text>
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
    justifyContent: 'center',
    backgroundColor: variable.brandCharcoal,
    height: variable.deviceHeight * 0.06,
    width: variable.deviceWidth * 0.5,
    padding: 10,
  },
  buttonText: { color: variable.brandWhite, fontSize: RFValue(14) },
})
