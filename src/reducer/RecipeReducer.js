import { ARRAY_NEW_ITEM, ARRAY_UPDATE_ITEM, ARRAY_REMOVE_ITEM } from '../actions/types';

/**
 * The RecipeReducer holds the state for the Recipe Screen.
 * 
 * @author David Baas
 * @version 0.0 8/7/2018
 * @since 0.0 8/7/2018
 **/

const INITAL_STATE = {
    list: [],
    modalUp: false
};

export default (state = INITAL_STATE, action) => {
    const { type, payload } = action;
    const { list, modalUp } = state;
    let newArray;

    switch (type) {
        case ARRAY_NEW_ITEM: {
            newArray = [...list, payload.ingredient];
            return { ...state, list: newArray };
        }

        case ARRAY_UPDATE_ITEM: {
            newArray = [...list.slice(0, payload.ingredient.index), payload.ingredient,
            ...list.slice(payload.index.index)];
            return { ...state, list: newArray };
        }

        case ARRAY_REMOVE_ITEM: {
            newArray = [...list.slice(0, payload.ingredient.index),
                 ...list.slice(payload.index.index)];
            return { ...state, list: newArray };
        }

        default:
            return state;
    }
};
