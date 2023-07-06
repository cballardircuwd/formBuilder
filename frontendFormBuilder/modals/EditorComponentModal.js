
    import React, { useState } from 'react';
    import { FlatList, Modal, ScrollView, StatusBar,  StyleSheet, Text, Pressable , View } from 'react-native';
    import { DragSortableView, AutoDragSortableView, AnySizeDragSortableView } from 'react-native-drag-sort';
    import { DATA } from '../dataComponentList.js';

    import SingleLineText from '../components/aNewtoBuild/SingleLineText.js';
    import MultiLineText from '../components/aNewtoBuild/MultiLineText.js';
    import Name from '../components/textFields/Name.js';
    import Address from '../components/aNewtoBuild/Address.js';
    import Email from '../components/textFields/Email.js';
    import Phone from '../components/aNewtoBuild/Phone.js';
    import DropdownWithSearch from '../components/dropdowns/DropdownWithSearch.js';
    import RadioButton from '../components/aNewtoBuild/RadioButton.js';
    import Checkbox from '../components/checkboxes/Checkbox.js';
    import DatePicker from '../components/aNewtoBuild/DatePicker.js';
    import TimePicker from '../components/aNewtoBuild/TimePicker.js';
    import DateTimePicker from '../components/aNewtoBuild/DateTimePicker.js';
    import Number from '../components/aNewtoBuild/Number.js';
    import Formula from '../components/aNewtoBuild/Formula.js';
    import Measurement from '../components/aNewtoBuild/Measurement.js';
    import FileUpload from '../components/aNewtoBuild/FileUpload.js';
    import ImageUpload from '../components/aNewtoBuild/ImageUpload.js';
    import Signature from '../components/aNewtoBuild/Signature.js';
    import Description from '../components/aNewtoBuild/Description.js';
    import DrawingBoard from '../components/aNewtoBuild/DrawingBoard.js';

    const componentFiles = {
        'Single Line Text': SingleLineText,
        'Multi Line Text': MultiLineText,
        'Name': Name,
        'Address': Address,
        'Email': Email,
        'Phone': Phone,
        'Dropdown': DropdownWithSearch,
        'Radio button': RadioButton,
        'Checkbox': Checkbox,
        'Date Picker': DatePicker,
        'Time Picker': TimePicker,
        'Date-Time Picker': DateTimePicker,
        'Number': Number,
        'Formula': Formula,
        'Measurement': Measurement,
        'File Upload': FileUpload,
        'Image Upload': ImageUpload,
        'Signature': Signature,
        'Description': Description,
        'Drawing Board': DrawingBoard,
    };


    export default function EditorComponentModal({ isVisible, onClose, onAddComponents, }) {
        const [components, setComponents] = useState([]);
        const [dragging, setDragging] = useState(false);
        const [deleteMode, setDeleteMode] = useState(false);
        const [parentWidth, setParentWidth] = useState(0);
        const [parentHeight, setParentHeight] = useState(0);
		const childrenWidth = parentWidth / 4;
        const childrenHeight = 70;
        const deleteHeight = 100;
        const height = 600;


        const handleSelectComponent = (component) => {
            if (component && component.name) {
                setComponents((prevComponents) => [
                    ...prevComponents,
                    { key: Math.random().toString(), value: component.name },
                ]);
            } else {
                console.error('Component value is undefined');
            }
        };

        const handleAddToPage = () => {
            const resolvedComponents = components.map((component) => {
                const Component = componentFiles[component.value];
                if (Component) {
                    return { key: Math.random().toString(), value: <Component /> };
                } else {
                    console.error('Component not found');
                    return null;
                }
            });

            const filteredComponents = resolvedComponents.filter((component) => component !== null);
            onAddComponents(filteredComponents);
            setComponents([]); // Reset the components
            onClose();
        };

        const handleClearComponents = () => {
            setComponents([]);
        };

        const handleRemoveComponent = (index) => {
            const newComponents = [...components];
            newComponents.splice(index, 1);
            setComponents(newComponents);
        };

        return (
            <Modal
                animationType="none"
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}
            >
                <Pressable 
                    style={styles.container}
                    activeOpacity={1}
                    onPress={onClose}
                >
                    <Pressable 
                        style={styles.containerModal}
                        activeOpacity={1}
                        onPress={(event) => {
                            event.stopPropagation();
                        }}
                    >

                        <Text style={styles.textTitle}>
                            Select Form Fields Below
                        </Text>

                        <ScrollView style={styles.containerScroll}>
                            <View style={styles.containerComponents}>
                                <FlatList
                                    style={styles.flatlist}
                                    data={DATA}
                                    numColumns={4}
                                    keyExtractor={(item) => item.nameitem}
                                    renderItem={({ item }) => (
                                        <Pressable  
                                            onPress={() => handleSelectComponent(item)} 
                                            style={styles.containerComponentGrid}
                                        >
                                            {item.icon}
											<Text style={[
												styles.textComponentBox, 
												item.name === 'Measurement' && styles.textComponentBoxSmall]}
											>
												{item.name}
											</Text>
                                        </Pressable >
                                    )}
                                />
                            </View>
                        </ScrollView>

                        <View style={styles.rowSpacer} />

                        <View>
                            {components.length > 0 && (
                                <View style={styles.containerHeader}>
                                    <Text style={styles.textTitle}>
                                        Selected components (drag to sort):  
                                    </Text>
                                    <Pressable  
										onPress={handleClearComponents} 
										style={styles.buttonClear}
									>
                                        <Text style={styles.textClearButton}>
                                            Clear
                                        </Text>
                                    </Pressable >
                                </View>
                            )}  
                        </View>

                        <ScrollView style={styles.containerDragScrollView}>
							<View
								contentContainerStyle={styles.containerDragSort} 
								onLayout={(event) => {
									var {width, height} = event.nativeEvent.layout;
									setParentWidth(width);
									setParentHeight(height); 
								}}
							>
								<DragSortableView
									dataSource={components}
									parentWidth={parentWidth}
									childrenWidth={childrenWidth}
									childrenHeight={childrenHeight}
									renderItem={(item, index) => (
										<View style={[styles.wrapperDragSortItem, {width: childrenWidth}]}> 
											<Pressable  style={styles.buttonDragSort}>
												<View style={{ padding: 10 }}>
													<Text style={styles.textDragSortItem}>{item.value}</Text>
												</View>
												<View style={styles.buttonRemoveBorder}>
													<Pressable 
														onPress={() => handleRemoveComponent(index)}
														style={styles.buttonRemove}
													>
														<Text style={styles.textRemoveButton}>X</Text>
													</Pressable >
												</View>
											</Pressable >
										</View>
									)}
									keyExtractor={(item) => item.key}
									onDataChange={(data) => {
										setComponents(data);
									}}
									onClickItem={(data, item, index) => {
										if (deleteMode) {
											const newComponents = [...components];
											newComponents.splice(index, 1);
											setComponents(newComponents);
											setDeleteMode(false);
										}
									}}
									onDragging={(gestureState, left, top) => {
										const currentStatusBarHeight = StatusBar.currentHeight || 0;
										if (gestureState.moveY + currentStatusBarHeight + deleteHeight >= height) {
											setDeleteMode(true);
										} else if (deleteMode) {
											setDeleteMode(false);
										}
									}}
									onDragEnd={() => {
										setDragging(false);
									}}
									
								/>
							</View>
                        </ScrollView>

                        <Pressable  
							onPress={handleAddToPage} 
							style={styles.buttonAddToPage}
						>
                            <Text style={styles.textAddToPageButton}>
								Add to Page
							</Text>
                        </Pressable >

                    </Pressable >                
                </Pressable >
            </Modal>
        );
    }

    const styles = StyleSheet.create({

        buttonAddToPage: {
            borderWidth: 2,
            borderColor: '#01499b',
            backgroundColor: '#0077ff',
            borderRadius: 15,
            padding: 5,
            marginVertical: 10,
        },

        buttonClear: {
            backgroundColor: '#f1f1f1',
            justifyContent: 'center',
            padding: 15,
            borderWidth:2,
            borderColor: '#333333',
            borderRadius: 15,
            height:40,
        },

        buttonDragSort: {
			backgroundColor: '#ffffff',
			borderWidth: 2,
			borderColor: '#333333',
			borderRadius: 15,
			justifyContent: 'space-between',
			alignItems: 'center',
			marginHorizontal: '3.5%',
		},

        buttonRemove: {
			backgroundColor: '#5e0202ff',
			width: 20,
			height: 20,
			borderTopLeftRadius: 20,
			borderBottomRightRadius: 20,
			borderBottomLeftRadius: 120,
			borderTopRightRadius: 85,			
			borderWidth: 2,
			borderTopColor: '#333333',
			borderRightColor: '#333333',
			borderBottomColor:'#5e0202ff',
			borderLeftColor: '#5e0202ff',
			borderLeftWidth: 1,
			borderBottomWidth: 2,
		},

		buttonRemoveBorder: {
			position: 'absolute',
			top: 0,
			right: 0,
			width: 25,
			height: 25,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: -4,
			marginRight: -4,
		},

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        containerComponents: {
            backgroundColor: '#f1f1f1',
            padding: 15,
        },

        containerComponentGrid: {
            width: '23%', //Adjusted to fit 4 items per row
            backgroundColor: '#ffffff',
            margin: '1%', 
            borderWidth: 2,
            borderColor: '#333333',
            borderRadius: 15,
            height: 75,
            justifyContent: 'center',
            marginBottom: 10,
        },

        containerDragScrollView: {
            backgroundColor: '#f1f1f1',
            padding: 15,
            marginTop: 10,
            height: '35%',
            borderWidth: 2,
            borderColor: '#333333',
            borderRadius: 15,
        },

        containerDragSort: {
            backgroundColor: '#f1f1f1',
            padding: 15,
			justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#333333',
            borderRadius: 15,
        },

        containerHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },

        containerModal: {
            position: 'absolute',
            top: '15%',
            left: '20%', //Adjust to position the modal horizontally
            backgroundColor: '#ffffff',
            paddingVertical: 5,
            paddingHorizontal: 30,
            width: '60%',
            height: '50%',
            shadowColor: '#acacac',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1.3,
            shadowRadius: 10,
            elevation: 5, //Only for Android
            borderWidth: 2,
            borderColor: '#acacac',
            borderRadius: 15,
        },

        containerScroll: {
            maxHeight: '60%',
            borderWidth: 2,
            borderColor: '#333333',
            borderRadius: 15,
        },

        flatlist: {
            flex: 1,
        },

		rowSpacer: {
			height: 5,
			backgroundColor: '#ffffff',
		},

        textAddToPageButton: {
            fontSize: 24,
            textAlign: 'center',
            color: '#ffffff',
            alignSelf: 'center',
            justifyContent: 'center',
        },

        textClearButton: {
            fontSize: 20,
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
        },

        textComponentBox: {
            fontSize: 16,
            textAlign: 'center',
			paddingHorizontal: 15,
			paddingBottom: 15,
        },

        textComponentBoxSmall: {
            fontSize: 13.5,
            textAlign: 'center',
			flex: 1,
        },

        textDragSortItem: {
			fontSize: 14,
			flexWrap: 'wrap',
			textAlign: 'center',
		},

        textRemoveButton: {
            color: '#ffffffff',
            fontSize: 12,
            textAlign: 'center',
            verticalAlign: 'center',
        },

        textTitle: {
            fontSize: 22,
            padding: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecorationLine: 'underline',
        },

		wrapperDragSortItem: {
			justifyContent: 'center',
		},

    });