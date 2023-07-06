
    import React, { useEffect, useState } from 'react';
    import {
        CheckBox,
        FlatList,
        StyleSheet,
        Text,		
        TextInput,	
        Pressable,
        View,
    } from 'react-native';
    import styles from '../styles/StylesFormsPages';
    import Pagination from '../componentsForPages/Pagination';
    import SortBy from '../componentsForPages/SortBy';
    import Countdown  from '../componentsForPages/Countdown';
    import FormsTitleOptionsDropdown from '../componentsForPages/FormsTitleOptionsDropdown';
    import { DATA } from '../data.js';
    import { useIsFocused } from '@react-navigation/native';

    import { Feather } from '@expo/vector-icons'; 
    import { Fontisto } from '@expo/vector-icons'; 
    import { MaterialIcons } from '@expo/vector-icons'; 
    import { MaterialCommunityIcons	} from '@expo/vector-icons'; 


    const Trash = ({ navigation }) => {

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
            title: 'Title',
            trashedDate: 'Trashed Date',
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
                        <View style={styles.containerTitle}>{/* Title */}
                            <Pressable  
                                style={styles.button}
                                onPress={() => navigation.navigate('FormView')}
                            >
                                <Text style={styles.titleText}>{item.title}</Text>
                            </Pressable >
                        </View>

                        <View style={styles.containerBottomRow}>
                            <View style={styles.columnSpacer} />
                            <View style={styles.containerCreateOn}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{...styles.createdOnText, paddingRight: 5}}>Expires in: </Text>
                                    <Countdown trashedDate={item.trashedDate} />
                                </View>
                            </View>
                            <View style={styles.containerRowButtons}>
                                <Pressable  
                                    style={styles.button}
                                    onPress={() => navigation.navigate('My Forms')}
                                >
                                    <Text style={styles.text}>Restore</Text>
                                    <MaterialCommunityIcons name="delete-restore" style={styles.icon}/>	
                                </Pressable >

                                <Pressable  
                                    style={styles.buttonBulkEdit}
                                    onPress={() => navigation.navigate('Archive')}
                                >
                                    <Text style={styles.text}>Move to Archive</Text>
                                    <MaterialIcons name="archive" style={styles.icon}/>	
                                </Pressable >

                                <Pressable  
                                    style={styles.buttonBulkEdit}
                                    onPress={() => navigation.navigate('Trash')}
                                >
                                    <Text style={styles.text}>Delete Permanently</Text>
                                    <MaterialCommunityIcons name="delete-forever-outline" style={styles.icon}/>	
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
                    <View style={styles.containerLeftTopBar}>
                        <Pressable  >
                            <FormsTitleOptionsDropdown
                                navigation={navigation}
                                options={[
                                    { label: 'My Forms', value: 'My Forms' },
                                    { label: 'Archive', value: 'Archive' },
                                    { label: 'Trash', value: 'Trash' },
                                ]}
                                currentPageLabel='Trash'
                            />
                        </Pressable >
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
                                fields={['id', 'title', 'trashedDate']}
                                fieldNames={fieldNames}
                            />
                    </View>
                </View>

                <View style={styles.spacer} />

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
                                onPress={() => navigation.navigate('My Forms')}
                            >
                                <Text style={styles.text}>Restore</Text>
                                <MaterialCommunityIcons name="delete-restore" style={styles.icon}/>	
                            </Pressable >                        

                            <Pressable  
                                style={styles.buttonBulkEdit}
                                onPress={() => navigation.navigate('Archive')}
                            >
                                <Text style={styles.text}>Move to Archive</Text>
                                <MaterialIcons name="archive" style={styles.icon}/>	
                            </Pressable >

                            <Pressable  
                                style={styles.buttonBulkEdit}
                                onPress={() => navigation.navigate('My Forms')}
                            >
                                <Text style={styles.text}>Restore</Text>
                                <MaterialCommunityIcons name="delete-restore" style={styles.icon}/>	
                            </Pressable >

                            <Pressable  
                                style={styles.buttonBulkEdit}
                                onPress={() => navigation.navigate('Trash')}
                            >
                                <Text style={styles.text}>Delete Permanently</Text>
                                <MaterialCommunityIcons name="delete-forever-outline" style={styles.icon}/>	
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

    export default Trash;