
	import React from 'react';
	import NavBarForms from './NavBarForms';
	import NavBarNewForm from './NavBarNewForm';
	import NavBarResponses from './NavBarResponses';
	import NavBarSettings from './NavBarSettings';
	import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

	const Tab = createMaterialTopTabNavigator();

		const TopTabNavigator = () => {
			return (
				<Tab.Navigator
					screenOptions ={{
						activeTintColor: '#0e0e0e',
						inactiveTintColor: 'gray',
						labelStyle: { fontSize: 18 },
						indicatorStyle: { backgroundColor: 'red' },
						contentContainerStyle: { padding: 10, height: 50, justifyContent: 'center', alignItems: 'center' },
					}}
				>					
					<Tab.Screen name="Forms" component={NavBarForms}/>					
					<Tab.Screen name="New Form" component={NavBarNewForm} />
					<Tab.Screen name="Responses" component={NavBarResponses} />
					<Tab.Screen name="Settings" component={NavBarSettings} />
				</Tab.Navigator>
			);
		};

	export default TopTabNavigator;