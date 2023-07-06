
    import Icon from 'react-native-vector-icons/FontAwesome';
    import { MaterialCommunityIcons } from '@expo/vector-icons'; 
    import { MaterialIcons } from '@expo/vector-icons'; 
    import { FontAwesome5 } from '@expo/vector-icons'; 

    import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({

        icon: {
            color: 'black',
            fontSize: 18,
            fontWeight: '500',
            paddingBottom: 3,
            paddingHorizontal: 15,
            paddingTop: 15,
            alignSelf: 'center',
            alignItems: 'center',
        },

    });

    export const DATA = [
        { name: 'Single Line Text', icon: <MaterialIcons name="short-text" style={styles.icon} /> },
        { name: 'Multi Line Text', icon : <MaterialCommunityIcons name="text-long" style={styles.icon} /> },
        { name: 'Name', icon: <Icon name="user" style={styles.icon} /> },
        { name: 'Address', icon: <Icon name="map" style={styles.icon} /> },
        { name: 'Email', icon: <Icon name="envelope" style={styles.icon} /> },
        { name: 'Phone', icon: <Icon name="phone" style={styles.icon} /> },
        { name: 'Dropdown', icon: <Icon name="caret-down" style={styles.icon} /> },
        { name: 'Radio button', icon: <Icon name="circle-o" style={styles.icon} /> },
        { name: 'Checkbox', icon: <Icon name="check-square-o"style={styles.icon} /> },
        { name: 'Date Picker', icon: <Icon name="calendar" style={styles.icon} /> },
        { name: 'Time Picker', icon: <Icon name="clock-o" style={styles.icon} /> },
        { name: 'Date-Time Picker', icon: <Icon name="calendar-o" style={styles.icon} /> },
        { name: 'Number', icon: <Icon name="hashtag" style={styles.icon} /> },
        { name: 'Formula', icon: <Icon name="superscript" style={styles.icon} /> },
        { name: 'Measurement', icon: <FontAwesome5 name="ruler" style={styles.icon} /> },
        { name: 'File Upload', icon: <Icon name="file-o" style={styles.icon} /> },
        { name: 'Image Upload', icon: <Icon name="image" style={styles.icon} /> },
        { name: 'Signature', icon: <Icon name="pencil-square-o" style={styles.icon} /> },
        { name: 'Description', icon: <Icon name="comment-o" style={styles.icon} /> },
        { name: 'Drawing Board', icon: <Icon name="pencil" style={styles.icon} /> },
    ];

