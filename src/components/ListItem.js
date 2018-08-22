import React from 'react';
import { Text } from 'react-native';
import { CenterPanel } from './panels';
import { OutlinedButton } from './buttons';

/**
 * The ListItem file is a components that displays information about an item in a list.
 * @fileOverview
 * 
 * @author David Baas
 * @version 1.0 - 8/11/2018
 * @since 1.0 8/11/2018
 */


 /**
  * The ListItem Function returns a component that displays information about an item in a list.
  * This item is based on the idea that Items in a list would be part of a list of objects that 
  * hold the item state. 
  * 
  * @param {object} props.children The contents of the text for this ListItem
  * @returns JSX that is a row in a list with details on this ListItem.
  */
const ListItem = (props) => {
    return (
        <CenterPanel>
            <OutlinedButton onPress={props.onPress}>
                <Text style={textStyle}>
                    {props.children}
                </Text>
            </OutlinedButton>
        </CenterPanel>
    );
};

const textStyle = {
    fontSize: 24,
    color: '#7c43bd'
};

export { ListItem };
