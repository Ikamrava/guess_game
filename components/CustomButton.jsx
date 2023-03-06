import { View, Text, StyleSheet,Pressable } from 'react-native';

// create a component
const CustomButton = ({children,presHandler}) => {

    
 
    return (
        <Pressable onPress={presHandler}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#7BB4BC",
      borderRadius: 8,
      paddingVertical:8,
      paddingHorizontal:16,
      elevation:2,

    },
    buttonText:{
      color:"white",
      fontWeight:"bold",
      fontSize:20,
      textAlign:"center",

    },
});

//make this component available to the app
export default CustomButton;
