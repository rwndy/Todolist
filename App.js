import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header/Header'
import TodoItem from './components/Item/TodoItem'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#b83b5e'} translucent/>
      <View style={styles.container}>
        <Header />
        <TodoItem />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f08a5d'
  },
  subTitle: {
    color: '#eeecda',
    fontSize: 18,
  }
})

export default App;
