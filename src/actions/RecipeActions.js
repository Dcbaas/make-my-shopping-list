import { ARRAY_NEW_ITEM, ARRAY_UPDATE_ITEM, ARRAY_REMOVE_ITEM, CHANGE_RECIPE_NAME,
     TOGGLE_RECIPE_MODAL } from './types';

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

/**
 * changeRecipeName updates the name of the current recipe being edited. It is triggered when the 
 * header is changed in the Recipe screen. 
 * @param {string} name The new name for the current recipe being edited. 
 * @returns The action for changing the recipe name nad the new name.
 */
export const changeRecipeName = (name) => {
    return {
        type: CHANGE_RECIPE_NAME,
        payload: name
    };
};

/**
 * toggleRecipeModal opens/closes the modal for editing the recipe.
 * @param {boolean} toggle Enables/Disables the recipe modal.
 * @returns The action to toggle the modal and the toggle status.
 */
export const toggleRecipeModal = (toggle) => {
    return {
        type: TOGGLE_RECIPE_MODAL,
        payload: toggle
    };
};
