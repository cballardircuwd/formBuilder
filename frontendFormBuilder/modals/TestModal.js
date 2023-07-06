import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { DragSortableView } from 'react-native-drag-sort';

export default function CharacterSort() {
    const [data, setData] = useState(['Frodo', 'Sam', 'Pippin', 'Merry']);

    const renderItem = (item, index) => {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{item}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <DragSortableView
                dataSource={data}
                parentWidth={Dimensions.get('window').width}
                childrenWidth={70}
                childrenHeight={70}
                marginChildrenTop={10}
                renderItem={renderItem}
                onDragEnd={(fromIndex, toIndex) => {
                    data.splice(toIndex, 0, data.splice(fromIndex, 1)[0]);
                    setData([...data]);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    item: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#FFD700',
        margin: 10,
        borderColor: 'pink',
        borderWidth: 2,
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});
