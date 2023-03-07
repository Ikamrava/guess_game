//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const NumberContainer = ({userNumber}) => {
    return (
        <View >
            <Text style={styles.container}>{userNumber}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
     color:"white",
      marginTop:48,
      fontSize:36,
      fontWeight:"bold",
      textAlign:"center",
      borderWidth:2,
      borderColor:"white",
      padding:16,
      borderRadius:8,
      backgroundColor:"#6AAAB3",
    },
});

//make this component available to the app
export default NumberContainer;
