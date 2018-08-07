import { CURRENT_INGREDIENT_NEW,
     CURRENT_INGREDIENT_UPDATE,
     CURRENT_INGREDIENT_NAME_CHANGED,
     CURRENT_INGREDIENT_AMOUNT_CHANGED, 
     CURRENT_INGREDIENT_UNITS_CHANGED} from './types';
import RecipeIngredient from '../common_objects/RecipeIngredient';

export const createNewIngredient = index => {
    return {
        type: CURRENT_INGREDIENT_NEW,
        payload: new RecipeIngredient(index, '', 0, '')
    };
};

export const updateExistingIngredient = ingredient => {
    return {
        type: CURRENT_INGREDIENT_UPDATE,
        payload: ingredient
    };
};

export const changeIngredientName = (ingredient, name) => {
    return {
        type: CURRENT_INGREDIENT_NAME_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newName: name
        }
    };
};

export const changeIngredientAmount = (ingredient, amount) => {
    return {
        type: CURRENT_INGREDIENT_AMOUNT_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newAmount: amount
        }
    };
};

export const changeIngredientUnits = (ingredient, units) => {
    return {
        type: CURRENT_INGREDIENT_UNITS_CHANGED,
        payload: {
            currentIngredient: ingredient,
            newUnits: units
        }
    };
};
