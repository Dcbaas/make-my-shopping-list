import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './screens';

const Navigator = createStackNavigator(
    {
        Home: HomeScreen
    },
);

export default Navigator;
