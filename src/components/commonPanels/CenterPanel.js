import React from 'react';
import { View } from 'react-native';

const CenterPanel = ({ children }) => {
    const { panelStyle } = styles;

    return (
        <View style={panelStyle}>
            {children}
        </View>
    );
};

const styles = {
    panelStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export { CenterPanel };
