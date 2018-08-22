import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../components/ListItem';
import { Button } from '../components/buttons';
import { EditableHeader } from '../components/headers/EditableHeader';

/**
 * @fileOverview
 * The RecipeScreen is where a recipe is created to be used in a weekly meal plan
 * 
 * @author David Baas
 * @version 0.5 - 8/22/2018
 * @since 0.1 - 8/9/2018
 */


/**
 * The RecipeScreen screen renders the screen for creating recipes for use in the meal planning.
 * @class
 */
class RecipeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'This is a Title',
            headerRight: 
        };
    }

    state = {
        list: []
    }
    componentWillMount() {
        const newArray = [];
        for (let i = 0; i < 50; ++i) {
            newArray.push(new TestObj(i));
        }
        newArray.push(50);
        this.setState({ list: newArray });
    }

    dummyMethod() {
        return 0;
    }

    renderIngredientItem(ingredient) {
        console.log(ingredient);
        if (ingredient.item === 50) {
            return (<Button onPress={this.dummyMethod}>Add Item</Button>);
        }
        return (
            <ListItem>{ingredient.item.text}</ListItem>
        );
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
    const { list, ingredientModal, recipeName } = recipeScreenState;

    return { list, ingredientModal, recipeName };
};

const screenStyle = {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    flex: 1
};

export default connect(mapStateToProps)(RecipeScreen);
