import React from 'react';
import { View } from 'react-native';
/**
 * The CenterPanel is an alignin panel
 * 
 * @author David Baas
 * @version 1.0 - 7/30/2018
 * @since 1.0 - 7/30/2018
 */

/**
 * The Centering Panel is a destructering Panel that aligns all of its contents to center. It can be
 * used for containing other panels that can split down further a single row.
 * 
 * @param {object} props.children The contents going inside the CenterPanel. 
 */
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
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        padding: 10

    }
};

export { CenterPanel };
