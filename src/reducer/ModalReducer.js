import { CURRENT_INGREDIENT_NEW,
    CURRENT_INGREDIENT_UPDATE,
    CURRENT_INGREDIENT_NAME_CHANGED,
    CURRENT_INGREDIENT_AMOUNT_CHANGED, 
    CURRENT_INGREDIENT_UNITS_CHANGED } from '../actions/types';
import RecipeIngredient from '../common_objects/RecipeIngredient';
/**
 * The ModalReducer file contains all the state and state changes for the Modal in the RecipeScreen.
 * 
 * @author David Baas
 * @version 1.0 - 8/7/2018
 * @since 0.1 - 8/7/2018
 */

const INITAL_STATE = null;

/**
 * The Modal Reducers perform various actions on the modal object depending on what is done.
 * It support changing the object being worked on and updating all of the paramaters.
 * 
 * @param {object} state The current modal state. Default is INITIAL_STATE 
 * @param {object} action The action being taken.
 * @returns New State depending on the action.
 */
export default (state = INITAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        /**
         * In this case the payload is the last index of the RecipeIngredient array in the recipe 
         * screen.
         */
        case CURRENT_INGREDIENT_NEW:
            return new RecipeIngredient(payload, '', 0, '');

        /**
         * In this case the payload is the ingredient to be modified.
         * In keeping with redux a whole new object is created with those values.
         */
        case CURRENT_INGREDIENT_UPDATE: {
            const { index, name, amount, units } = payload;
            return new RecipeIngredient(index, name, amount, units);
        }

        //Payload is current ingredient and the new name.
        case CURRENT_INGREDIENT_NAME_CHANGED: {
            const { index, amount, units } = payload.ingredient;
            return new RecipeIngredient(index, payload.newName, amount, units); 
        }
        
        //Payload is the current ingredient and the new amount.
        case CURRENT_INGREDIENT_AMOUNT_CHANGED: {
            const { index, name, units } = payload.ingredient;
            return new RecipeIngredient(index, name, payload.newAmount, units); 
        }

        //Payload is the current ingredient and the new amount.
        case CURRENT_INGREDIENT_UNITS_CHANGED: {
            const { index, name, amount } = payload.ingredient;
            return new RecipeIngredient(index, name, amount, payload.newUnits); 
        }
        
        //Return nothing new.
        default: 
            return state;
    }
};

