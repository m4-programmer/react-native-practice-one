import {  Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <>
      <Text style={styles.heading}>
        <Text style={{color:'coral'}}>Ba</Text>sic 
        <Text style={{color:'#209ac3'}}> Todo </Text>
          Li<Text style={{color:'#209ac3'}}>st</Text>
      </Text>
    </>
  )
}
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        padding: 20,
        marginTop: 15
      },
});

export default Title