//https://www.npmjs.com/package/react-native-toggle-button

import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from '../../styles/styles';
import ToggleButton from "react-native-toggle-button";


	const App = () => {
		function toggled() {
			onChange(!toggled);
		}

		const [toggleState, setToggleState] = React.useState(false);


		return (
			<View style={styles.containerForInputs}>
				<View style={styles.buttonToggle}>
					<ToggleButton
						inial
						style={{
							borderRadius: 8,
							padding: 0,
							width: 250,
							height: 50,
							color: 'white',
							fontSize: 20,
							justifyContent: "center",
							backgroundColor: toggleState ? "#5ccbff" : "#d86860",
							}}                        
						primaryText="On"
						activeTextStyle={{
							color: '#ffffff',
							fontSize: 20,
							textAlign: 'center',
						}}
						secondaryText="Off"
						inactiveTextStyle={{
							color: '#888888',
							fontSize: 20,
							textAlign: 'center',
						}}
						activeButtonStyle={{
							backgroundColor: '#16668b',
							borderColor: '#11465f',
							borderRadius: 8,
							width: 250,
							height: 50,
							color: '#ffffff',
							fontSize: 20,
							textAlign: 'center',
							alignContent: 'center',
							alignItems: 'center',
							justifyContents: 'center',
						}}
						// inactiveButtonStyle={{
						//     width: 250,
						//     height: 50,        
						//     borderRadius: 15,
						//     fontSize: 20,
						//     backgroundColor: '#8b1616',
						//     borderColor: '#570e0e',
						//     color: '#ffffff',
						//     textAlign: 'center',
						//     alignContent: 'center',
						//     alignItems: 'center',
						//     justifyContents: 'center',
						// }}
						// onPress={(isToggled: boolean) => {
						//     console.log(isToggled);
						// }}
					/>
				</View>
			</View>
		);
	};

export default App;