// Libraries
import { Button, Container, Header, Icon, StyleProvider, Text } from 'native-base'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { withNavigation } from 'react-navigation'
import { StyleSheet, View, StatusBar } from 'react-native'
import variable from '../../native-base-theme/variables/commonColor'
import theme from '../../native-base-theme/components'

function ContentWrapper(props) {
  const renderBody = () => {
    const { children } = props

    const mainView = (
      <StyleProvider style={theme(variable)}>
        <View style={[styles.content]}>
          {renderHeader()}
          <View style={{ flex: 1 }}>{children}</View>
          {/* You could use the same method to add a footer in every screens */}
          {/* {renderFooter()} */}
        </View>
      </StyleProvider>
    )
    return mainView
  }

  const renderHeader = () => {
    const { withHeader, withMiddleText } = props
    if (withHeader) {
      return (
        <Header>
          <StatusBar backgroundColor={'grey'}  />
          <View>
            <View style={styles.headerContainer}>
              <Button
                transparent
                onPress={() => {
                  props.navigation.goBack()
                }}
              >
                <Icon name='md-arrow-back' style={styles.backIcon} />
              </Button>
              <View style={styles.middleTextContainer}>
                <Text style={styles.middleText}>{withMiddleText}</Text>
              </View>
              <Button
                transparent
                onPress={() => {
                  props.navigation.toggleDrawer()
                }}
              >
                <Icon style={styles.menuIconRight} name='menu' />
              </Button>
            </View>
          </View>
        </Header>
      )
    }

    return null
  }

  return <Container style={styles.container}>{renderBody()}</Container>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: variable.deviceHeight,
  },
  headerContainer: {
    backgroundColor: 'lightgrey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: variable.deviceWidth,
  },
  backIcon: {
    fontSize: RFValue(36),
    height: RFValue(36),
    color: variable.brandWhite,
    marginLeft: RFValue(20),
    paddingTop: 0,
  },
  menuIconRight: {
    color: variable.brandWhite,
    fontSize: RFValue(40),
    height: RFValue(40),
    marginRight: RFValue(30),
    paddingTop: 0,
  },
  middleText: {
    color: variable.brandWhite,
    fontSize: RFValue(20),
    textAlign: 'center',
  },
  middleTextContainer: {
    justifyContent: 'center',
    width: variable.deviceWidth*.55,
  },
})

export default withNavigation(ContentWrapper)
