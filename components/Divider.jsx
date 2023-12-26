import { View } from 'react-native'
import React from 'react'

const Divider = ({width=1, color='grey', marginVertical = 10}) => {
  return (
    <View style={{borderWidth: width, borderColor: color, marginVertical}}>

    </View>
  )
}

export default Divider