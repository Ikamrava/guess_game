//import liraries
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

// create a component
const GameOver = ({userNumber,roundsNumber,restartHandler}) => {
    return (
      
            <View style={styles.container} >
                <Text style={styles.title}>Game Over!</Text>
                <View style={styles.IMGcontainer}>
                    <Image style={styles.image} source={require("../images/success.png") } />
                </View>
                <View>
                    <Text style={styles.result}>
                        Your won the game in <Text style={styles.numbers}>{roundsNumber} </Text>
                         rounds Your number was:  <Text style={styles.numbers}>{userNumber}</Text>
                    </Text>
                </View>
                <CustomButton presHandler = {restartHandler}>Start Again</CustomButton>
            </View>
   
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center"
    },

    IMGcontainer: {
        borderRadius:150,
        width: 300,
        height:300,
        overflow:"hidden",
        margin:32,
        borderColor:"#6AAAB3",
        borderWidth:4
      
    },
    text:{
        color:"white"
    },

    result:{
      color:"white",
      marginTop:48,
      fontSize:24,
      fontWeight:"bold",
      textAlign:"center",
      borderWidth:2,
      borderColor:"black",
      padding:8,
      marginBottom:24,
      backgroundColor:"#BFCD09",
      borderRadius:16,
      opacity:0.9,
      padding:32
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
      width:"100%",
  
    },

    image:{
        width:"100%",
        height:"100%",
    },
    numbers:{
        fontSize:24,
      fontWeight:"bold",
      textAlign:"center",
      color:"black",
      

    }
});

//make this component available to the app
export default GameOver;
