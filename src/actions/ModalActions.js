import { CURRENT_INGREDIENT_NEW,
     CURRENT_INGREDIENT_UPDATE,
     CURRENT_INGREDIENT_NAME_CHANGED,
     CURRENT_INGREDIENT_AMOUNT_CHANGED, 
     CURRENT_INGREDIENT_UNITS_CHANGED } from './types';

/**
 * The ModalActions file has all the action creators for the Modal in the Recipe Screen.
 * 
 * @author David Baas
 * @version 1.0 - 8/7/2018
 * @since 1.0 - 8/7/2018
 */

 /**
  * createNewIngredient is the action creator that tells the modal to start with a blank slate for 
  * a brand new ingredient. It sends only the action type. The reducer will create the new
  *  Ingredient.
  * 
  * @returns The action type to create a new Ingredient.
  */
export const createNewIngredient = () => {
    return {
        type: CURRENT_INGREDIENT_NEW
    };
};

/**
 * updateExistingIngrediet is the action creator that tells the modal to represent an already
 * existing ingredient that is going to be updated in the recipe being edited. 
 * 
 * @param {object} ingredient The RecipeIngredint about to be modified.
 * @returns The action type for updating an ingredient and the ingredient that will be modified.
 */
export const updateExistingIngredient = (ingredient) => {
    return {
        type: CURRENT_INGREDIENT_UPDATE,
        payload: ingredient
    };
};

/**
 * changeIngredientName sends a message to the modal state that the name component of the
 * RecipeIngredient being created/updated has been changed. With this update comes the new name as
 * part of the Redux payload and the current RecipeIngredient being created/updated.
 * 
 * @param {object} ingredient The current RecipeIngredient being created/updated.
 * @param {string} name The updated name for the current RecipeIngredient.
 * @returns The action type for updating the ingredinet name, the current ingredinet, and the new 
 * name.
 */
export const changeIngredientName = (ingredient, name) => {
    return {
        type: CURRENT_INGREDIENT_NAME_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newName: name
        }
    };
};

/**
 * changeIngredientAmount sends a message to the modal state that the amount component of the 
 * RecipeIngredient being created/updated has been changed. As with the previous function, comes
 * the current ingredient object and the new amount.
 * 
 * @param {object} ingredient The current RecipeIngredient being created/updated.
 * @param {number} amount The updated amount for the current RecipeIngredient.
 * @returns The action type for updating the ingredient amount, the current ingredient, and the new 
 * amount.
 */
export const changeIngredientAmount = (ingredient, amount) => {
    return {
        type: CURRENT_INGREDIENT_AMOUNT_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newAmount: amount
        }
    };
};

/**
 * changeIngredientUnits sends a message to the modal state that the units component of the 
 * RecipeIngredient being created/updated has been changed. As with the previous functions, comes
 * the current ingredient object and the new units.
 * 
 * @param {object} ingredient The current RecipeIngredient being created/updated.
 * @param {string} units The updated units for the current RecipeIngredient.
 * @returns The action type for updating the ingredient amount, the current ingredient, and the new 
 * units.
 */
export const changeIngredientUnits = (ingredient, units) => {
    return {
        type: CURRENT_INGREDIENT_UNITS_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newUnits: units
        }
    };
};
