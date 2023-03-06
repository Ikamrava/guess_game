//import liraries
import { View, Text, StyleSheet } from 'react-native';

// create a component
const GameOver = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gameover</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
    },
    text:{
        color:"white"
    }
});

//make this component available to the app
export default GameOver;
