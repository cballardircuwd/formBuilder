
	import { StyleSheet } from 'react-native';

	export default StyleSheet.create({

	//Color Pallet
		// Header Color: '#e20808ff',
		// Page Background Color: '#f1f1f1',
		// Container Color: '#dbdbdb',
		// Container Border Color: '#c0c0c0',
		// Components Background Color: '#f1f1f1',
		// Button Color: '#5ccbff',
		// Button Border Color: '#2c94c4',
		// Button Text Color: '#f1f1f1',
		// Dropdown Background Color: '#ffffff',
		// Dropdown Border Color: '#c0c0c0'


		ContainerApp: { //Container for outside background of app
			flex: 1,
			backgroundColor: '#f1f1f1',
			marginTop: 13,
			// marginBottom: 26,
			marginHorizontal: 26,
		},

		ContainerMainNavigator: { //Container for main navigation at top of app
			flex: 1,
			borderWidth: 0.5,
			borderRadius: 8,    
			borderColor: '#c0c0c0',
			backgroundColor: '#f1f1f1',
		},

		Footer: { //Text of footer at bottom of app
			padding: 10,
			fontSize: 10,
			color: '#2d4cfcff',
			textDecorationLine: 'underline',        
			alignSelf: 'center',
			fontFamily: 'calibri',
			justifyContents: 'center',
			verticalAlign: 'center',
		},

		Header: { //Text of header at top of app
			padding: 0,
			fontSize: 48,
			color: '#e20808ff',
			textDecorationLine: 'underline',        
			alignSelf: 'center',
			fontFamily: 'calibri',
		},

	});