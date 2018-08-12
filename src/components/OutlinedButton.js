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
 * The OutlinedButton facilitates various actions within the Application. It is lightweight with
 * only its style specified while the action and the text inside must be spcified. This component 
 * is identical to the Button Component apart from the style which is a white background with a 
 * light purple border. 
 * @param {object} props 
 */
const OutlinedButton = (props) => {
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
        backgroundColor: '#ffffff',
        borderRadius: 100,
        borderColor: '#7c43bd',
        padding: 7,
        alignSelf: 'stretch',
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        color: '#ffffff'
    }
};

export { OutlinedButton };