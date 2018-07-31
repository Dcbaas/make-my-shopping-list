import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from '../components';
import { CenterPanel } from '../components/commonPanels';
/**
 * The Home Screen in the main menu of the Application.
 * 
 * @author David Baas
 * @version 0.6 - 7/31/2018
 * @since 0.5 - 7/30/2018
 */

/**
 * The HomeScreen is the main menu of the Application. It is the portal into which the user will 
 * go to other section of the Application. The HomeScreen consist of a Title and 4 Buttons to 
 * navigate the user around
 */
class HomeScreen extends Component {

    /**
     * Navigates to the selected screen using react-navigation
     * 
     * @param {string} screen The screen being navigated to.
     */
    navigateScreens(screen) {
        this.props.navigation.navigate(screen);
    }

    /**
     * Renders the HomeScreen on the device.
     * 
     * @returns JSX that is the HomeScreen.
     */
    render() {
        const { contentContainerStyle } = styles;

        return (
            <View style={contentContainerStyle}>
                <CenterPanel>
                    <Button onPress={this.navigateScreens.bind(this, 'Meal')}>
                        Create new Meal Plan
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button onPress={this.navigateScreens.bind(this, 'Recipe')}>
                        Create new Recipe
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button onPress={this.navigateScreens.bind(this, 'Placeholder')}>
                        Load a Previous Shopping List
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button onPress={this.navigateScreens.bind(this, 'Placeholder')}>
                        Placeholder Screen
                    </Button>
                </CenterPanel>

            </View>
        );
    }
}

const styles = {
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    }
};

export { HomeScreen };
