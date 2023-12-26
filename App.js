import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, SafeAreaView, StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import InputContainer from './components/InputContainer';

export default function App() {
  const inputRef = useRef()
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
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
    else{
      setError('Please enter a valid character');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  
    
  }
  
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        <Text style={{color:'coral'}}>Ba</Text>sic 
        <Text style={{color:'#209ac3'}}>Todo</Text>
         Li<Text style={{color:'#209ac3'}}>st</Text>
      </Text>
      <View style={{paddingHorizontal: 20,flex: 1}}>
        <InputContainer 
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          inputRef={inputRef}
          AddTask={AddTask}

           />
        {/* Validation Error */}
        {error && <Text style={styles.error}>{error}</Text>}

        <View style={{borderWidth: 1, borderColor: 'grey', marginVertical: 10}}></View>
        {/* Todo */}
        <Text>Total Todo: {tasks.length}</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item task={item} />} 
          keyExtractor={(item, index) => index.toString()} 
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
l
        />
      
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const Item = ({task}) => {
  return (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{task}</Text>
  </TouchableOpacity>
  )
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccd',
    color: 'white'
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    padding: 20,
    marginTop: 15
  },
  
  item: {
    backgroundColor: '#456',
    padding: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
  error: {
    fontSize: 14,
    color: 'red',
    paddingTop: 10,
  },

});
