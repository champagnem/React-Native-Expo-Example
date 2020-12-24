import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function MenuDrawer(props) {
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
        },
      ]}
    >
      <TouchableOpacity style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Expo-Example-App</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              borderRadius: 0,
              height: 50,
              width: '100%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
            onPress={() => onLogout()}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    height: '100%',
  },
  name: {
    fontSize: 18,
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
    backgroundColor: 'white',
    height: 100,
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
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    flex: 3,
  },

  logoutText: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    paddingRight: 0,
    marginRight: 15,
  },

  nameContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    flex: 2,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    elevation: 0,
    width: '100%',
    height: 60,
    paddingLeft: 10,
  },
})
