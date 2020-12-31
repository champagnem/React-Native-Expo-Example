import AsyncStorage from '@react-native-async-storage/async-storage'

export const retrieveData = async (key) => {
  let storageValue = await AsyncStorage.getItem(key)
  return storageValue
}

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}
export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (exception) {
    console.log(exception)
  }
}
