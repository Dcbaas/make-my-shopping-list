import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer';
import RecipeReducer from './RecipeReducer';

export default combineReducers({
  modalState: ModalReducer,
  recipeScreenState: RecipeReducer
});
