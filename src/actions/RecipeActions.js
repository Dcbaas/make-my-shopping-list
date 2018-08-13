import { ARRAY_NEW_ITEM, ARRAY_UPDATE_ITEM, ARRAY_REMOVE_ITEM } from './types';
import { Button } from '../components';

/**
 * RecipeActions.js handles all action creators for the Recipe Screen and Recipe Reducer.
 * 
 * @author David Baas
 * @version 1.0 8/7/2018
 * @since 0.0 8/7/2018
 */

/**
 * addArrayItem adds a new Ingredient to the ingredient array.
 * 
 * @param {object} ingredient The ingredient being added.
 * @returns The action for adding a new item and the ingredient being added.
 */
export const addArrayItem = (ingredient) => {
    return {
        type: ARRAY_NEW_ITEM,
        payload: ingredient
    };
};

/**
 * updateArrayItems takes an already existing item and updates it to what is desired by the user
 * 
 * @param {object} ingredient The updated ingredient.
 * @returns The action for updating an item and the updated item.
 */
export const updateArrayItem = (ingredient) => {
    return {
        type: ARRAY_UPDATE_ITEM,
        payload: ingredient
    };
};

/**
 * removeArrayItem takes an item in the array and removes it from the array
 * 
 * @param {number} index The index of the ingredient being removed.
 * @returns The action for removing the array and the index of the item being removed.
 */
export const removeArayItem = (index) => {
    return {
        type: ARRAY_REMOVE_ITEM,
        payload: index
    };
};
