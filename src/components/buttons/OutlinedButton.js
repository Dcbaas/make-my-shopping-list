import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * The Button facilitate action within the Application
 * 
 * @author David Baas
 * @version 1.0 - 8/12/2018
 * @since 1.0 - 8/12/2018
 */

/**
 * The OutlinedButton facilitates various actions within the Application. It is lightweight with
 * only its style specified while the action and the text inside must be spcified. This component 
 * is identical to the Button Component apart from the style which is a white background with a 
 * light purple border. 
 * @param {object} props The components being passed to this button
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
        borderRadius: 5,
        borderColor: '#7c43bd',
        borderWidth: 1,
        padding: 7,
        alignSelf: 'stretch',
        flex: 1,
        margin: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#7c43bd'
    }
};

export { OutlinedButton };
