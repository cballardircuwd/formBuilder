
	import React from 'react';
	import { View, StyleSheet,	} from 'react-native';
	import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
	import Forms from '../pages/Forms';
	import Archive from '../pages/Archive';
	import Trash from '../pages/Trash';
	import Test from '../pages/aTest';
	// import Assembled from '../components/AssembledComponents';
	// import FormView from '../pages/FormView';
	// import Share from '../pages/Share';
	// import Settings from '../pages/Settings';
	// import Templates from '../pages/Templates';

    // import Responses from '../pages/Responses';
    import Edit from '../pages/Edit';


		const Tab = createMaterialTopTabNavigator();

		const NavBarForms = () => {
		return (
			<View style={styles.container}>
			<Tab.Navigator
				screenOptions={{
					style: styles.tabBar,
					labelStyle: styles.tabLabel,
				}}
			>
                    {/* <Tab.Screen name="Responses" component={Responses} /> */}
				{/* <Tab.Screen name="Test" component={Test} /> */}
				<Tab.Screen name="Edit" component={Edit} />
				<Tab.Screen name="My Forms" component={Forms} />
				<Tab.Screen name="Archive" component={Archive} />
				<Tab.Screen name="Trash" component={Trash} />
				{/* <Tab.Screen name="Example" component={Assembled} /> */}
				{/* <Tab.Screen name="FormView" component={FormView} />
				<Tab.Screen name="Share" component={Share} />
				<Tab.Screen name="Settings" component={Settings} />
				<Tab.Screen name="Templates" component={Templates} /> */}
			</Tab.Navigator>
			</View>
		);
		};

		const styles = StyleSheet.create({
			container: {
				paddingTop: 20,
			},
			tabBar: {
				flexDirection: 'row',
				alignItems: 'center',
				paddingVertical: 1,
				minWidth: 620,
			},
			tab: {
				flex: 1,
			},
		});

		export default NavBarForms;