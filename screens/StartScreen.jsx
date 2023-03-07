import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

// create a component
const StartScreen = ({onConfirmedNumber}) => {

    const [userInput,setUserInput] = useState("")

    function resetHandler(input){
      setUserInput("")
    }
     function confirmHandler(){
       const chodenNumber = parseInt(userInput)
       if(isNaN(chodenNumber) || chodenNumber<=0 || chodenNumber > 99){
        Alert.alert("Invalid Input!" ,"The input should be a number between 0 to 99 ",
        [{text:"Okay",style:"destructive" , onPress: resetHandler }])
        return
       } 
       onConfirmedNumber(chodenNumber)
    }

    function inputHandler (input){
       setUserInput(input)
    }
    return (
        <View>
            <Text style={styles.title}>Gues My Number</Text>
        <View style={styles.container}>
            <Text style={styles.instruction}>Enter a Number</Text>
            <TextInput style={styles.input}
             maxLength={2}
             keyboardType="number-pad"
             autoCapitalize='none'
             autoCorrect={false}
             value={userInput}
             onChangeText={inputHandler}
             
             />
             
             <View style={styles.btnContainer} >
                
                <View style={styles.btn} >
                    <CustomButton presHandler={confirmHandler}>Confitm</CustomButton>
                </View>
                <View style={styles.btn} >
                    <CustomButton presHandler={resetHandler}>Reset</CustomButton>
                </View>

             </View>
        </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#6AAAB3",
        marginTop:100,
        padding:8,
        borderRadius:6,
        marginHorizontal:5,
        gap:16,
        opacity: 0.9,
    },
    input:{
       height:50,
       textAlign:"center",
       width:50,
       fontSize:28,
       borderBottomColor: "#ddb52f",
       borderBottomWidth: 2,
       color:"#EDE9C5",
       marginVertical:8,
       fontWeight:"bold"

    },
    btnContainer:{
      display:"flex",
      flexDirection:"row",
      gap:8,
      marginBottom:20
    },
    btn:{
        flex:1
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
    instruction:{
     color:"white",
     fontSize:24,
      fontWeight:"bold",
      textAlign:"center",
    },
});

export default StartScreen;
