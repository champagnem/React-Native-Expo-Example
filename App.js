import React, { useEffect } from 'react'
import AppNavigator from './navigation/AppNavigator'
import { Container, Text, Root } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { StateProvider } from './hooks/Contexts'
import { ContextReducer } from './hooks/ContextReducer'
import * as Localization from 'expo-localization'
import locale from './localization/locale'
import { retrieveData } from './components/functions/AsyncStorage'

export default function App() {
  //Triggers the rendering of the app once loading of assets or API data fetching is completed
  const [isLoadingComplete, setLoadingComplete] = useState()
  const [initialLanguage, setInitialLanguage] = useState()

  const [fontsLoaded] = Font.useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  })

  const getInitialAppLanguage = async () => {
    const deviceLanguage = Localization.locale.substring(0, 2)
    let preferedLanguage = (await retrieveData('preferedLanguage')) || deviceLanguage
    locale.locale = preferedLanguage
    setInitialLanguage(preferedLanguage)
  }

  useEffect(() => {
    getInitialAppLanguage()
  })

  useEffect(() => {
    if (fontsLoaded && initialLanguage) {
      //setTimemout added for the sole purpose of seeing the "Loading..." for more than a couple microseconds
      setTimeout(() => {
        setLoadingComplete(true)
      }, 2000)
    }
  }, [fontsLoaded, initialLanguage])

  if (isLoadingComplete) {
    const initialState = {
      globalLanguage: initialLanguage,
    }
    return (
      <StateProvider initialState={initialState} reducer={ContextReducer()}>
        <Root>
          <AppNavigator />
        </Root>
      </StateProvider>
    )
  } else {
    return (
      <Container style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </Container>
    )
  }
}
