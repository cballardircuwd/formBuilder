//https://github.com/hoaphantn7604/react-native-element-dropdown

import React, { useState } from 'react';
import { StyleSheet, View, Pressable , Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../../styles/styles';

    const data = [
        { label: 'Michael', value: '1' },
        { label: 'TJ', value: '2' },
        { label: 'Chris', value: '3' },
        { label: 'Jared', value: '4' },
        { label: 'Austin', value: '5' },
        { label: 'Josh', value: '6' },
        { label: 'Phil', value: '7' },
        { label: 'Caleb', value: '8' },
        { label: 'Kyle', value: '9' },
        { label: 'Kent', value: '10' },
        { label: 'Joe', value: '11' },
    ];

    const MultiSelectComponent = () => {
        const [selected, setSelected] = useState([]);

        const renderItem = (item: any) => {
            return (
                <View style={styles.item}>
                <Text style={styles.textMultiSelect}>{item.label}</Text>
                <MaterialIcon
                    style={styles.icon}
                    color='#2a7242'
                    name='emoticon-cool-outline'
                    size={30}
                />
                </View>
            );
        };

        return (
            <View style={styles.containerMultiSelect}>
                <MultiSelect
                style={styles.dropdownMultiSelect}
                placeholderStyle={styles.textPlaceholderStyle}
                selectedTextStyle={styles.textMultiSelect}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Pick Only Cool People"
                value={selected}
                search
                searchPlaceholder="Search..."
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color="#3a3939"
                    name="meh"
                    size={20}
                    />
                )}
                renderRightIcon={() => (
                    <AntDesign
                    style={styles.icon}
                    color="#3a3939"
                    name='meh'
                    size={20}
                    />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <Pressable  onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <Icon color="black" name="trash" size={17} />
                        </View>
                    </Pressable >
                )}
                />
            </View>
        );
    };

export default MultiSelectComponent;