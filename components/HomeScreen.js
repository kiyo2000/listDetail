import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = (props) => {
    const navigation = useNavigation() //Referencing
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title ="Go to Detail" onPress={() => {navigation.navigate("Detail")}} />
        </View>
    )
}