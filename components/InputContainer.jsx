import { View, Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const InputContainer = ({handleInputChange, inputValue, inputRef,AddTask}) => {
  return (
    <>
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
    </>
  )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
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
});
export default InputContainer