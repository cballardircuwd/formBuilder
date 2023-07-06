// https://docs.expo.dev/ui-programming/implementing-a-checkbox/#understanding-the-checkbox

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../styles/styles';

	function MyCheckbox({
		checked,
		onChange,
		buttonStyle = {},
		activeButtonStyle = {},
		inactiveButtonStyle = {},
		activeIconProps = {},
		inactiveIconProps = {},
	}) {

	function onCheckmarkPress() {
		onChange(!checked);
	}

	const iconProps = checked ? activeIconProps : inactiveIconProps;
		return (
			<Pressable
				style={[
				buttonStyle,
				checked
					? activeButtonStyle
					: inactiveButtonStyle,
				]}
				onPress={onCheckmarkPress}>
				{checked && (
				<Ionicons
					name="checkmark"
					size={24}
					color="#fd0000"
					{...iconProps}
				/>
				)}
			</Pressable>
		);
	}

	function App() {
		const [checked, onChange] = useState(false);

		return (
			<View style={styles.containerForInputs}>
			<View style={styles.containerCheckbox2}>
				<Text style={styles.textPlaceholderStyle}>I'ma Compyuda</Text>

				<View style={styles.checkboxContainer}>
				<MyCheckbox
					checked={checked}
					onChange={onChange}
					buttonStyle={styles.checkboxUnchecked}
					activeButtonStyle={styles.checkboxChecked}
				/>
				</View>
				<Text style={styles.textPlaceholderStyle}> {checked ? "Stop all the Downloading" : ''}</Text>
			</View>
			</View>
		);
	}

	export default App;

