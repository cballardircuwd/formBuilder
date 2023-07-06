
    import React, { useState } from 'react';
    import { View, Text } from 'react-native';

    const ResponsiveText = ({ text, style }) => {
        const [fontSize, setFontSize] = useState(14);

        const onLayout = (event) => {
            const { width } = event.nativeEvent.layout;
            const calculatedFontSize = width * 0.1; // Adjust this value as per your needs
            setFontSize(calculatedFontSize);
        };

        return (
            <View onLayout={onLayout}>
                <Text style={[style, { fontSize }]}>{text}</Text>
            </View>
        );
    };

    export default ResponsiveText;


