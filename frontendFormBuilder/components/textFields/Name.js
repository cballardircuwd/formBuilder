//https://www.npmjs.com/package/yup
//https://www.positronx.io/react-native-build-validate-forms-with-formik-yup/

import React, { Component } from 'react';
import { TextInput, Text, Button, Alert, View } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import styles from '../../styles/styles';

    export default class Name extends Component {
        render() {
            return (
            <Formik
                initialValues={{ 
                name: ''
                }}
                onSubmit={values => Alert.alert(JSON.stringify(values))}
                validationSchema={yup.object().shape({
                name: yup
                    .string()
                    .required('Provide your first and last name.'),
                })}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <View style={styles.containerForInputs}>
                    <View style={styles.textInputContainer}> 
                        <TextInput
                            value={values.name}
                            style={styles.textInput}
                            placeholder="Name"
                            onChangeText={handleChange('name')}
                            onBlur={() => setFieldTouched('name')}
                        />
                        {touched.name && errors.name &&
                        <Text style={styles.errorText}>{errors.name}</Text>
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