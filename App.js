import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const inputRef = useRef()
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const AddTask = () =>{
    if (inputValue) {
      setTasks(task => {return [...task, inputValue]})
      //we clear the input field
      setInputValue('')
      if (inputRef.current) {
        inputRef.current.blur(); // Remove focus from the TextInput
      }
    }
  }
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Basic Todo List</Text>
      <View style={{paddingHorizontal: 20,flex: 1}}>
        {/* Input Container */}
        <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
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
        </View>
        {/* End of input container */}

        <View style={{borderWidth: 1, borderColor: 'grey', margin: 10}}></View>
        {/* Todo */}
        <Text>Total Todo: {tasks.length}</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item task={item} />} 
          keyExtractor={(item, index) => index.toString()} 
l
        />
      
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
const Item = ({task}) => {
  return (
  <View style={styles.item}>
    <Text style={styles.title}>{task}</Text>
  </View>
  )
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    padding: 20,
    marginTop: 15
  },
  input: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    width: '80%',
    marginRight: 10,
    height: 40
  },
  button: {
    backgroundColor: 'coral',
    color: 'white',
    width: '18%',
    padding: 10,
    borderRadius: 5,
    height: 40,
    fontWeight: '600'
  },
  item: {
    backgroundColor: 'coral',
    padding: 20,
    marginVertical: 8,
    
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
});
