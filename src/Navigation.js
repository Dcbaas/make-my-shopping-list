import { createStackNavigator } from 'react-navigation';
import { HomeScreen, PlaceHolderScreen, MealScreen } from './screens';

const Navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Meal: MealScreen,
        Placeholder: PlaceHolderScreen
    },
    {
        initialRouteName: 'Home'
    }
);

export default Navigator;
