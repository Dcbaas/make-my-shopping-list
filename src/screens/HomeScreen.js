import React from 'react';
import { View } from 'react-native';
import { Button } from '../components';
import { CenterPanel } from '../components/commonPanels';

const HomeScreen = () => {
    const { contentContainerStyle } = styles;

    return (
        <View style={contentContainerStyle}>
            <CenterPanel>
                <Button />
            </CenterPanel>

            <CenterPanel>
                <Button />
            </CenterPanel>

            <CenterPanel>
                <Button />
            </CenterPanel>

            <CenterPanel>
                <Button />
            </CenterPanel>

        </View>
    );
};

const styles = {
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1

    }
};

export { HomeScreen };
