import React from 'react';
import { View } from 'react-native';
/**
 * The OutlinedPanel is an alignin panel
 * 
 * @author David Baas
 * @version 1.0 - 8/12/2018
 * @since 1.0 - 8/12/2018
 */

/**
 * The Centering Panel is a destructering Panel that aligns all of its contents to center. It can be
 * used for containing other panels that can split down further a single row. This Outlining Panel
 * is identical to the CenterPanel.js only it has a squared border with rounded edges.
 * 
 * @param {object} props.children The contents going inside the CenterPanel. 
 */
const OutlinedPanel = ({ children }) => {
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
        borderRadius: 5,
        borderColor: '#7c43bd',
        borderWidth: 5,
        flexDirection: 'row',
        position: 'relative',
        padding: 10

    }
};

export { OutlinedPanel };
