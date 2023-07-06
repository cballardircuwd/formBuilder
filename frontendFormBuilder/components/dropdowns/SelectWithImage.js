//https://github.com/hoaphantn7604/react-native-element-dropdown

import React, { useState } from 'react';
import { View, Image } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../../styles/styles';
import { SelectCountry } from 'react-native-element-dropdown';

    const MichaelImage = require("../../assets/Michael.jpg");


    const data = [
        
        {
            value: '1',
            lable: 'Michael',
            image: {
                uri: 'https://scontent.ftol2-1.fna.fbcdn.net/v/t1.6435-9/92997995_10215961100528110_2504501786572750848_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ijxitUIWRoQAX9QmMeQ&_nc_ht=scontent.ftol2-1.fna&oh=00_AfBptZzbXdNAS_MKntcRbJFg3aF452YBjiuTVzFPjzFGkw&oe=63B81047',
            },
        },
        {
            value: '2',
            lable: 'TJ',
            image: {
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFzJQwEBT9gUw/profile-displayphoto-shrink_200_200/0/1544743231009?e=1675900800&v=beta&t=X4kSTdvlg3B6gCaq03m1coUPPR5rHI8VchbRlHQ8ro8',
            },
        },
        {
            value: '3',
            lable: 'Chris',
            image: {
                uri: 'https://images.gr-assets.com/users/1515094786p6/75698602.jpg',
            },
        },
        {
            value: '4',
            lable: 'Jared',
            image: {
                uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFVlX2gqS4c5Q/profile-displayphoto-shrink_200_200/0/1660449508298?e=1672272000&v=beta&t=W0bFIHFWgi0OCtrXJMKy3HYWOIKCc3mxHVimbz9Epdc',
            },
        },
        {
            value: '5',
            lable: 'Austin',
            image: {
                uri: 'https://i.pinimg.com/280x280_RS/69/09/bd/6909bddd0896a1e3c819146628c6c901.jpg',
            },
        },
        ];


    const SelectWithImage = () => {
        const [item, setItem] = useState('1');

        return (
            <View style={styles.containerForInputs}>
                <SelectCountry
                    style={styles.dropdownSelectImage}
                    selectedTextStyle={styles.textStyleImageDropdown}
                    placeholderStyle={styles.textPlaceholderStyle}
                    imageStyle={styles.imageStyleDropdownImage}
                    iconStyle={styles.iconStyle}
                    maxHeight={300}
                    search
                    data={data}
                    valueField="value"
                    labelField="lable"
                    imageField="image"
                    placeholder="Select Employee Image"
                    searchPlaceholder="Search..."
                    renderRightIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color="#ff88d1"
                            name="picture"
                            size={20}
                        />
                    )}
                    onChange={e => {
                        setItem(e.value);
                    }}
                />
            </View>
        );
    };

export default SelectWithImage;

