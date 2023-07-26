import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc'
import { GooglePlacesAutoComplete } from 'react-native-google-places-autocomplete'
import NavOptions from '../components/NavOptions'
import { GOOGLE_MAPS_APIKEY } from '@env'

function HomeScreen() {
  return (
    <SafeAreaView style={tw` bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={require('../assets/Uber-Logo-PNG5.png')}
        />

        <GooglePlacesAutoComplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen