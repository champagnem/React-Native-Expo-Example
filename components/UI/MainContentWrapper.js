// Libraries
import { Button, Container, Header, Icon, Text } from 'native-base'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { withNavigation } from 'react-navigation'
import { StyleSheet, View, StatusBar } from 'react-native'

function MainContentWrapper(props) {
  const renderBody = () => {
    const { children } = props

    const mainView = (
      <View style={[styles.content]}>
        {renderHeader()}
        <View style={{ flex: 1 }}>{children}</View>
        {/* You could use the same method to add a footer in every screens */}
        {/* {renderFooter()} */} 
      </View>
    )

    return mainView
  }

  const renderHeader = () => {
    const { withHeader, withMiddleText } = props
    if (withHeader) {
      return (
        <Header>
          <StatusBar backgroundColor={'grey'} barStyle='light-content' />
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
    height: '100%',
  },
  headerContainer: {
    backgroundColor: 'lightgrey',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
  },
  backIcon: {
    fontSize: RFValue(36),
    height: RFValue(36),
    color: 'white',
    marginLeft: RFValue(20),
    paddingTop: 0,
  },
  menuIconRight: {
    color: 'white',
    fontSize: RFValue(40),
    height: RFValue(40),
    marginRight: RFValue(20),
    paddingTop: 0,
  },
  middleText: {
    color: 'white',
    fontSize: RFValue(20),
  },
  middleTextContainer: {
    justifyContent: 'center',
  },
})

export default withNavigation(MainContentWrapper)
