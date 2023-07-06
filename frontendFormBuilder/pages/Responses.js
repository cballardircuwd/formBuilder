
import React, { useEffect, useState } from 'react';
import {
    CheckBox,
    FlatList,
    Text,		
    TextInput,	
    Pressable,
    View,
} from 'react-native';
import styles from '../styles/StylesFormsPages';
import Pagination from '../componentsForPages/Pagination';
import SortBy from '../componentsForPages/SortBy';
import MoreDropdown from '../componentsForPages/MoreDropdown';
import FormSelectDropdown from '../componentsForPages/FormSelectDropdown';
import { DATA } from '../dataResponses.js';
import { useIsFocused } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons	} from '@expo/vector-icons'; 

const Forms = ({ navigation }) => {

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState(DATA.map(d => ({ ...d, isSelected: false })));
    const [filteredData, setFilteredData] = useState(data);
    const [isAllSelected, setAllSelected] = useState(false);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [numSelected, setNumSelected] = useState(0);
    const [sortConfig, setSortConfig] = useState({field: 'id', direction: 'asc'});
    const [sortedData, setSortedData] = useState([]);

    const isPageFocused = useIsFocused();


    // Calculate paginated data
    const calculatePaginatedData = () => {
        const start = currentPage * Number(perPage);
        const end = start + Number(perPage);
        return filteredData.slice(start, end);
    };

    const [paginatedData, setPaginatedData] = useState(calculatePaginatedData());

    useEffect(() => {
        const updatedData = data.map(item => ({ ...item, isSelected: false }));
        setData(updatedData);
        setAllSelected(false);
        }, [perPage]);

    useEffect(() => {
        const updatedData = data.map(item => 
            paginatedData.find(pd => pd.id === item.id)
            ? { ...item, isSelected: false }
            : item
        );
        setData(updatedData);
        setAllSelected(false);
    }, [currentPage]);

    // Select All for Checkboxes
    const handleSelectAll = (newValue) => {
        const updatedData = filteredData.map(item => 
            paginatedData.find(pd => pd.id === item.id)
                ? { ...item, isSelected: newValue }
                : item
        );
        setData(updatedData);
        setFilteredData(updatedData);
        setAllSelected(newValue);
    };
    
    const handleCheckboxChange = (id, newValue) => {
        const updatedData = data.map(item => 
            item.id === id
                ? { ...item, isSelected: newValue }
                : item
        );
        setData(updatedData);
        setFilteredData(updatedData);

        // Count the selected items
        const selectedCount = updatedData.reduce((count, item) => item.isSelected ? count + 1 : count, 0);
        setNumSelected(selectedCount);
    };

    // Update allSelected state whenever paginated data changes
    useEffect(() => {
        setAllSelected(paginatedData.every((item) => item.isSelected));
        setNumSelected(data.filter((item) => item.isSelected).length);
    }, [paginatedData, data]);

    //Switched back to page 1 when perPage changes
    useEffect(() => {
        setCurrentPage(0);
    }, [perPage]);

    //Filters list based on search text
    const handleSearch = (text) => {
        let newData;
        if (text) {
            newData = data.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
        } else {
            newData = sortedData;
        }

        if (JSON.stringify(newData) !== JSON.stringify(filteredData)) {
            setFilteredData(newData);
            setCurrentPage(0);
        }
        setValue(text);
    };

    // Only calculate paginated data when necessary, use a useEffect for this
    useEffect(() => {
        setPaginatedData(calculatePaginatedData());
    }, [filteredData, currentPage, perPage]);

    const fieldNames = {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        submitDate: 'Submit Date',
    };

    const [currentField, setCurrentField] = useState('id');

    // Sort and paginate data whenever sortConfig, filteredData, currentPage, or perPage changes
    useEffect(() => {
        let sortedData = [...data];
        if (sortConfig !== null) {
            sortedData.sort((a, b) => {
                if (a[sortConfig.field] < b[sortConfig.field]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.field] > b[sortConfig.field]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        setSortedData(sortedData);
    }, [sortConfig, data, currentPage, perPage]);

    useEffect(() => {
        handleSearch(value);
    }, [sortedData]);

    useEffect(() => {
        if (!isPageFocused) {
            // Reset your states here.
            setSearchVisible(false);
            setIsFocused(false);
            setValue('');
            setData(DATA.map(d => ({ ...d, isSelected: false })));
            setFilteredData(DATA);
            setAllSelected(false);
            setPerPage(5);
            setCurrentPage(0);
            setNumSelected(0);
            setSortConfig({field: 'id', direction: 'asc'});
        }
    }, [isPageFocused]);

    useEffect(() => {
        setCurrentField(sortConfig.field);
    }, [sortConfig.field]);

    //Renders FlatList
    const renderItem = ({ item }) => (
        <>
        <View style={styles.formRowBar}>
            <View style={styles.containerRow}>
                <View style={styles.checkboxContainer}>
                    <CheckBox 
                        value={item.isSelected} 
                        onValueChange={(newValue) => handleCheckboxChange(item.id, newValue)} 
                    />
                </View>

                <View style={styles.containerColumns}>
                    <View style={styles.containerTitle}>
                        <Pressable  
                            style={styles.button}
                            onPress={() => navigation.navigate('FormView')}
                        >
                            <Text style={styles.titleText}>{item.name}</Text>
                        </Pressable >
                    </View>

                    <View style={styles.containerBottomRow}>
                        <View style={styles.columnSpacer} />
                        <View style={styles.containerCreateOn}>
                            {currentField === 'email' ? (
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{...styles.createdOnText, paddingRight: 5}}>Email: </Text>
                                    <Text style={{...styles.createdOnText, marginLeft: 0, textDecorationLine: 'underline' }}>{item.email}</Text>
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{...styles.createdOnText, paddingRight: 5}}>Submission Date: </Text>
                                    <Text style={{...styles.createdOnText, marginLeft: 0, textDecorationLine: 'underline' }}>{item.submitDate}</Text>
                                </View>
                            )}
                        </View>
                        <View style={styles.containerRowButtons}>
                            <Pressable  
                                style={styles.button}
                                onPress={() => navigation.navigate('Responses')}
                            >
                                <Text style={styles.text}>Responses</Text>
                                <MaterialIcons name="read-more" style={styles.icon}/>
                            </Pressable >

                            <Pressable  
                                style={styles.button}
                                onPress={() => navigation.navigate('Edit')}
                            >
                                <Text style={styles.text}>Edit</Text>
                                <MaterialCommunityIcons name="square-edit-outline" style={styles.icon}/>
                            </Pressable >

                            <Pressable  
                                style={styles.button}
                                onPress={() => navigation.navigate('Archive')}
                            >
                                <Text style={styles.text}>Archive</Text>
                                <MaterialIcons name="archive" style={styles.icon}/>	
                            </Pressable >

                            <Pressable  
                                style={styles.button}
                                onPress={() => navigation.navigate('Trash')}
                            >
                                <Text style={styles.text}>Delete</Text>
                                <Ionicons name="ios-trash-outline" style={styles.icon}/>	
                            </Pressable >

                            <Pressable  
                                style={styles.button} 
                            >
                                <MoreDropdown
                                    navigation={navigation}
                                    options={[
                                        { label: 'Settings', value: 'Settings' },
                                        { label: 'Share', value: 'Share' },
                                        { label: 'Analytics', value: 'Analytics' },
                                    ]}
                                />
                            </Pressable >
                        </View>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.rowSpacer} />
        </>
    );


    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                
                <View style={{...styles.containerLeftTopBar, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', margin: 10, padding: 1,}}>
                        <Text style={styles.topBarText}>Form Responses</Text>
                        {/* <Feather name="file-plus" style={styles.iconTitle}/> */}
                </View>

                <View style={styles.containerCenter}>
                    <Pressable  
                        style={styles.button}
                        onPress={() => navigation.navigate('Create New Form')}
                    >
                        <Text style={styles.topBarText}>New Form</Text>
                        <Feather name="file-plus" style={styles.iconTitle}/>
                    </Pressable >
                </View>

                <View style={styles.containerCenter}>
                    {!isSearchVisible && (
                        <Pressable 
                            style={styles.button}
                            onPress={() => setSearchVisible(!isSearchVisible)}
                        >
                            <Fontisto name="search" style={styles.iconTitle}/>
                        </Pressable >
                    )}
                    {isSearchVisible && (
                        <Pressable 
                            style={styles.searchText}
                            onPress={() => {}}
                        >
                            <View style={{...styles.searchContainer, width: 120, flexDirection: 'row'}}>
                                <Fontisto name="search" 
                                size={20}    style={{color: '#636363', paddingHorizontal: 7.5 }}/>
                                    <TextInput
                                        autoFocus={true}
                                        style={[styles.searchText]}
                                        onChangeText={text => handleSearch(text)}
                                        value={value}
                                        placeholder="Search..."
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => {
                                            setIsFocused(false);
                                            setSearchVisible(false);
                                        }}
                                    />
                            </View>
                        </Pressable>
                    )}
                </View>

                <View style={styles.containerCenter}>
                        <SortBy
                            direction={sortConfig.direction}
                            data={filteredData}
                            onSort={setFilteredData}
                            sortConfig={sortConfig}
                            setSortConfig={setSortConfig}
                            fields={['id', 'name', 'email', 'submitDate']}
                            fieldNames={fieldNames}
                        />
                </View>
            </View>

            <View style={styles.containerFormSelect}>
                <Pressable >
                    <FormSelectDropdown
                        navigation={navigation}
                        options={[
                            { label: 'What super power best describes you?', value: 'Forms' },
                            { label: "Who's your Celeb crush?", value: 'Archive' },
                            { label: 'Which Fantasy World is Best?', value: 'Trash' },
                        ]}
                        currentPageLabel='Which Hogwarts House are you?'
                    />
                </Pressable >
            </View>

            <View style={styles.formRowBar}>
                <View style={styles.containerRow}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isAllSelected} onValueChange={handleSelectAll} />
                    </View>
                    {numSelected > 0 && (
                        <>
                <View style={styles.containerBulkEditOptions}>
                    <View style={styles.containerFormsChecked}>
                        <Text style={styles.formsSelectedText}>
                            {numSelected} Form{numSelected === 1 ? "" : "s"} Selected
                        </Text>
                    </View>
                    <View style={styles.containerRowButtonsTop}>
                        <Pressable  
                            style={styles.buttonBulkEdit}
                            onPress={() => navigation.navigate('Archive')}
                        >
                            <Text style={styles.text}>Archive</Text>
                            <MaterialIcons name="archive" style={styles.icon}/>	
                        </Pressable >

                        <Pressable  
                            style={styles.buttonBulkEdit}
                            onPress={() => navigation.navigate('Trash')}
                        >
                            <Text style={styles.text}>Delete</Text>
                            <Ionicons name="ios-trash-outline" style={styles.icon}/>	
                        </Pressable >

                        <Pressable  
                            style={{...styles.buttonBulkEdit, width: 110 }}
                            onPress={() => navigation.navigate('Analytics')}
                        >
                            <Text style={{...styles.text, textAlign: 'center'}}>Add to Group</Text>
                            <MaterialCommunityIcons name="playlist-plus" style={styles.icon}/>	
                        </Pressable >

                        <Pressable  
                            style={{...styles.buttonBulkEdit, width: 110 }}
                            onPress={() => navigation.navigate('Analytics')}
                        >
                            <Text style={{...styles.text, textAlign: 'center'}}>Remove from Group</Text>
                            <MaterialCommunityIcons name="playlist-remove" style={styles.icon}/>	
                        </Pressable >

                        <Pressable  
                            style={styles.buttonBulkEdit}
                            onPress={() => navigation.navigate('Analytics')}
                        >
                            <Text style={styles.text}>Ownership</Text>
                            <MaterialCommunityIcons name="file-account-outline" style={styles.icon}/>	
                        </Pressable >

                        <Pressable  
                            style={styles.buttonBulkEdit}
                            onPress={() => navigation.navigate('Analytics')}
                        >
                            <Text style={styles.text}>Permissions</Text>
                            <MaterialCommunityIcons name="shield-key-outline" style={styles.icon}/>	
                        </Pressable >
                    </View>
                </View>
                    </>
                    )}
                </View>
            </View>


            <View style={styles.rowSpacer} />

            <FlatList
                data={paginatedData} 
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <View>
                <Pagination 
                    currentPage={currentPage + 1} 
                    totalPages={Math.ceil(filteredData.length / perPage)} 
                    onPageChange={(newPage) => setCurrentPage(newPage - 1)}
                    perPage={perPage} 
                    onPerPageChange={setPerPage} 
                    totalItems={filteredData.length}
                    itemsLabel="Forms"
                />
            </View>
        </View>
    );
}

export default Forms;