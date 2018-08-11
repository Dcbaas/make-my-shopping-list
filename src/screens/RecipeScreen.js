import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

/**
 * The RecipeScreen is where a recipe is created to be used in a weekly meal plan
 * 
 * @author David Baas
 * @version 0.1 - 8/9/2018
 * @since 0.1 - 8/9/2018
 */


/**
 * The RecipeScreen screen renders the screen for creating recipes for use in the meal planning.
 * @class Disco is a fun thing to do.
 */
class RecipeScreen extends Component {

    render() {
        return (
            <View>
                <Text>Hello RecipeScreen</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ recipeScreenState }) => {
    const { list, modalUp } = recipeScreenState;

    return { list, modalUp };
};

export default connect(mapStateToProps)(RecipeScreen);
