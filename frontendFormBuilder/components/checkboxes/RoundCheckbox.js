import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Pressable ,
    View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from '../../styles/styles';

    const App = () => {
        const [checkboxState, setCheckboxState] = React.useState(false);

        return (
            <SafeAreaView style={styles.containerForInputs}>
                <View style={styles.containerCheckbox2}>
                    <View
                        style={{
                        height: 30,
                        width: 150,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 12,
                        backgroundColor: checkboxState ? "#3465eb" : "#d86860",
                        }}
                    >
                        <Text
                        style={{ color: "#fff" }}
                        >{`Check Status: ${checkboxState.toString()}`}</Text>
                    </View>
                    <BouncyCheckbox
                        size={25}
                        style={{ marginTop: 16 }}
                        isChecked={checkboxState}
                        // disableBuilInState
                        fillColor="red"
                        unfillColor="#FFFFFF"
                        text="Custom Checkbox"
                        iconStyle={{ borderColor: "red" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                        // onPress={(isChecked) => {}}
                        onPress={() => setCheckboxState(!checkboxState)}
                    />            
                </View>
            </SafeAreaView>
        );
    };

export default App;