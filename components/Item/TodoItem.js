import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

const TodoItem = () => {
  const [ toDos, setTodo ] = useState([])
  const [ toInput, setToInput ] = useState('')

  const handleItem = (val) => {
    setToInput(val)
  }

  const handleAdd = () => {
    
    setTodo(currentState => {
      return [...currentState, toInput]
    })

    setToInput(currentState => {
      return currentState
    })
  }

  const handleDelete = id => {
    setTodo(currentState => {
      return currentState.filter(todo => todo.id !== id)
    })
  }

  const enable = toInput.length > 0

  return (
    <View style={styles.wrapInput}>
      <TextInput 
        placeholder={'Please input your task'} 
        placeholderTextColor={'#eeecda'}
        style={styles.inputTodo}
        onChangeText={handleItem} />
      <TouchableOpacity disabled={!enable} onPress={handleAdd}>
        <Text style={styles.addButton}>{ !enable ? 'Disable' : '🖊 Add'}</Text>
      </TouchableOpacity>
      {
        toDos.map((toDo, index) => (
          <View style={{marginTop: 20}} key={index}>
            <Text style={styles.items}>{`${toDo }: ${new Date().getDate()} / ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`}</Text>
            {/* <TouchableOpacity onPress={handleDelete(index)}>
              <Text style={styles.delTodo}>🗑 Delete</Text>
            </TouchableOpacity> */}
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({

  wrapInput: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },

  inputTodo: {
    borderBottomColor: '#eeecda',
    borderBottomWidth: 2,
    color: '#eeecda',
  },

  addButton: {
    color: '#eeecda',
    fontSize: 18,
    backgroundColor: '#6a2c70',
    padding: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10
  },

  items: {
    fontSize: 16,
    color: '#eeecda',
    fontWeight: 'bold'
  },

  delTodo: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    color: '#eeecda',
    fontWeight: 'bold'
  }
  
})


export default TodoItem