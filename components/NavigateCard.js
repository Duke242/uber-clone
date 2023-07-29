import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'
import { Icon } from 'react-native-elements/dist/icons/Icon'

export default function NavigateCard() {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}> Good Morning, Duke! </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            enablePoweredByContainer={false}
            fetchDetails={true}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
              navigation.navigate("RideOptionsCard")
            }}
            returnKeyType={"search"}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        <NavFavorites />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex flex-row bg-black px-4 py-3 rounded-full w-24 justify-between`}
          onPress={() => navigation.navigate("RideOptionsCard")}
        >
          <Icon name='car' type='font-awesome' color='white' size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row bg-white px-4 py-3 rounded-full w-24`}>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#dddddf",
    borderRadius: 0,
    fontSize: 12,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
