
	import React, { useEffect, useState } from 'react';
	import { View, StyleSheet, Pressable  } from 'react-native';
	import {Dropdown} from 'react-native-element-dropdown';
	import { Text } from 'react-native-paper';
	import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

	const SortBy = ({ direction, data, onSort, fields, fieldNames, sortConfig, setSortConfig }) => {

		const handleSort = (field, direction) => {
			const sortedData = [...data].sort((a, b) => {
				let aValue = a[field];
				let bValue = b[field];

				if (aValue !== "" && !isNaN(aValue) && bValue !== "" && !isNaN(bValue)) {
					aValue = Number(aValue);
					bValue = Number(bValue);
				} else if (Date.parse(aValue) && Date.parse(bValue)) {
					aValue = new Date(aValue);
					bValue = new Date(bValue);
				}

				if (aValue < bValue) {
					return direction === 'asc' ? -1 : 1;
				} else if (aValue > bValue) {
					return direction === 'asc' ? 1 : -1;
				} else {
					return 0;
				}
			});
			onSort(sortedData);
		};

		useEffect(() => {
			handleSort(sortConfig.field, sortConfig.direction);
		}, [sortConfig.field, sortConfig.direction]);

		const toggleDirection = () => {
			setSortConfig(prevSortConfig => {
				const newDirection = prevSortConfig.direction === 'asc' ? 'desc' : 'asc';
				return {
					...prevSortConfig,
					direction: newDirection
				};
			});
		};

		const directionIcon = item => {
			return (
				<View>
					<Pressable  
						style={direction === 'asc' ? styles.sortButtonAsc : styles.sortButtonDec} 
						onPress={toggleDirection}
					>
						<MaterialCommunityIcons
							name={direction === 'asc' ? 'sort-ascending' : 'sort-descending'}
							style={direction === 'asc' ? styles.ascIcon : styles.desIcon}
						/>
					</Pressable >
				</View>
			);
		};

		const [value, setValue] = useState(null);
		const [isFocus, setIsFocus] = useState(false);

		const SelectedLabel = () => {
			if (value !== null) {
				return (
					<Pressable  
						onPress={() => {
							setValue(null);
							setSortConfig({ field: 'id', direction: 'asc' });
						}}
					>
						<Text style={[value && !isFocus && styles.label, value && isFocus && styles.labelFocused]}>
							Sort By
						</Text>
					</Pressable >
				);
			}
			return null;
		};

		return (
			<View style={styles.sortContainer}>
				{SelectedLabel()}
				<Dropdown
					style={[styles.sortByText, isFocus && styles.sortByTextWhenDropped]}
					renderRightIcon={directionIcon}
					placeholder={!value ? 'Sort By' : value}
					placeholderStyle={styles.placeholderText}
					selectedTextStyle={styles.placeholderText}
					itemTextStyle={styles.dropdownText}
					data={fields.map((field) => ({
						label: fieldNames[field],
						value: field,
					}))}
					labelField="label"
					valueField="value"
					onChange={(item) => {
						setValue(item.value);
						setSortConfig((prevSortConfig) => ({
							...prevSortConfig,
							field: item.value,
							direction: "asc",
						}));
					}}
					value={value}
					mode="default"
					dropdownPosition="auto"
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
				/>
			</View>
		);
	};

	const styles = StyleSheet.create({

		ascIcon: {
			color: '#1616b3',
			fontSize: 30,
			paddingLeft: 10,
			justifyContent: 'flex-end',
		},

		desIcon: {
			color: '#b31616',
			fontSize: 30,
			paddingLeft: 10,
			justifyContent: 'flex-end',
		},

		dropdownText: {
			textAlign: 'left',
			paddingLeft: 10,
			fontSize: 20,
			marginLeft: 10,
		},

		label: {
			alignItems: 'center',
			alignSelf: 'center',
			fontSize: 12,
			textDecorationLine: 'underline',
		},

		labelFocused: {
			alignItems: 'center',
			alignSelf: 'center',
			fontSize: 12,
			textDecorationLine: 'underline',
			color: '#777777',
		},

		placeholderText: {
			textAlign: 'center',
			fontSize: 24,
		},

		sortContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			paddingRight: 5,
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190,
		},

		sortByText: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			width: 190,
			minWidth: 80,
			maxWidth: 190,
			minHeight: 40,
		},

		sortByTextWhenDropped: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190,
			height: 40,
			textAlign: 'left',
			borderBottomWidth: 2, 
			borderEndWidth: 1,
			borderStartWidth: 1,
			borderTopWidth: .25,
			borderRadius: 12,
			borderColor: '#636363',
		},

	});

	export default SortBy;
