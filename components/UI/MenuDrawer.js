import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useStateValue } from '../../hooks/Contexts'
import locale from '../../localization/locale'
//

import variable from '../../native-base-theme/variables/commonColor'

export default function MenuDrawer(props) {
  const [{ globalLanguage }] = useStateValue()

  const safeAreaInsets = useSafeAreaInsets()

  const onLogout = () => {
    props.navigation.navigate('Auth')
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
    height: variable.deviceHeight,
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
    height: variable.deviceHeight * 0.05,
    width: '100%', //This width is set according to the width of the drawer, not the device. The width of the drawer is already responsive.
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
    width: '100%', //This width is set according to the width of the drawer, not the device. The width of the drawer is already responsive.
    // paddingLeft: 10,
    // paddingLeft: "10%", //would be sized according to the drawer width
    paddingLeft: variable.deviceWidth * 0.05,
    //using variable for padding/margin is most useful when you want the
    //total height/width of your components (including padding/margin) to equals exactly a specific %
    //of the device screen otherwise you can stick with the pixels for small margin/padding and use
    //variable for large ones
  },
})
