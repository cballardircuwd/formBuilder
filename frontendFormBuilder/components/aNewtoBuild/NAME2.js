import React, { useState } from "react";
import { View, TextInput, SafeAreaView, Text } from "react-native";
import styles from '../../styles/styles';


const NAME2 = () => {
    const [componentName, setComponentName] = useState("");

    return (
    <View style={styles.containerForInputs}>
        <View style={styles.textInputContainer}> 
                <TextInput
                    onChangeText={(text) => setComponentName(text)}
                    value={componentName}
                    style={styles.textInput}
                    placeholder="NAME2"
                />
        </View>
    </View>
    )
}

export default NAME2;