	
	import { StyleSheet } from 'react-native';

	export default StyleSheet.create({
		// Color Pallet {
		// 	Text:
		// 		Text Input BackgroundColor: '#ffffff',
		// 		Text Input Border: '#c0c0c0',
		// 		Placeholder Text Color: '#000000',
		// 		Error Text Color: '#FF0D10',
		// },

		containerComponent: { //Styling for all input containers
		//Formerly containerForInputs
			width: '100%',
			padding: 2,
			marginVertical: 2,
			alignSelf: 'center',
		},

		containerTextInput: { //Container for Text Inputs
		//Formerly textInputContainer
			backgroundColor: 'transparent',
			flexDirection:'column',
			borderColor: '#c0c0c0',
			alignSelf: 'center',
		},

		textErrorMessage: { //Styling for error message text
		//Formerly errorText
			fontSize: 12,
			color: '#FF0D10',
			textAlign: 'center',
			backgroundColor:  'transparent',
			borderWidth: 0,
			borderRadius: 8,
			borderColor: '#c0c0c0',
			padding: 5,
			flex: 1,
		},

		textPlaceholder: { //Styling for component placeholder text box
			backgroundColor: '#ffffff',
			fontSize: 18,
			color: '#000000',
			textAlign: 'center',
			width: 250,
			height: 50,
			borderWidth: 1,
			borderRadius: 8,
			borderColor: '#c0c0c0',
			padding: 5,
		},

	});

	// 	layout: {
	// 		alignContent: 'center',
	// 		alignItems: 'center',
	// 		alignSelf: 'center',
	// 		justifyContent: "center",

	// 		aspectRatio: 135 / 76,

	// 		borderWidth: 2,
	// 		borderTopWidth: 2,
	// 		borderBottomWidth: 2,
	// 		borderLeftWidth: 2,
	// 		borderRightWidth: 2,

	// 		gap: 2,
	// 		columnGap: 2,
	// 		rowGap: 2,

	// 		flex: 1,
	// 		flexDirection: 'row',
	// 		flexWrap: 'wrap',
	// 		flexGrow: 0,
	// 		flexShrink: 1,
	// 		flexBasis: 'auto',

	// 		margin: 20,
	// 		marginVertical: 20,
	// 		marginTop: 20,
	// 		marginBottom: 20,
	// 		marginHorizontal: 20,
	// 		marginLeft: 20,
	// 		marginRight: 20,
	// 		padding: 2,  
	// 		PaddingVertical: 2,
	// 		PaddingTop: 2,
	// 		PaddingBottom: 2,
	// 		paddingHorizontal: 2,
	// 		PaddingLeft: 2,
	// 		PaddingRight: 2,

	// 		position: 'absolute',
	// 		top: 0,
	// 		bottom: 0,
	// 		start: 0,
	// 		left: 0,
	// 		end: 0,
	// 		right: 0,

	// 		height: 50,
	// 		maxHeight: 50,
	// 		minHeight: 50,
	// 		width: 250,
	// 		maxWidth: 250,
	// 		minWidth: 250,
	// 		overflow: 'hidden',
	// 		zIndex: 999,
	// 	},

	// 	view: {
	// 		backgroundColor: '#ffffff',

	// 		borderColor:'#000000',
	// 		borderTopColor:'#000000',
	// 		borderBottomColor:'#000000',
	// 		borderLeftColor:'#000000',
	// 		borderRightColor:'#000000',

	// 		borderRadius: 15,
	// 		borderTopLeftRadius: 15,
	// 		borderTopRightRadius: 15,
	// 		borderBottomLeftRadius: 15,
	// 		borderBottomRightRadius: 15,

	// 		borderStyle: 'solid',
	// 		borderTopStyle: 'solid',
	// 		borderBottomStyle: 'solid',
	// 		borderRightStyle: 'solid',
	// 		borderLeftStyle: 'solid',

	// 		borderWidth: 2,
	// 		borderTopWidth: 2,
	// 		borderBottomWidth: 2,
	// 		borderLeftWidth: 2,
	// 		borderRightWidth: 2,

	// 		elevation: 0,
	// 		opacity: 0.9,
	// 	},

	// 	text: { 
	// 		color: '#999999',
	// 		fontFamily: 'calibri',
	// 		fontSize: 12,
	// 		fontStyle: 'italic',
	// 		fontWeight: 'bold',
	// 		includeFontPadding: true,
	// 		fontVariant: [],
	// 		letterSpacing: 2,
	// 		lineHeight: 24,
	// 		textAlign: 'center',
	// 		verticalAlign: 'center',
	// 		textDecorationColor: 'red',
	// 		textDecorationLine: 'underline',
	// 		textDecorationStyle: 'dotted',
	// 		textShadowColor: 'blue',
	// 		textShadowRadius: 3,
	// 		textShadowOffset: { width: 2, height: 2 },
	// 		textTransform: 'uppercase',
	// 		writingDirection: 'rtl',
	// 	},

	// });