//https://github.com/itzpradip/RNDependentDropdown

import React, {useEffect, useState} from 'react';
import {
	Alert,
	StatusBar,
	Text,
	Pressable ,
	View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import {BASE_URL, API_KEY} from '@env';
import styles from '../../styles/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


	const App = () => {
		const [countryData, setCountryData] = useState([]);
		const [stateData, setStateData] = useState([]);
		const [cityData, setCityData] = useState([]);
		const [country, setCountry] = useState(null);
		const [state, setState] = useState(null);
		const [city, setCity] = useState(null);
		const [countryName, setCountryName] = useState(null);
		const [stateName, setStateName] = useState(null);
		const [cityName, setCityName] = useState(null);
		const [isFocus, setIsFocus] = useState(false);

		useEffect(() => {
			var config = {
			method: 'get',
			url: `${BASE_URL}/countries`,
			headers: {
				'X-CSCAPI-KEY': API_KEY,
			},
			};

			axios(config)
			.then(response => {
				// console.log(JSON.stringify(response.data));
				var count = Object.keys(response.data).length;
				let countryArray = [];
				for (var i = 0; i < count; i++) {
				countryArray.push({
					value: response.data[i].iso2,
					label: response.data[i].name,
				});
				}
				setCountryData(countryArray);
			})
			.catch(error => {
				console.log(error);
			});
		}, []);

		const handleState = countryCode => {
			var config = {
			method: 'get',
			url: `${BASE_URL}/countries/${countryCode}/states`,
			headers: {
				'X-CSCAPI-KEY': API_KEY,
			},
			};

			axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				var count = Object.keys(response.data).length;
				let stateArray = [];
				for (var i = 0; i < count; i++) {
				stateArray.push({
					value: response.data[i].iso2,
					label: response.data[i].name,
				});
				}
				setStateData(stateArray);
			})
			.catch(function (error) {
				console.log(error);
			});
		};

		const handleCity = (countryCode, stateCode) => {
			var config = {
			method: 'get',
			url: `${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
			headers: {
				'X-CSCAPI-KEY': API_KEY,
			},
			};

			axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				var count = Object.keys(response.data).length;
				let cityArray = [];
				for (var i = 0; i < count; i++) {
				cityArray.push({
					value: response.data[i].id,
					label: response.data[i].name,
				});
				}
				setCityData(cityArray);
			})
			.catch(function (error) {
				console.log(error);
			});
		};

		return (
			<View>
			<StatusBar barStyle="light-content" />
			<Text style={styles.HeaderSmall}> Select your Country</Text>
			<View>
				<Dropdown
				style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
				placeholderStyle={styles.textPlaceholderStyle}
				selectedTextStyle={styles.textSelectedStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={countryData}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? 'Select country ' : '...'}
				searchPlaceholder="Search..."
				value={country}
				renderRightIcon={() => (
					<FontAwesome5
					style={styles.icon}
					color="#3a3939"
					name='globe-americas'
					size={20}
					/>
				)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={item => {
					setCountry(item.value);
					handleState(item.value);
					setCountryName(item.dropdownLabel);
					setIsFocus(false);
				}}
				/>
				<View style={{marginVertical: 4}}></View> 
				<Dropdown
				style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
				placeholderStyle={styles.textPlaceholderStyle}
				selectedTextStyle={styles.textSelectedStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={stateData}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? 'Select state ' : '...'}
				searchPlaceholder="Search..."
				value={state}
				renderRightIcon={() => (
					<FontAwesome5
					style={styles.icon}
					color="#3a3939"
					name='globe-africa'
					size={20}
					/>
				)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={item => {
					setState(item.value);
					handleCity(country, item.value);
					setStateName(item.dropdownLabel);
					setIsFocus(false);
				}}
				/>
				<View style={{marginVertical: 4}}></View> 
				<Dropdown
				style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
				placeholderStyle={styles.textPlaceholderStyle}
				selectedTextStyle={styles.textSelectedStyle}
				inputSearchStyle={styles.inputSearchStyle}
				iconStyle={styles.iconStyle}
				data={cityData}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocus ? 'Select city ' : '...'}
				searchPlaceholder="Search..."
				value={city}
				renderRightIcon={() => (
					<FontAwesome5
					style={styles.icon}
					color="#3a3939"
					name='globe-asia'
					size={20}
					/>
				)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				onChange={item => {
					setCity(item.value);
					setCityName(item.dropdownLabel);
					setIsFocus(false);
				}}
				/>
				<View style={{marginVertical: 2}}></View> 

			</View>
			</View>
		);
	};

export default App;

