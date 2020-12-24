import React, { useEffect } from 'react'
import AppNavigator from './navigation/AppNavigator'
import { Container, Text, Root } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

export default function App() {
  //Triggers the rendering of the app once loading of assets or API data fetching is completed
  const [isLoadingComplete, setLoadingComplete] = useState()

  const [fontsLoaded] = Font.useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })

  useEffect(() => {
    if (fontsLoaded) {
      //setTimemout added for the sole purpose of seeing the "Loading..." for more than a couple microseconds
      setTimeout(() => {
        setLoadingComplete(true)
      }, 2000)
    }
  }, [fontsLoaded])

  if (isLoadingComplete) {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  } else {
    return (
      <Container style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </Container>
    )
  }
}
