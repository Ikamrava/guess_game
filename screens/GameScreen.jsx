//import liraries
import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import NumberContainer from '../components/NumberContatiner';

let minBandary= 1
let maxBandary =  100
const GameScreen = ({userNumber,onGameover}) => {


    function nextGuessHandler (direction){

        if((direction === "lower" && current < userNumber) || (direction === "higher" && current > userNumber)){

            Alert.alert("This is Wrong", "You know this is Wrong!" , [{text:"Sorry", style:"cancel"}])
            return
          }

        if(direction === "lower"){
            maxBandary = current
        }else{
            minBandary = current + 1
            
        }
        console.log(`min = ${minBandary}, max = ${maxBandary} , usernumber = ${userNumber}`)
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
        onGameover()
      }
    },[current,userNumber,onGameover])
    
    
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>Opponent's Guess</Text>
                <NumberContainer userNumber = {current}/>

                <View style={styles.topContainer}  >
                    <Text >Higher or Lower</Text>
                    <View style={styles.btnContainer}>
                        <CustomButton presHandler={nextGuessHandler.bind(this,"lower")}>-</CustomButton>
                        <CustomButton presHandler ={nextGuessHandler.bind(this,"higher")}>+</CustomButton>
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
      borderColor:"#6AAAB3",
      padding:8,
    },
    btnContainer:{
      display:"flex",
      flexDirection:"row",
      gap:16,
      marginBottom:20,
      
    },

    topContainer:{
        flex:1,
        alignItems:"center",
        
    }

});

//make this component available to the app
export default GameScreen;
