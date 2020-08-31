import React, { useState } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    const [ login, setLogin ] = useState(false)

    if (!login){
        return (
            //register view + secure text 
            <View style = {styles.container}>
                <Text style ={styles.title}> Register </Text>
                <TextInput style={styles.input} placeholder="you@email.com" />
                <TextInput
                    style = {styles.input}
                    placeholder="min 6 characters" 
                    secureTextEntry={true}
                />
                <TouchableOpacity style = {styles.button} >
                    <Text style={styles.buttonText}> - REGISTER - </Text>
                </TouchableOpacity>
                <Text style={styles.altText}> Already have an account? </Text>
                <TouchableOpacity style={styles.altButton}>
                    <Text style={styles.altButtonText} >- LOGIN -</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            //login view
            <View style = {styles.container}>
            <Text style ={styles.title}> Sign In </Text>
            <TextInput style={styles.input} placeholder="you@email.com" />
            <TextInput
                style = {styles.input}
                placeholder="min 6 characters" 
                secureTextEntry={true}
            />
            <TouchableOpacity style = {styles.button} >
                <Text style={styles.buttonText}> - SIGN IN- </Text>
            </TouchableOpacity>
            <Text style={styles.altText}> dON'T have an account? </Text>
            <TouchableOpacity style={styles.altButton}>
                <Text style={styles.altButtonText} >- LOGIN -</Text>
            </TouchableOpacity>
        </View>         
        )
    }
}


//Adding Style sheet
const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#324456',
        marginVertical: 20,
    },  
    button: {
        padding: 10,
        backgroundColor: '#656677'
    },
    buttonText: {
        color: '#eeeeee',
        textAlign: 'center',
    },
    altText:{
        textAlign: 'center',
        marginTop: 20,
    },
    altButton:{
        marginTop: 10,
        padding: 10,
    },
    altButtonText: {
        color: 'blue',
    },
})