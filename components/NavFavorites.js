import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'twrnc'
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '123',
    icon: 'home',
    description: 'Home',
    location: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    description: 'Work',
    location: 'The Shard, London Bridge Street, London, UK',
  },
];


const NavFavorites = () => {

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (<View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, description, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{description}</Text>
            <Text style={tw`text-gray-500`}>{location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}


export default NavFavorites