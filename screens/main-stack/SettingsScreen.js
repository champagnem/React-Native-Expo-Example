//Librairies
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import ContentWrapper from '../../components/UI/ContentWrapper'
import variable from '../../native-base-theme/variables/commonColor'
import SimpleModal from '../../components/UI/modals/SimpleModal'

export default function SettingsScreen(props) {
  const [count, setCount] = useState(0)
  const [visibility, setVisibility] = useState(false)

  const addToCount = () => {
    setCount(count + 1)
  }

  const toggleVisibility = (bool) => {
    setVisibility(bool)
  }

  console.log(visibility)
  return (
    <ContentWrapper withHeader withMiddleText={'Settings'}>
      {visibility ? <SimpleModal toggleVisibility={toggleVisibility} count={count} setCount={setCount} /> : null}
      <View style={styles.container}>
        <Text>This is the SettingsScreen</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
          <Text style={styles.buttonText}>Toggle Menu Drawer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addToCount()}>
          <Text style={styles.buttonText}>Add to count</Text>
        </TouchableOpacity>
        <Text> Count = {count} </Text>
        <TouchableOpacity style={styles.button} onPress={() => toggleVisibility(true)}>
          <Text style={styles.buttonText}>Show modal</Text>
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
