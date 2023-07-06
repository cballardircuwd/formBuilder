
    import React from 'react';
    import { View, Text } from 'react-native';


    const Settings = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                    Settings
                </Text>

                <Text style={{ fontSize: 16, textAlign: 'center', margin: 10 }}>
                    This is the Settings Page. 
                </Text>

                <Text style={{ fontSize: 16, textAlign: 'center', margin: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
        );
    };

    export default Settings;