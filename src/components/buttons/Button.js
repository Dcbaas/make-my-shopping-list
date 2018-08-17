import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * The Button facilitate action within the Application
 * 
 * @author David Baas
 * @version 1.0 - 7/30/2018
 * @since 1.0 - 7/30/2018
 */

/**
 * The Button facilitates various actions within the Application. It is lightweight with only its
 * style specified while the action and the text inside must be spcified. 
 * @param {object} props 
 */
const Button = (props) => {
    return (
       <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={props.onPress}      
       >
           <Text style={styles.textStyle}>
               {props.children}
           </Text>
       </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#12005e',
        borderRadius: 100,
        padding: 7,
        alignSelf: 'stretch',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    }
};

export { Button };
