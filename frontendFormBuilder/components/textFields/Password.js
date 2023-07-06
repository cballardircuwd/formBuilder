//https://www.npmjs.com/package/yup
//https://www.positronx.io/react-native-build-validate-forms-with-formik-yup/

import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import styles from '../../styles/styles';

	export default class Password extends Component {
		render() {
			return (
			<Formik
				initialValues={{ 
				password: '' 
				}}
				onSubmit={values => Alert.alert(JSON.stringify(values))}
				validationSchema={yup.object().shape({
				password: yup
					.string()
					.min(8, 'Password must be at least 8 characters')
					.max(20, 'Password should not exceed 20 characters.')
					.required('Password is a required field')
				})}
			>
				{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
				<View style={styles.containerForInputs}>
					<View style={styles.textInputContainer}> 
						<TextInput
							value={values.password}
							style={styles.textInput}
							placeholder="Password"
							onChangeText={handleChange('password')}
							onBlur={() => setFieldTouched('password')}
							secureTextEntry={true}
						/>
						{touched.password && errors.password &&
						<Text style={styles.errorText}>{errors.password}</Text>
						}
					</View>
					{/* <View style={styles.button}> 
						<Button
							style={styles.buttonText}
							title='Submit'
							disabled={!isValid}
							onPress={handleSubmit}
						/>
					</View> */}
				</View>
				)}
			</Formik>
			);
		}
	}

console.disableYellowBox = true;