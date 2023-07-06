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


	button: {//submit button for the overall form
		width: 300,
		height: 50,        
		borderWidth: 1,
		borderRadius: 8,
		marginHorizontal: 10,
		marginVertical: 20,
		borderColor: '#2c94c4',
		backgroundColor: '#5ccbff',
		alignSelf: 'center',
	},

	buttonText: {//text on the submit button for the overall form
		fontSize: 28,
		padding: 4,
		color: '#f1f1f1',
		textAlign: 'center',
		alignSelf: 'center',
	},

	buttonToggle: {//Used for styling Toggle Button
		width: 250,
		alignSelf: 'center',
		alignItems: 'center',
	},

	checkbox: {
		backgroundColor: "pink",
		alignSelf: "center",
	},    
	checkboxChecked: {
		backgroundColor: '#0044ff',
		borderColor: '#fd0000',
	},

	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	checkboxUnchecked: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: 'coral',
		backgroundColor: 'transparent',
	},

	container2: {
		width: 250,
		height: 50,        
		borderWidth: 1,
		borderRadius: 8,
		padding: 2,        
		borderColor: '#c0c0c0',
		backgroundColor: '#ffffff',
		alignSelf: 'center',
		alignItems: 'center',
	},

	containerCheckbox: {
		marginBottom: 20,
		backgroundColor: "pink",    
		flexDirection: "row",
	},

	containerCheckbox2: {
		width: 250,
		height: 50,  
		flex: 1,
		borderRadius: 8,        
		borderWidth: 1,
		padding: 2,   
		borderColor: '#c0c0c0',
		backgroundColor: '#ffffff',
		alignItems: "center",
		justifyContent: "center",
		alignSelf: 'center',
	},

	containerComponents: {// Container that holds all the inputs
		flex: 1,
		// width: "100%",
		borderRadius: 8,
		margin: 20,
		padding: 20,        
		flex: 1,
		backgroundColor: '#f1f1f1',
		alignSelf: 'center',
	},

	containerField: { //Container for all compiled components on the home app page
		flex: 1,
		// width: "99%",
		borderWidth: 0.5,
		borderRadius: 8,    
		borderColor: '#c0c0c0',
		backgroundColor: '#dbdbdb',
		// alignSelf: 'center',
		// alignContent: 'center',
		// alignItems: 'center',
		// justifyContents: 'center',
	},

	containerForInputs: { //Styling for all input containers
		padding: 2,
		marginVertical: 2,
		alignSelf: 'center',
		alignContent: 'center',
		alignItems: 'center',
		justifyContents: 'center',
	},

	containerMainApp: { //Container for the whole background of the app
		flex: 1,
		backgroundColor: '#f1f1f1',
		marginTop: 13,
		marginBottom: 26,
		marginHorizontal: 26,
	},

	containerMultiSelect: { //Used in MultiSelect Dropdown
		width: 250,
		borderWidth:1,
		borderRadius: 8,
		borderColor: '#c0c0c0',
		backgroundColor: '#dbdbdb',            
		alignSelf: 'center',
		alignItems: 'center',
	},

	dropdown: { //General styling for dropdowns
		width: 250,
		height: 50,        
		borderRadius: 8,        
		borderWidth: 1,
		padding: 2,        
		backgroundColor: '#ffffff',
		borderColor: '#c0c0c0',
		alignSelf: 'center',
		alignItems: 'center',
	},

	dropdownComponents: {//The style of the text area and icon area in the dropbox
		width: 250,
		height: 50,       
		paddingHorizontal: 8,
	},

	dropdownLabel: { //DropdownWithSearch
		top: -11,
		zIndex: 999,
		paddingHorizontal: 1,
		fontSize: 14,        
		backgroundColor: '#ffffff',
		position: 'absolute',
		justifyContents: 'absolute',
	},

	dropdownMultiSelect: {//Used in MultiSelect Dropdown
		width: 248,
		height: 49,
		padding: 2,      
		backgroundColor: '#ffffff',
		borderWidth:1,
		borderRadius: 8,
		borderColor: 'transparent',
		padding: 12,
		alignSelf: 'center',
		alignItems: 'center',
	},

	dropdownSelectImage: { //Used in the Dropdown with Images
		width: 250,
		height: 50,        
		borderWidth: 1,
		borderRadius: 8,        
		padding: 2,
		borderColor: '#c0c0c0',
		backgroundColor: '#ffffff',
		alignSelf: 'center',
		alignItems: 'center',
	},

	errorText: { 
		fontSize: 12,
		color: '#FF0D10',
	},

	Header: { //Text of Header on main App page
		padding: 0,
		fontSize: 48,
		color: '#e20808ff',
		textDecorationLine: 'underline',        
		alignSelf: 'center',
		fontFamily: 'calibri',
	},

	HeaderSmall: { //Smaller header 
		padding: 10,
		fontSize: 30,
		color: '#e20808ff',
		textDecorationLine: 'underline',        
		alignSelf: 'center',
		fontFamily: 'calibri',
	},

	icon: {//margin for icons in inputs. Used in MultiSelect Dropdown
		padding: 5,

	},

	iconStyle: { //style for any dropdowns in the input areas. //Used in MultiSelect Dropdown
		width: 50,
		height: 50,
	},

	imageStyleDropdownImage: { //style of the images in the image dropdown
		width: 80,
		height: 80,
		borderRadius: 90,
	},

	inputSearchStyle: {//Used in MultiSelect Dropdown
		height: 40,
		fontSize: 16,
		borderColor: '#c0c0c0',
	},

	item: {//Used in MultiSelect Dropdown
		padding: 17,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		},

	label: {
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,        
		position: 'absolute',
		backgroundColor: 'white',
	},

	label2: {
		margin: 8,
	},

	multiContainer: {
		height: 50,
		backgroundColor: 'white',
		borderRadius: 12,
		padding: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},

	navigator: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	selectedStyle: {//Used in MultiSelect Dropdown
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		borderRadius: 14,
		backgroundColor: '#f1f1f1',
		shadowColor: '#000',
		marginTop: 8,
		marginRight: 12,
		paddingHorizontal: 12,
		paddingVertical: 8,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},

	textInput: { //Stylings for any inputs where you type in text
		width: 250,
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		textAlign: 'center',
		backgroundColor: '#ffffff',
		borderColor: '#c0c0c0',
		padding: 2,
		fontSize: 16,
	},

	textInputContainer: { //Container for Text Inputs
		borderColor: '#c0c0c0',
		alignSelf: 'center',
		alignContent: 'center',
		alignItems: 'center',
		justifyContents: 'center',
		flexDirection:'column',
	},

	textItem: {
		flex: 1,
		fontSize: 16,
	},

	textMultiSelect: {//Used in MultiSelect Dropdown
		marginRight: 5,
		fontSize: 16,  
	},

	textPlaceholderStyle: { //placeholder text in the all inputs
		fontSize: 16,
		alignItems: 'center',
		textAlign: 'center',
		verticalAlign: 'center',
	},

	textStyleImageDropdown: { //used in Image drop down text by pictures
		fontSize: 20,
		marginLeft: 20,
	},

	textSelectedStyle: {//Used in MultiSelect Dropdown
		marginRight: 5,
		fontSize: 16,
		},

});