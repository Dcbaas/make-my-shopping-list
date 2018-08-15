import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../components/ListItem';
import { Button } from '../components/buttons';

/**
 * @fileOverview
 * The RecipeScreen is where a recipe is created to be used in a weekly meal plan
 * 
 * @author David Baas
 * @version 0.1 - 8/9/2018
 * @since 0.1 - 8/9/2018
 */


/**
 * The RecipeScreen screen renders the screen for creating recipes for use in the meal planning.
 * @class
 */
class RecipeScreen extends Component {

    state = {
        list: []
    }
    componentWillMount() {
        const newArray = [];
        for (let i = 0; i < 50; ++i) {
            newArray.push(new TestObj(i));
        }
        newArray.push(<Button onPress={this.dummyMethod}>Add Item</Button>)
        this.setState({ list: newArray });
    }

    renderIngredientItem(ingredient) {
        return (
            <ListItem>{ingredient.item.text}</ListItem>
        );
    }

    dummyMethod() {
        return 0;
    }

    render() {
        return (
            <View style={screenStyle}>
                <FlatList 
                    data={this.state.list}
                    renderItem={this.renderIngredientItem}
                    keyExtractor={ingredient => `${ingredient.index}`}
                />
            </View>
        );
    }
}
class TestObj {
    constructor(index) {
        this.text = 'this is some text';
        this.index = index;
    }
}


const mapStateToProps = ({ recipeScreenState }) => {
    const { list, modalUp } = recipeScreenState;

    return { list, modalUp };
};

const screenStyle = {
    backgroundColor: '#ffffff',
    justifyContent: 'center'
};

export default connect(mapStateToProps)(RecipeScreen);
