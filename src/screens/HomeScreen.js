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

    }
    render() {
        const { contentContainerStyle } = styles;

        return (
            <View style={contentContainerStyle}>
                <CenterPanel>
                    <Button>
                        Create new Meal Plan
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button>
                        Create new Recipe
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button>
                        Load a Previous Shopping List
                    </Button>
                </CenterPanel>

                <CenterPanel>
                    <Button>Placeholder Screen</Button>
                </CenterPanel>

            </View>
        );
    }
}

const navigateScreens = screen => {
    this.props.navigation.navigate(screen);
};

const styles = {
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    }
};

export { HomeScreen };
