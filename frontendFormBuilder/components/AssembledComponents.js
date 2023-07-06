import React, { useState } from "react";
import { View, SafeAreaView, Text, TouchableHighlight } from "react-native";
import styles from '../styles/styles';
import DropdownWithSearch from './dropdowns/DropdownWithSearch';
import MultiSelectComponent from "./dropdowns/MultiSelectDropdown";
import TextField from "./textFields/TextField";
import Email from "./textFields/Email";
import Name from "./textFields/Name";
import Password from "./textFields/Password";

import SelectWithImage from "./dropdowns/SelectWithImage";
import DependentDropdown from "./dropdowns/DependentDropdown.js";
import Checkbox from "./checkboxes/Checkbox";
import Checkbox2 from "./checkboxes/Checkbox2";
import RoundCheckbox from "./checkboxes/RoundCheckbox";
import ToggleButton1 from "./toggles/ToggleButton1";

import Playground from "./Playground";
// import Playground2 from "./components/Playground2";

	const FormTest = () => {

		const handleSubmit = () => {
			console.log(Checkbox2);
		}

		return (
		<SafeAreaView>
						{/* <Playground2/> */}

				{/* <Playground/> */}
				<DropdownWithSearch/>
				<RoundCheckbox/>
				<Checkbox2/>
				<Checkbox/>
				<MultiSelectComponent/>  
				<SelectWithImage/>
				<ToggleButton1/>
				<DependentDropdown/>
				<TextField/>
				<Name/>         
				<Email/>            
				<Password/>  

			<View>
				<TouchableHighlight onPress={handleSubmit} style={styles.button}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
		)
	}

export default FormTest;