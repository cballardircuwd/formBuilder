
    import React, { useState } from 'react';
    import { Text, View, Pressable , StyleSheet } from 'react-native';
    import EditorComponentModal from '../modals/EditorComponentModal';

    export default function Edit() {
        const [isModalVisible, setModalVisible] = useState(null);
        const [selectedComponents, setSelectedComponents] = useState([]);

        const openModal = () => setModalVisible(true);
        const closeModal = () => setModalVisible(false);
        const handleAddComponents = (components) => {
            setSelectedComponents((prevComponents) => [...prevComponents, ...components]);
            closeModal();
        };

        return (
            <View style={styles.container}>
                <View style={styles.selectedComponentsContainer}>
                    {selectedComponents.map((component) => (
                    <View style={styles.selectedComponent} key={component.key}>
                        <Text>{component.value}</Text>
                    </View>
                    ))}
                </View>
            
                <Pressable  onPress={openModal} style={styles.addComponentButton}>
                    <Text style={styles.addComponentButtonText}>Add Component</Text>
                </Pressable >    

                <EditorComponentModal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                    onAddComponents={handleAddComponents}
                    selectedComponents={selectedComponents}
                />
            </View>
        );
    }


        const styles = StyleSheet.create({

            addComponentButton: {
                alignSelf: 'center',
                padding: 10,
                marginTop: 20,
                backgroundColor: '#0077ff',
                borderRadius: 15,
            },

            addComponentButtonText: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
            },

            container: {
                flex: 1,
                backgroundColor: '#9ed9f0',
                height: '100%',
            },

            selectedComponentsContainer: {
                flexDirection: 'column',
                flexWrap: 'wrap',
                padding: 10,
            },

            selectedComponent: {
                backgroundColor: '#f1f1f1',
                padding: 10,
                margin: 5,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 2,
                alignSelf: 'center',
            },

        });