import { createStackNavigator } from 'react-navigation';
import { HomeScreen, PlaceHolderScreen, MealScreen, RecipeScreen } from './screens';

const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Meal: MealScreen,
        Recipe: RecipeScreen,
        Placeholder: PlaceHolderScreen
    },
    {
        initialRouteName: 'Home'
    }
);

export default Navigator;
