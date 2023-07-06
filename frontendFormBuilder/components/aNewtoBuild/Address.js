import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import styles from '../../styles/styles';


const Address = () => {
    const [componentName, setComponentName] = useState("");

    return (
    <View style={styles.containerForInputs}>
        <View style={styles.textInputContainer}> 
                <TextInput
                    onChangeText={(text) => setComponentName(text)}
                    value={componentName}
                    style={styles.textInput}
                    placeholder="Address"
                />
        </View>
    </View>
    )
}

export default Address;