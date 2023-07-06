//https://www.npmjs.com/package/yup
//https://www.positronx.io/react-native-build-validate-forms-with-formik-yup/

	import React, { Component } from 'react';
	import { Text, TextInput, Pressable  , View } from 'react-native';
	import * as yup from 'yup'
	import { Formik } from 'formik'
	import styles from '../../styles/StylesComponents';

	export default class Email extends Component {
		render() {
			const {
				name = 'email', 
				placeholder = 'Email', 
				validationMessage = 'Provide a valid email', 
				requiredMessage = 'Email is a required field', 
				style = styles.textPlaceholder,
				validationSchema = yup.object().shape({
					email: yup
						.string()
						.email(validationMessage)
						.required(requiredMessage)
				}),
				onPress = () => {}, // New prop for handling clicks
			} = this.props;

			return (
				<Pressable  onPress={onPress}> 
					<Formik
						initialValues={{ 
						email: ''
						}}
						onSubmit={values => Alert.alert(JSON.stringify(values))}
						validationSchema={validationSchema}
					>
						{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
						<View style={styles.containerComponent}>
							<View style={styles.containerTextInput}> 
								<TextInput
									value={values.email}
									style={styles.textPlaceholder}
									placeholder={placeholder}
									onChangeText={handleChange(name)}
									onBlur={() => setFieldTouched(name)}
								/>
								{touched.email && errors.email &&
								<Text style={styles.textErrorMessage}>{errors.email}</Text>
								}
							</View>
						</View>
						)}
					</Formik>
				</Pressable >
			);
		}
	}

	console.disableYellowBox = true;
