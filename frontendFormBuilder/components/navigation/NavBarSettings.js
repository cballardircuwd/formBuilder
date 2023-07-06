
    import React from 'react';
    import { View, } from 'react-native';
    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
    import FormBehaviorAndSettings from '../FormBehaviorAndSettings';
    import GeneralFormSettings from '../GeneralFormSettings';
    import Analytics from '../Analytics';


    const Tab = createMaterialTopTabNavigator();

    const NavBarSettings = () => {
        return (
            <View style={{ paddingTop: 20 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Form Behavior & Settings" component={FormBehaviorAndSettings} />
                    <Tab.Screen name="General Form Settings" component={GeneralFormSettings} />
                    <Tab.Screen name="Analytics" component={Analytics} />
                </Tab.Navigator>
            </View>
        );
    };

    export default NavBarSettings;