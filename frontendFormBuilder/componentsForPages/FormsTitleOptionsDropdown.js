
	import React, { useState } from 'react';
	import { View } from 'react-native';
	import { Dropdown } from 'react-native-element-dropdown';
	import { Ionicons } from 'react-native-vector-icons';

	const MoreDropdown = ({ navigation, options, currentPageLabel }) => {
		const [isFocus, setIsFocus] = useState(false);
		const [selectedValue, setSelectedValue] = useState(null);

		const defaultItem = { label: 'Shared Form Groups', value: 'default' };

		const handleOptionSelect = (option) => {
			navigation.navigate(option.value);
			setSelectedValue(defaultItem);
		};

		return (
			<View style={styles.container}>
				<Dropdown
					style={[styles.dropdown, isFocus && styles.dropdownOpen]}
					renderRightIcon={() => (
						<Ionicons
							style={styles.icon}
							name="chevron-down-circle-outline" 
						/>
					)}
					placeholder={currentPageLabel}
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
					value={selectedValue}
					mode="default"
					dropdownPosition="auto"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</View>
		);
	};

		const styles = {

		container: {
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			minWidth: 300,
		},

		dropdown: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			width: 250,
			height: 40,
		},

		dropdownOpen: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			width: 250,
			height: 40,
			textAlign: 'left',
			borderBottomWidth: 2, 
			borderEndWidth: 1,
			borderStartWidth: 1,
			borderTopWidth: .25,
			borderRadius: 12,
			borderColor: '#636363',
		},

		dropdownText: {
			fontSize: 24,
		},

		icon: {
			color: 'black',
			fontSize: 24,
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
			fontSize: 24,
		},
	};

	export default MoreDropdown;
