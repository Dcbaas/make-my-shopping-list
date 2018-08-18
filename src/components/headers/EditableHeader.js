import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

/**
 * The EditableHeader creates a header component with an editable text input. 
 * 
 * @author David Baas
 * @version 1.0 8/17/2018
 * @since 1.0 8/17/2018
 */

 /**
  * The EditableHeader function creates a standerd header component that can have the text inside 
  * edited. Useful for headers in the recipe screen. The appearance of the header component is 
  * a royal purple with white text. All component parameters come from the file that calls this 
  * component.
  * 
  * @argument {string} placeholder The placeholder text for this header
  * @argument {function} onChangeText the function being used to update the header text value.
  * @argument {string} value The variable this input is being assigned to.
  * @returns JSX that is the EditibleHeader component.
  */
const EditableHeader = ({ placeholder, onChangeText, value }) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <TextInput
                style={textStyle}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

/**
 * The styles object has the styles for the EditableHeader. The styles set are for the view and for 
 * the text inside.
 */
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#4a148c',
        flex: 1
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 36
    }
});

export { EditableHeader };
