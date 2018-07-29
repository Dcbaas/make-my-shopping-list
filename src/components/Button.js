import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const Button = () => {
    return (
       <TouchableHighlight 
            style={styles.buttonStyle}
            onPress={() => console.log(this)}
            underlayColor={'#e91e63'}
       >
           <Text style={styles.textStyle}>
               Click Me
           </Text>
       </TouchableHighlight>
    );
};

const styles = {
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#12005e',
        borderRadius: 100,
        padding: 10,
    },
    textStyle: {
        color: '#ffffff'
    }
};

export { Button };
