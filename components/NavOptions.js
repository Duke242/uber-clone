import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", // Change in future 
  }
]

const NavOptions = () => {
  const navigation = useNavigation()

  return (
    // <View>
    //   <FlatList
    //   keyExtractor={(item) => item.id}
    //   horizontal
    //   data={data}
    //   renderItem={({item}) => (
    //     <TouchableOpacity
    //     onPress={() => navigation.navigate(item.screen)}
    //     style={
    //       tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`
    //     }>
    //       <View>
    //         <Image
    //         style= {{ width: 120, height: 120, resizeMode: "contain" }}
    //         source={{uri:item.image}}
    //         />
    //         <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
    //         <Icon
    //         style={tw `p-2 bg-black rounded-full w-10 mt-4`}
    //           type='antdesign'
    //           name='arrowright'
    //           color='white'
    //         />
    //       </View>
    //     </TouchableOpacity>

    //   )}
    //   />
    // </View>
    Navigation
  )
}

export default NavOptions

//import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// const NavOptions = () => {
//   return (
//     <View>
      
//     </View>
//   )
// }

// export default NavOptions
