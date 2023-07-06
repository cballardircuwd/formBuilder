
	import { StyleSheet } from 'react-native';

	export default StyleSheet.create({

		button: {
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			margin: 10,
			padding: 1,
		},

		buttonBulkEdit: {
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center',
			margin: 1,
			padding: 1,
		},

		checkboxContainer: {
			padding: 10,
			alignSelf: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},

		columnSpacer: {
			flex: 1,
			flexShrink: 1,
			maxWidth: 40,
			minWidth: 0,
		},

		container: {
			flex: 1,
		},

		containerBottomRow: {
			flex: 1,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: 1,
			minWidth: 660,
			maxHeight: 30,
		},

		containerBulkEditOptions: {
			flex: 1,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: 1,
			minWidth: 660,
		},

		containerCenter: {
			flex: 1,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			padding: 1,
			minWidth: 145,
			maxWidth: 200, 
		},

		containerColumns: {
			flex: 1,
			flexShrink: 1,
			flexDirection: 'column',
		},		

		containerCreateOn: {
			flex: 8,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			flexShrink: 1,
			maxWidth: 200,
			minWidth: 40,
		},	

		containerFormsChecked: {
			flex: 8,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			flexShrink: 1,
			maxWidth: 200,
			minWidth: 35,
		},	

		containerFormSelect: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingLeft: 10,
			backgroundColor: '#ffffff',
		},

		containerLeftTopBar: {
			flex: 3,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			paddingLeft: 10,
		},		

		containerRow: {
			flex: 1,
			flexShrink: 1,
			flexDirection: 'row',
			maxHeight: 70, 
		},

		containerRowButtons: {
			flex: 12,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'flex-end',
			padding: 1,
			flexShrink: 1,
			minWidth: 215,
		},	

		containerRowButtonsTop: {
			flex: 12,
			flexShrink: 1,
			flexDirection: 'row',
			justifyContent: 'flex-end',
			padding: 10,
			flexShrink: 1,
			minWidth: 215,
			overflow: 'auto',
		},	

		containerTitle: {
			flex: 2,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			flexShrink: 1,
			maxHeight: 40, 
		},

		createdOnText: {
			fontSize: 13,
			fontWeight: '400',
			color: '#585858',
			fontStyle: 'italic',
			alignSelf: 'center',
			flex: 1,
			flexShrink: 1,
			flexDirection: 'row',
			whiteSpace: 'nowrap'
		},

		formRowBar: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: 10,
			minHeight: 80,
			minWidth: 680,	
		},

		formsSelectedText: {
			padding: 10,
			fontWeight: 'bold',
			fontSize: 20,
			textDecorationLine: 'none',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
		},

		icon: {
			color: 'black',
			fontSize: 18,
			fontWeight: '500',
			padding: 3,
			alignSelf: 'center',
			alignItems: 'center',
		},

		iconTitle: {
			color: 'black',
			fontSize: 24,
			fontWeight: '500',
			padding: 6,
			alignSelf: 'center',
			alignItems: 'center',
		},

		rowSpacer: {
			height: 5,
			backgroundColor: '#ffffff',
		},

		searchContainer: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			paddingRight: 5,
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190, 
			height: 40, 
			
		},

		searchText: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			flexShrink: 1,
			minWidth: 80,
			maxWidth: 190, 
			height: 40, 
			borderWidth: .5, 
			color: '#636363',
			borderColor: '#636363',
			textAlign: 'left',
			paddingLeft: 10,
			borderRadius: 12,
		},

		selectAllRow: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			padding: 10,
			fontWeight: 'bold',
			textDecorationLine: 'underline',
		},

		spacer: {
			height: 40,
			backgroundColor: '#ffffff',
		},

		text: {
			fontSize: 14,
			marginLeft: 10,
		},

		titleText: {
			fontSize: 22,
			padding: 10,
			fontWeight: 'bold',
			textDecorationLine: 'underline',
		},

		topBar: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: 10,
			minWidth: 680,
		},

		topBarText: {
			fontSize: 24,
			marginLeft: 10,
		},

	});