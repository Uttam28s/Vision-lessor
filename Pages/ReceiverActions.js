import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import ReceiverForm from './ReceiverForm';
import { addData, updateData } from '../helper/FirebaseHelper';

const styles = StyleSheet.create({
  button: {
    marginVertical: 12,
    marginTop: 22,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formWrapper:{
    backgroundColor: '#dcdcdcd9',
    padding: 8,
    borderRadius: 10
  }
});

const ReceiverAction = ({
  modalType,
  setModalVisible,
  receiverList,
  receiverDropdown,
  getReceiverData
}) => {
  const [receiverName, setReceiverName] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverState, setReceiverState] = useState('');
  const [receiverGSTIN, setReceiverGSTIN] = useState('');
  const [receiverPan, setReceiverPan] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateReceiverData = useCallback((data) => {
    const receiver = receiverList.find(val => val.id === data?.value)
    setReceiverAddress(receiver?.address)
    setReceiverState({label: receiver?.state, value: receiver?.stateCode})
    setReceiverGSTIN(receiver?.gstin)
    setReceiverPan(receiver?.pan)
  }, [receiverName]);

  const handleSubmit = async() => {
    setIsLoading(true)
    if(modalType === 'add'){
      const buyerData = {
        name: receiverName,
        address: receiverAddress,
        gstin: receiverGSTIN,
        pan: receiverPan,
        state: receiverState.label,
        stateCode: receiverState.value,
      };

      try {
        await addData('receiver', buyerData)
        console.log('Buyer added successfully!');
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error('Error adding buyer:', error);
      }
    } else {
      const buyerData = {
        name: receiverName.label,
        address: receiverAddress,
        gstin: receiverGSTIN,
        pan: receiverPan,
        state: receiverState.label,
        stateCode: receiverState.value,
      };

      try {
        await updateData('receiver', receiverName.value,buyerData)
        console.log('Buyer Updated successfully!');
        setIsLoading(false)
      } catch (error) {
        console.error('Error adding buyer:', error);
        setIsLoading(false)
      }
    }
    getReceiverData()
    setModalVisible(false)
  };

  return (
    <View>
      <View style={styles.formWrapper}>
        <ReceiverForm 
          receiverName={receiverName}
          setReceiverName={setReceiverName}
          receiverAddress={receiverAddress}
          setReceiverAddress={setReceiverAddress}
          receiverState={receiverState}
          setReceiverState={setReceiverState}
          receiverGSTIN={receiverGSTIN}
          setReceiverGSTIN={setReceiverGSTIN}
          receiverPan={receiverPan}
          setReceiverPan={setReceiverPan}
          type={modalType}
          receiverData={receiverDropdown}
          handleUpdateReceiverData={handleUpdateReceiverData}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button disabled={isLoading} style={styles.button} mode="contained" onPress={handleSubmit}>
          {modalType === 'edit' ? 'Edit Receiver' : 'Add Receiver'}
        </Button>
      </View>
    </View>
  );
};

export default ReceiverAction;
