import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * The EditIconButton is a square button in the right side of the header to edit the recipe name.
 * @author David Baas
 * @version 0.9- 8/22/2018
 * @since 0.9 - 8/22/2018
 */

 /**
  * The EditIconButton is a button to be used within a header. For some reason a text input doesn't
  * work inside a react-navigation header. At the same time the recipe title in the Recipe screen 
  * needs to be inside the react-navigation header as it is a convient area for it. Sometimes this 
  * Recipe title will need to be changed. With this in mind a button on the right side of the header
  * that brings up a prompt to edit the header text seems to be the only solution.
  * 
  * @param {object} props The props being passed to this button. In this case, the fuction to use 
  * onPress.
  * @returns JSX that is the EditIconButton.
  */
const EditIconButton = (props) => {
    const { buttonStyle, imageStyle } = styles;
    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={props.onPress}
        >
            <Image source={'./assets/edit_icon.png'} style={imageStyle} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
       justifyContent: 'center',
       alignItems: 'center' 
    },
    imageStyle: {
        height: 50,
        width: 50
    }

});

export { EditIconButton };
