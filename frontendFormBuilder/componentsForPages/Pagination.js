
    import React from 'react';
    import { Text, View, StyleSheet } from 'react-native';

    import { MaterialCommunityIcons } from '@expo/vector-icons';
    import { Picker } from '@react-native-picker/picker';

    // Params for implementation
    //     <Pagination 
    //         currentPage={currentPage + 1} 
    //         totalPages={Math.ceil(filteredData.length / perPage)} 
    //         onPageChange={(newPage) => setCurrentPage(newPage - 1)}
    //         perPage={perPage} 
    //         onPerPageChange={setPerPage} 
    //         totalItems={filteredData.length}
    //         itemsLabel="DesiredText"
    //         perPageOptions={[3, 7, 21, 'All']} //Change # to match starting number value for:(const [perPage, setPerPage] = useState(#);)
    //     />

        const Pagination = ({ currentPage, totalPages, onPageChange, perPage, onPerPageChange, totalItems, itemsLabel, perPageOptions = [5, 7, 10, 12, 15, 'All'] }) => {

            return (
            <View style={styles.container}>
                <View style={styles.flex2} />

                <View style={styles.pagination}>
                    <MaterialCommunityIcons
                        name="chevron-double-left"
                        style={styles.icon}
                        onPress={() => onPageChange(1)}
                    />
                    <MaterialCommunityIcons
                        name="chevron-left"
                        style={styles.icon}
                        onPress={() => onPageChange(Math.max(1, currentPage - 1))}
                    />
                    <Text style={styles.textPagination}>{`${currentPage} / ${totalPages}`}</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        style={styles.icon}
                        onPress={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    />
                    <MaterialCommunityIcons
                        name="chevron-double-right"
                        style={styles.icon}
                        onPress={() => onPageChange(totalPages)}
                    />
                </View>

                <View style={styles.flex2}>
                    <View style={styles.flex2} />

                    <View style={styles.perPageDropdown}>
                        <Picker
                            selectedValue={perPage}
                            style={styles.textPageDropdown}
                            onValueChange={(itemValue) => onPerPageChange(itemValue)}
                        >
                        {perPageOptions.map(value => 
                            <Picker.Item 
                                key={typeof value === 'number' ? value.toString() : value} 
                                label={typeof value === 'number' ? value.toString() : value} 
                                value={value === 'All' ? totalItems : value} 
                            />
                        )}
                        </Picker>
                    </View>
                    <View style={styles.itemRangAndTotal}>
                        <View style={{ flexDirection: 'row', textAlign: 'center'}}>
                            <Text style={styles.textItem}>
                                Viewing{/* {itemsLabel} */}
                            </Text>
                            <Text style={styles.textRange}>
                                {((currentPage - 1) * perPage) + 1}-{Math.min(currentPage * perPage, totalItems)} 
                            </Text>
                            <Text style={styles.textItem}>
                                {itemsLabel}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', textAlign: 'center'}}>
                            <Text style={styles.textItem}>
                                Total {itemsLabel}:
                            </Text>
                            <Text style={styles.textTotal}>
                                {totalItems}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
    

    export default Pagination;


    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            flex: 1,
            flexShrink: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
        },

        flex2: {
            flex: 2,
            flexDirection: 'row',
        },

		icon: {
			color: 'black',
			fontSize: 20,
			fontWeight: '500',
			alignSelf: 'center',
			alignItems: 'center',
		},

        itemRangAndTotal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginRight: 10,
            minWidth: 150,
        },

        pagination: {
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 140,
        },

        perPageDropdown: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            margin: 20,
            maxHeight: 40,
            maxWidth: 50,
        },

        textItem: {
			fontSize: 16,
            alignSelf: 'center',
        },

		textPageDropdown: {
			fontSize: 16,
            alignItems: 'center',
			alignSelf: 'center',
            height: 40,
            width: 50,
		},

		textPagination: {
			fontSize: 18,
            padding: 3,
            fontWeight: '500',
			alignSelf: 'center',
		},

		textRange: {
			fontSize: 16,
            fontWeight: '400',
            padding: 5,
            flexDirection: 'row',
            whiteSpace: 'nowrap',
            alignItems: 'center',
		},

		textTotal: {
			fontSize: 16,
            fontWeight: '500',
            paddingLeft: 5,
		},

    });
    