import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavigationBar() {
	const navigation = useNavigation();
	const [activeButton, setActiveButton] = useState('Forms');

	const handleButtonPress = (screenName) => {
		navigation.navigate(screenName);
		setActiveButton(screenName);
	};

	return (
		<View style={styles.containerCenter}>
			<View style={styles.containerCenter}>
				<Pressable 
					style={[
						styles.button,
						activeButton === 'NavBarForms' && styles.activeButton,
					]}
					onPress={() => handleButtonPress('Forms')}
					>
					<Text
						style={[
						styles.buttonText,
						activeButton === 'Forms' && styles.activeButtonText,
						]}
					>
						Forms
					</Text>
				</Pressable >
			</View>

			<View style={styles.containerCenter}>
				<Pressable 
					style={[
						styles.button,
						activeButton === 'NavBarNewForm' && styles.activeButton,
					]}
					onPress={() => handleButtonPress('New Form')}
					>
					<Text
						style={[
						styles.buttonText,
						activeButton === 'New Form' && styles.activeButtonText,
						]}
					>
						New Form
					</Text>
				</Pressable >
			</View>

			<View style={styles.containerCenter}>
				<Pressable 
					style={[
						styles.button,
						activeButton === 'NavBarResponses' && styles.activeButton,
					]}
					onPress={() => handleButtonPress('Responses')}
					>
					<Text
						style={[
						styles.buttonText,
						activeButton === 'Responses' && styles.activeButtonText,
						]}
					>
						Responses
					</Text>
				</Pressable >
			</View>

			<View style={styles.containerCenter}>
				<Pressable 
					style={[
						styles.button,
						activeButton === 'NavBarSettings' && styles.activeButton,
					]}
					onPress={() => handleButtonPress('Settings')}
					>
					<Text
						style={[
						styles.buttonText,
						activeButton === 'Settings' && styles.activeButtonText,
						]}
					>
						Settings
					</Text>
				</Pressable >
			</View>
		</View>
	);
	}

export default NavigationBar;


const styles = StyleSheet.create({

	activeButton: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		margin: 10,
		padding: 1,
	},

	activeButtonText: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		margin: 10,
		padding: 1,
		fontSize: 36,
		borderBottomWidth: 2.5, 
		borderBottomColor: '#007aff ',
	},

	button: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		margin: 10,
		padding: 1,
	},

	buttonText: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		margin: 10,
		padding: 1,
		fontSize: 32,
	},

	containerCenter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		padding: 1,
		height: 70,
		maxHeight: 70,
	},

});