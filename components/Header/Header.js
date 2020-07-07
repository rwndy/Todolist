import React from 'react'
import {  
  StyleSheet,
  View,
  Text, 
} from 'react-native'

const Header = () => {
  return (
    <View style={styles.wrapHeader}>
      <Text style={styles.title}>📝 To Do List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapHeader: {
    backgroundColor: '#b83b5e',
    height: 80,
    paddingTop: 25,
  },
  title: {
    color: '#eeecda',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Header