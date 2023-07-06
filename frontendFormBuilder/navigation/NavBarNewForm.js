
    import React from 'react';
    import { View, } from 'react-native';
    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
    import NewForm from '../pages/NewForm';
    import Templates from '../pages/Templates';

    import Edit from '../pages/Edit';
    import Preview from '../pages/Preview';
    import Share from '../pages/Share';
    import Settings from '../pages/Settings';


    const Tab = createMaterialTopTabNavigator();

    const NavBarNewForm = () => {
        return (
            <View style={{ paddingTop: 20 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Create New Form" component={NewForm} />
                    <Tab.Screen name="Templates" component={Templates} />
                    <Tab.Screen name="Edit" component={Edit} />
                    <Tab.Screen name="Preview" component={Preview} />
                    <Tab.Screen name="Share" component={Share} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </View>
        );
    };

    export default NavBarNewForm;