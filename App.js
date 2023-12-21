import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const inputRef = useRef()
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const AddTask = () =>{
    setTasks(task => {return [...task, inputValue]})
    //we clear the input field
    setInputValue('')
    if (inputRef.current) {
      inputRef.current.blur(); // Remove focus from the TextInput
    }
  }
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Basic Todo List</Text>
      <View style={{paddingHorizontal: 20,flex: 1}}>
          <TextInput 
          style={styles.input}
          placeholder='Enter to do ...'
          onChangeText={handleInputChange}
          value={inputValue}
          ref={inputRef}
          />
        
        <TouchableOpacity style={styles.button} onPress={AddTask}>
          <Text style={{color: 'white',textAlign:'center'}}>Add</Text>
        </TouchableOpacity>

        <View style={{borderWidth: 1, borderColor: 'grey', margin: 10}}></View>
        {/* Todo */}
        <Text>Total Todo: {tasks.length}</Text>
        {tasks.map((task,key)=>{
          return <Text key={key}>{task}</Text>
        })}
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    padding: 20
  },
  input: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2
  },
  button: {
    backgroundColor: 'coral',
    color: 'white',
    width: '20%',
    padding: 10,
    marginTop: 10,
  }
});
