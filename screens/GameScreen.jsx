//import liraries
import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import NumberContainer from '../components/NumberContatiner';
import {Ionicons} from "@expo/vector-icons"

let minBandary= 1
let maxBandary =  100
const GameScreen = ({userNumber,onGameover}) => {
    const [rounds, setRounds] = useState(0);

    useEffect(()=>{
        minBandary=1
        maxBandary =  100
    },[])


    function nextGuessHandler (direction){
        if((direction === "lower" && current < userNumber) || (direction === "higher" && current > userNumber)){
            Alert.alert("This is Wrong", "You know this is Wrong!" , [{text:"Sorry", style:"cancel"}])
            return
          }

        if(direction === "lower"){
            maxBandary = current
            setRounds(prev=> prev + 1)
        }else{
            minBandary = current + 1
            setRounds(prev=> prev + 1)
        }
        const newRndNum = generateRandomBetween(minBandary,maxBandary,current)
        setCurrent(newRndNum)

    }



    const generateRandomBetween = (min,max,exclude)=>{
        
        
        const rndNUM = Math.floor(Math.random() * (max-min)) + min
        if (rndNUM === exclude){
            return generateRandomBetween (min,max.exclude)
        }else{
            return rndNUM
        }
    }

    const initialNumber = generateRandomBetween(minBandary,maxBandary,userNumber)
    const [current,setCurrent] = useState(initialNumber)

    useEffect(()=>{
      if(current === userNumber){
        onGameover(rounds)
      }
    },[current,userNumber,onGameover])
    
    
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>Opponent's Guess</Text>
                <View style={styles.topContainer}  >
                    <NumberContainer userNumber = {current}/>
                    <Text style={styles.title} >Higher or Lower</Text>
                    <View style={styles.btnContainer}>

                        <CustomButton presHandler={nextGuessHandler.bind(this,"lower")}>
                            <Ionicons name={'md-remove'} size={24} />
                            </CustomButton>
                        <CustomButton presHandler ={nextGuessHandler.bind(this,"higher")}>
                            <Ionicons name={'md-add'} size={24} />
                            </CustomButton>
                    </View>
                </View>
                <View></View>
            </View>

        );
    }


// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
        
    },
    title:{
      color:"white",
      marginTop:48,
      fontSize:24,
      fontWeight:"bold",
      textAlign:"center",
      borderWidth:2,
      borderColor:"white",
      padding:8,
      marginBottom:24,
    },
    btnContainer:{
      display:"flex",
      flexDirection:"row",
      gap:16,
      marginBottom:20,
      
      
    },

    topContainer:{
        
        alignItems:"center",
        backgroundColor:"#6AAAB3",
        marginTop: 32,
        opacity:0.9,
        borderRadius:16,
        
    }

});

//make this component available to the app
export default GameScreen;
