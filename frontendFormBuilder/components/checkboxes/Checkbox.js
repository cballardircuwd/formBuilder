import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
import { Checkbox } from 'react-native-paper';

    const App = () => {
        const [isSelected, setSelection] = useState(false);
        const [checked, setChecked] = React.useState(false);

        return (
    // https://reactnative.dev/docs/0.68/checkbox

    // https://callstack.github.io/react-native-paper/checkbox.html#uncheckedColor
            <View style={styles.containerCheckbox2}>
                <Text style={styles.textPlaceholderStyle}>
                    I have to go: {!checked ? "Pee" : "Poop"}
                </Text>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    uncheckedColor='#aaaa15'
                    color= '#66360a'
                    style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center', alignSelf: 'center'}}
                    onPress={() => {
                        setChecked(!checked);
                } }/>
            </View>
        );
    };

    const styles = StyleSheet.create({
        containerCheckbox2: {
            flex: 1,
            flexDirection: 'row',
            width: 250,
            height: 50,        
            borderWidth: 1,
            borderRadius: 8,        
            padding: 2,
            borderColor: '#c0c0c0',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
        },

        textPlaceholderStyle: { //placeholder text in the all inputs
            fontSize: 16,
            alignItems: 'center',
            textAlign: 'center',
            verticalAlign: 'center',
            margin: 'absolute'
        },

        checkboxContainer: {
            flexDirection: "row",
            marginBottom: 20,
            backgrounColor: "pink"
        },
        checkbox: {
            alignSelf: "center",
            backgrounColor: "pink"

        },
        label: {
            margin: 8,
        },
    });

export default App;