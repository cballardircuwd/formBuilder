import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import styles from '../../styles/styles';



const TextField = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
    <View style={styles.containerForInputs}>
        <View style={styles.textInputContainer}> 
                <TextInput
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    style={styles.textInput}
                    placeholder="Text Placeholder"
                />
        </View>
    </View>
    )
}

export default TextField;

