import React, { useState } from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    const [ login, setLogin ] = useState(false)
    // hooks for validation
    const [validEmail,setValidEmail] = useState(false)
    const [validPasssword,setValidPassword] = useState(false)
    // new hooks for user credentials
    const [ email, setEmail ] = useState(false)
    const [ password, setPassword ] = useState(false)

    const navigation = useNavigation()

    // Validating email
    const valideEmail = (email) =>{
        if( email.indexOf('@') > 0 && email.indexOf('.') > 0 ) {
            setValidEmail( true )
            setEmail( email )
        }
        else {
            setValidEmail( false )
        }
    }
    // Validating password
    const validePassword = (password) =>{
        if( password.length >= 6 ) {
            setValidPassword( true )
            setPassword( password )
        }
        else {
            setValidPassword( false )
        }
    }



    if (!login){
        return (
            //register view + secure text 
            <View style = {styles.container}>
                <Text style ={styles.title}> Register </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="you@email.com" 
                    onChangetext ={ (emaild) => validEmail(email) }
                    />
                <TextInput
                    style = {styles.input}
                    placeholder="min 6 characters" 
                    secureTextEntry={true}
                    onChangetext ={ (password) => validPasssword(password) }
                />
                {/* here are the validations */}
                <TouchableOpacity 
                 style = { !validEmail || !validPasssword ? styles.buttonDisabled : styles.button }
                 disabled = { !validEmail || !validPasssword ? true : false}
                 onPress = { props.signup(email,password) }
                >
                    <Text style={styles.buttonText}> - REGISTER - </Text>
                </TouchableOpacity>
                <Text style={styles.altText}> Already have an account? </Text>
                <TouchableOpacity 
                    style={styles.altButton}
                    onPress={ () => {
                        setLogin(true)
                        navigation.setOptions({title: 'Sign In'})
                    } }
                    >
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
                placeholder="password" 
                secureTextEntry={true}
            />
            <TouchableOpacity style = {styles.button} >
                <Text style={styles.buttonText}> - SIGN IN- </Text>
            </TouchableOpacity>
            <Text style={styles.altText}> dON'T have an account? </Text>
            <TouchableOpacity 
                style={styles.altButton}
                onPress={ () => {
                    setLogin(false) 
                    navigation.setOptions({title: 'Register'})
                } }
            >
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
    buttonDisabled: {
        padding: 10,
        backgroundColor: '#888888'
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
        textAlign: 'center',
    },
})