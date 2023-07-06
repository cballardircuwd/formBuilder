import React from 'react';
import { View, TextInput, Text, Picker } from 'react-native';
import styles from '../styles'; // adjust this import path to where your styles file is located

	const DynamicForm = ({config}) => {
		return (
			<View>
			{config.map((field, i) => {
				switch (field.type) {
				case "text":
					return (
					<View key={i} style={styles.yourViewStyle}> 
						<Text style={styles.yourTextStyle}>{field.label}</Text>
						<TextInput 
							style={styles.yourInputStyle} 
							placeholder={field.placeholder} 
						/>
					</View>
					);
				case "number":
					return (
					<View key={i} style={styles.yourViewStyle}> 
						<Text style={styles.yourTextStyle}>{field.label}</Text>
						<TextInput 
							style={styles.yourInputStyle} 
							placeholder={field.placeholder}
							keyboardType='numeric' 
						/>
					</View>
					);
				// add more field types as needed
				default:
					return null;
				}
			})}
			</View>
		);
	};

export default DynamicForm;
