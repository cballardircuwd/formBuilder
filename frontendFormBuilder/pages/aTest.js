
	import React from 'react';
	import { View, Text, SafeAreaView } from 'react-native';

	import Address from "../components/aNewtoBuild/Address";
	import DatePicker from "../components/aNewtoBuild/DatePicker";
	import DateTimePicker from "../components/aNewtoBuild/DateTimePicker";
	import Description from "../components/aNewtoBuild/Description";
	import DrawingBoard from "../components/aNewtoBuild/DrawingBoard";
	import EMAIL2 from "../components/aNewtoBuild/EMAIL2";
	import FileUpload from "../components/aNewtoBuild/FileUpload";
	import Formula from "../components/aNewtoBuild/Formula";
	import ImageUpload from "../components/aNewtoBuild/ImageUpload";
	import Measurement from "../components/aNewtoBuild/Measurement";
	import MultiLineText from "../components/aNewtoBuild/MultiLineText";
	import NAME2 from "../components/aNewtoBuild/NAME2";
	import Number from "../components/aNewtoBuild/Number";
	import Signature from "../components/aNewtoBuild/Signature";
	import SingleLineText from "../components/aNewtoBuild/SingleLineText";
	import TimePicker from "../components/aNewtoBuild/TimePicker";
	import TextField from "../components/textFields/TextField";

	import Testicle from "../components/aNewtoBuild/Testicle";
	

        const Test = () => {
            return (
                <SafeAreaView>
                    <View style={{ flex: 1, textAlign: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            This is a Component Test Page
                        </Text>
                    </View>      

                    <TextField/>
                    {/* <Address/>
                    <DatePicker/>
                    <DateTimePicker/>
                    <Description/>
                    <DrawingBoard/>
                    <EMAIL2/>
                    <FileUpload/>
                    <ImageUpload/>
                    <Measurement/>
                    <MultiLineText/>
                    <NAME2/>
                    <Number/>
                    <Signature/>
                    <SingleLineText/>
                    <TimePicker/> */}

                    <Testicle/>
                </SafeAreaView>

            );
        };

	export default Test;