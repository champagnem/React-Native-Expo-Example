import { Button, Icon } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useStateValue } from '../../hooks/Contexts'
import locale from '../../localization/locale'
//

import variable from '../../native-base-theme/variables/commonColor'

export default function MenuDrawer(props) {
  const [{ globalLanguage }, dispatch] = useStateValue()

  const safeAreaInsets = useSafeAreaInsets()

  const onLogout = () => {
    props.navigation.navigate('Auth')
  }
  const toggleLanguage = () => {
    let newLanguage = globalLanguage == 'en' ? 'fr' : 'en'
    dispatch({
      type: 'changeGlobalLanguage',
      newGlobalLanguage: newLanguage,
    })
    locale.locale = newLanguage
  }
  return (
    <View
      style={[
        styles.mainView,
        {
          paddingBottom: safeAreaInsets.bottom, //used to clear the iPhone X and later Home Bar or notches on other devices
          paddingTop: safeAreaInsets.top,
        },
      ]}
    >
      <TouchableOpacity style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}> {locale.t('menuDrawer.appName')}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>{locale.t('menuDrawer.home')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>{locale.t('menuDrawer.settings')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Button
            transparent
            onPress={() => {
              toggleLanguage()
            }}
            style={styles.languageButton}
          >
            <Icon style={[styles.languageIcon]} type={'MaterialIcons'} name='language' />
            <Text style={[styles.languageText]}>{globalLanguage == 'en' ? 'FR' : 'EN'}</Text>
          </Button>
          <TouchableOpacity style={styles.logoutButton} onPress={() => onLogout()}>
            <Text style={styles.logoutText}>{locale.t('menuDrawer.logout')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: variable.containerBgColor,
    height: Platform.OS === 'ios' ? variable.deviceHeight : variable.deviceHeight - StatusBar.currentHeight,
  },
  name: {
    fontSize: RFValue(18),
    textAlign: 'center',
    marginLeft: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: variable.containerBgColor,
    height: variable.deviceHeight * 0.1,
  },
  buttonContainer: {
    paddingVertical: 10,
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: RFValue(18),
    color: variable.brandDark,
    alignSelf: 'center',
    flex: 3,
  },
  logoutText: {
    fontSize: RFValue(22),
    color: variable.brandWhite,
    alignSelf: 'center',
    paddingRight: 0,
    marginRight: 15,
  },
  logoutButton: {
    borderRadius: 0,
    height: RFValue(50),
    width: '70%',
    backgroundColor: variable.brandDanger,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    flex: 2,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 0,
    backgroundColor: variable.containerBgColor,
    borderWidth: 1,
    borderColor: variable.brandLight,
    elevation: 0,
    height: variable.deviceHeight * 0.07,
    width: '100%',
    paddingLeft: variable.deviceWidth * 0.05,
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: variable.brandDark,
    height: RFValue(50),
    borderRadius: 0,
    width: '30%',
  },
  languageIcon: {
    color: variable.brandWhite,
    fontSize: RFValue(30),
    marginLeft: 1,
    marginRight: 1,
    alignSelf: 'center',
  },
  languageText: {
    color: variable.brandWhite,
    fontSize: RFValue(22),
    alignSelf: 'center',
    paddingRight: 1,
    paddingLeft: 1,
  },
})
