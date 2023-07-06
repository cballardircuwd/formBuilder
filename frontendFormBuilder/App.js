	
	import React from 'react';
	import { Text, View, Linking  } from 'react-native';
	import styles from './styles/StylesMainApp';
	import { NavigationContainer } from '@react-navigation/native';
	import TopTabNavigator from './navigation/NavigationBar';

	function App() {
		return (
			<NavigationContainer>
				<View style={styles.ContainerApp}>
					<Text 
						style={styles.Header}
						onPress={() => Linking.openURL('https://thumbs.gfycat.com/ResponsibleSneakyIrishdraughthorse-mobile.mp4')}
					>
						Integrity Forms
					</Text>
		
					<View style={styles.ContainerMainNavigator}>
						<TopTabNavigator />
					</View>
	
					<Text 
						style={styles.Footer}
						onPress={() => Linking.openURL('https://ibb.co/CQr31Sx')}					
					>
						Created by Baker Brothers Incorporated
					</Text>
				</View>
			</NavigationContainer>
		);
	}
	
	export default App;