import React from 'react';
import { Modal, StyleSheet, View, ScrollView, TouchableOpacity, Text} from 'react-native';

const FCModal = ({
  modalVisible,
  setModalVisible,
  children,
  title
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
      <Text style={styles.heading}>{title}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.modalContent}>
          <ScrollView>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: '82%',
    marginTop: 38,
    width: '90%',
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  buttonText:{
    fontSize: 24,
    transform: [{rotate: '45deg'}],
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 30,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  heading: {
    fontSize: 24, 
    fontWeight: '600',
    position: 'absolute',
    top: 58,
    left: 15,
  },
});

export default FCModal;