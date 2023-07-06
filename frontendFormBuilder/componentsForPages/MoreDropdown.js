
	import React, { useState } from 'react';
	import { View } from 'react-native';
	import { Dropdown } from 'react-native-element-dropdown';
	import { MaterialCommunityIcons } from 'react-native-vector-icons';

	const MoreDropdown = ({ navigation, options }) => {
		const [isFocus, setIsFocus] = useState(false);
		const [selectedValue, setSelectedValue] = useState(null);

		const defaultItem = { label: 'More', value: 'default' };

		const handleOptionSelect = (option) => {
			navigation.navigate(option.value);
			setSelectedValue(defaultItem);
		};


		return (
			<View style={styles.container}>
				<Dropdown
					style={[styles.dropdown, isFocus && styles.dropdownOpen]}
					renderRightIcon={() => (
						<MaterialCommunityIcons
							style={styles.icon}
							name="dots-horizontal-circle-outline" 
						/>
					)}
					placeholder={defaultItem.label}
					placeholderStyle={styles.placeholderText}
					itemTextStyle={styles.dropdownText}
					data={options}
					labelField="label"
					valueField="value"
					onChange={(item) => {
						if (item.value !== 'default') {
							handleOptionSelect(item);
						}
					}}
					value={selectedValue || 'default'}
					mode="default"
					dropdownPosition="auto"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</View>
		);
	};

		const styles = {

		button: {
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			marginLeft: 5,
			padding: 1,
		},

		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
		},

		dropdown: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190,
			height: 30,
		},

		dropdownOpen: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190,
			height: 30,
			borderColor: '#636363af',
			borderBottomWidth: 2, 
			borderEndWidth: 1,
			borderStartWidth: 1,
			borderTopWidth: .25,
			borderRadius: 12,
		},

		dropdownText: {
			padding: 0,
			fontSize: 14,
			width: 190,
		},

		icon: {
			color: 'black',
			fontSize: 18,
			fontWeight: '500',
			alignSelf: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			marginLeft: 5,
			padding: 1,
		},

		placeholderText: {
			textAlign: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			fontSize: 14,
			marginLeft: 10,			
		},
	};

	export default MoreDropdown;
