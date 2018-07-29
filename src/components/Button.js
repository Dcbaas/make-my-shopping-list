import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    return (
       <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={() => console.log(this)}      
       >
           <Text style={styles.textStyle}>
               Click Me
           </Text>
       </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#12005e',
        borderRadius: 100,
        padding: 10,
        alignSelf: 'stretch'
    },
    textStyle: {
        color: '#ffffff'
    }
};

export { Button };
