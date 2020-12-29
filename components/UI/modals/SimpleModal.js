import { Body, Button, Header } from 'native-base'
import React from 'react'
import { Modal, Text, View, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import variable from '../../../native-base-theme/variables/commonColor'

export default function SimpleModal(props) {
  const { toggleVisibility, count, setCount } = props
  const resetCount = () => {
    setCount(0)
  }

  return (
    <Modal animationType='fade' transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Header style={styles.infoTitle}>
            <Body>
              <Text style={styles.infoTitleText}>Simple Modal</Text>
            </Body>
          </Header>
          <View>
            <Text style={styles.infoText}> Here&apos;s the count: {count} </Text>
            <View style={styles.resetButtonContainer}>
              <Button style={styles.resetButton} onPress={() => resetCount(false)}>
                <Text style={styles.resetButtonText}>Reset Count</Text>
              </Button>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => toggleVisibility(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalContent: {
    marginTop: variable.deviceHeight * 0.15,
    borderRadius: 25,
    width: 0.95 * variable.deviceWidth,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: variable.containerBgColor,
    overflow: 'hidden',
    borderColor: variable.brandWarning,
    borderWidth: 2,
  },
  infoTitle: {
    justifyContent: 'center',
    backgroundColor: variable.brandWarning,
  },
  infoTitleText: {
    color: variable.brandWhite,
    fontSize: RFValue(24),
    textAlign: 'center',
  },
  infoText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: RFValue(18),
  },
  button: {
    backgroundColor: variable.brandWarning,
    borderWidth: 1,
    borderColor: variable.brandWarning,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 0.95 * variable.deviceWidth,
    alignContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: variable.brandWhite,
    fontSize: RFValue(24),
    textAlign: 'center',
  },
  resetButton: {
    width: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: variable.brandDanger,
  },
  resetButtonText: {
    color: variable.brandWhite,
    fontSize: RFValue(16),
    textAlign: 'center',
  },
  resetButtonContainer: {
    padding: 10,
  },
})
