import { createStackNavigator } from 'react-navigation';
import { HomeScreen, PlaceHolderScreen, MealScreen } from './screens';
import RecipeScreen from './screens/RecipeScreen';

const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Meal: MealScreen,
        Recipe: RecipeScreen,
        Placeholder: PlaceHolderScreen
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#4a148c',
                
            },
        }
    }
);

export default Navigator;
