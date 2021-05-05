import React, {Component} from 'react'
import {Text , View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId : '',
            password : ''
        }
    }
    userLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("You have succesfully Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage);
        })
    }
    
    userSignUp = (emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((respone)=>{
            return Alert.alert("User added Succesfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage);
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profile}>
                    <Text style = {styles.welcomeText}>Barter Login</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TextInput style = {styles.loginBox}
                    placeholder = "abc@example.com"
                    keyboardType = "email-address"
                    onChangeText={(text)=>{
                       this.setState({
                           emailId : text
                       }) 
                    }}/>
                    <TextInput
                    style = {styles.loginBox}
                    placeholder = "Enter Your Password"
                    secureTextEntry = {true}
                    onChangeText={(text)=>{
                           this.setState({
                               password : text
                           }) 
                    }}/>
                    <TouchableOpacity
                        style = {[styles.button,{marginBottom : 20, marginTop : 20}]}
                        onPress = {()=>{
                            this.userLogin(this.state.emailId,this.state.password)
                        }}>
                          <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style = {[styles.button,{marginBottom : 20, marginTop : 20}]}
                        onPress = {()=>{
                            this.userSignUp(this.state.emailId,this.state.password)
                        }}>
                          <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'pink'
    },
    welcomeText : {
        fontWeight : '300',  
          fontSize : 65,
          paddingBottom : 30,
          color : 'aff3d00'
    },
    loginBox : {
        width : 300,
        height : 40,
        borderBottomWidth : 1.5,
        borderColor : 'ff8a65',
        fontSize : 20,
        margin : 10,
        paddingLeft : 10        
    },
    button : {
        width : 300,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 25,
        backgroundColor : '#ff9800',
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 8
        },
        shadowOpacity : 0.30,
        shadowRadius : 10.32,
        elevation : 16
    },
    buttonText : {
        color : '#ffFF',
        fontWeight : '200',
        fontSize : 20,
    },
    profile : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonContainer : {
        flex : 1,
        alignItems : 'center'
    }
})