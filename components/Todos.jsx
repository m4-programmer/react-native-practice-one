import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Todos = ({tasks}) => {
  return (
    <View>
      {/* Todo */}
      <Text>Total Todo: {tasks.length}</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item task={item} />} 
          keyExtractor={(item, index) => index.toString()} 
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const Item = ({task}) => {
    return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{task}</Text>
    </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    item: {
        backgroundColor: '#456',
        padding: 5,
        marginVertical: 5,
      },
      title: {
        fontSize: 16,
        color: 'white'
      },
});

export default Todos