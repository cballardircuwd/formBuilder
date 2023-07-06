
    import React from 'react';
    import { View, } from 'react-native';
    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
    import EditResponses from '../pages/EditResponses';
    import ExportPrint from '../pages/ExportPrint';
    import Analytics from '../pages/Analytics';
    import FormView from '../pages/FormView';
    import Responses from '../pages/Responses';


    const Tab = createMaterialTopTabNavigator();


    const NavBarResponses = () => {
        return (
            <View style={{ paddingTop: 20 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Responses" component={Responses} />
                    <Tab.Screen name="Edit Responses" component={EditResponses} />
                    <Tab.Screen name="Export/Print" component={ExportPrint} />
                    <Tab.Screen name="Analytics" component={Analytics} />
                    <Tab.Screen name="FormView" component={FormView} />
                </Tab.Navigator>
            </View>
        );
    };

    export default NavBarResponses;