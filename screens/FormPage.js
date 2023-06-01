import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { generateUniqueCode, priceCalculator, stateData } from '../helper';
import DatePickerFC from '../components/DatePicker';
import DropDown from '../components/Dropdown';
import TextInputFC from '../components/TextInput';
import AddProductForm from '../components/DynamicForm';
import FCModal from '../components/Modal';
import ProductCard from '../components/ProductCard';
import { showMessage, hideMessage } from "react-native-flash-message";
import { addData, getConditionalData } from '../helper/FirebaseHelper';
import ReceiverForm from '../Pages/ReceiverForm';
import ReceiverAction from '../Pages/ReceiverActions';
import AddNewProductForm from '../Pages/AddNewProductForm';
import { SplashScreen } from 'expo';

const FormPage = ({ navigation, route }) => {
  const [invoiceNo, setInvoiceNo] = useState('M0001');
  const [invoiceDate, setInvoiceDate] = useState(new Date());
  const [state, setState] = useState('');
  const [transporterName, setTransporterName] = useState('');
  const [vehNo, setVehNo] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverState, setReceiverState] = useState('');
  const [receiverGSTIN, setReceiverGSTIN] = useState('');
  const [receiverPan, setReceiverPan] = useState('');
  const [products, setProducts] = useState([{
    name: '',
    hsn: '',
    quantity: '',
    unit: '',
    pice:'',
    price: '',
    gst:'',
    isIGSTIN: false,
    assembleValue:0,
    assembleIgst:0,
    totalProductPrice:0
  }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [receiverVisible, setReceiverVisible] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [receiverList, setReceiverList] = useState([]);
  const [receiverDropdown, setReceiverDropdown] = useState([]);
  const [addNewProduct, setAddNewProduct] = useState(false);
  const [productNames, setProductNames] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [saveProduct, setSaveProduct] = useState(false)


  const getReceiverData = () => {
    getConditionalData('receiver').then((data) => {
      setReceiverList(data)
      const updatedData = data.map((data) => ({label: data.name, value: data.id}));
      setReceiverDropdown(updatedData)
      setReceiverName('')
      setReceiverAddress('')
      setReceiverState('')
      setReceiverGSTIN('')
      setReceiverPan('')
    });
    getConditionalData('products').then((data) => {
      setProductNames(data)}
    )
  }
  useEffect(() => {
    getReceiverData()
    const invoiceNumber = `M${String(route?.params?.cardData.length + 1).padStart(4, '0')}`
    setInvoiceNo(invoiceNumber)
  }, [])

  useEffect(() => {
    getConditionalData('products').then((data) => {
      setProductNames(data)}
    )
  }, [saveProduct])



  const handleUpdateReceiverData = useCallback((data) => {
    const receiver = receiverList.find(val => val.id === data?.value)
    setReceiverAddress(receiver?.address)
    setReceiverState({label: receiver?.state, value: receiver?.stateCode})
    setReceiverGSTIN(receiver?.gstin)
    setReceiverPan(receiver?.pan)
  }, [receiverName]);

  const handleGenerate = async() => {
    setIsLoading(true);
    const totalSum = products.reduce((acc, item) => {
      return (acc + parseFloat(item.totalProductPrice)).toFixed(2)
    }, 0)

    const totalGstIn = products.reduce((acc, item) => {
      return (acc + parseFloat(item.assembleIgst)).toFixed(2)
    }, 0)

    const billData = {
      invoiceNo,
      invoiceDate,
      state,
      transporterName,
      vehNo,
      receiverName,
      receiverAddress,
      receiverState: receiverState.label,
      receiverStateCode: receiverState.value,
      receiverGSTIN,
      receiverPan,
      products,
      totalSum,
      totalGstIn,
      isIGSTIN: products[0].isIGSTIN
    }

    try {
      await addData('bills', billData)
      getConditionalData("bills").then((data) => {
        navigation.navigate("Home", { cardData: data });
        }
      );
      console.log('Bill added successfully!');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error adding buyer:', error);
    }
  };

  return (
    <ScrollView>
      <View style={formStyles.container}>
        <Text style={formStyles.label}>Invoice</Text>
        <TextInputFC
          style={formStyles.text}
          label="Invoice No."
          value={invoiceNo}
          disabled
        />
        <DatePickerFC
          invoiceDate={invoiceDate}
          setInvoiceDate={setInvoiceDate}
          styles={formStyles.picker} 
        />
        <DropDown
          title='Select State'
          value={state}
          setValue={setState}
          style={formStyles.picker}
          data={stateData}
        />
        <Text style={formStyles.label}>Vehicle Details</Text>
        <TextInputFC
          style={formStyles.text}
          label="Transporter Name"
          value={transporterName}
          onChangeText={setTransporterName}
        />
        <TextInputFC
          style={formStyles.text}
          label="Veh No"
          value={vehNo}
          onChangeText={setVehNo}
        />
        <Text style={formStyles.label}>Receiver</Text>
        <FCModal 
          modalVisible={receiverVisible}
          setModalVisible={setReceiverVisible}
          title={modalType === 'add' ? 'Add Receiver' : 'Edit Receiver'}
        >  
          <ReceiverAction
            setModalVisible={setReceiverVisible}
            modalType={modalType}
            receiverList={receiverList}
            receiverDropdown={receiverDropdown}
            getReceiverData={getReceiverData}
          />
        </FCModal>
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }}>
          <Button disabled={isLoading} style={formStyles.button} mode="contained" onPress={() => {setReceiverVisible(!receiverVisible); setModalType('add')}}>
            Add Receiver
          </Button>
          <Button disabled={isLoading} style={formStyles.button} mode="contained" onPress={() => {setReceiverVisible(!receiverVisible); setModalType('edit')}}>
            Edit Receiver
          </Button>
        </View>
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
          styles={formStyles}
          receiverData={receiverDropdown}
          handleUpdateReceiverData={handleUpdateReceiverData}
          type='view'
        />
        <Text style={formStyles.label}>Products</Text>
        <FCModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title='Add Products'
        >  
        {addNewProduct ? 
          <AddNewProductForm 
            setModalVisible={setModalVisible}
            setSaveProduct={setSaveProduct}
            saveProduct={saveProduct}
          />  :
          <AddProductForm 
            products={products}
            setProducts={setProducts}
            setModalVisible={setModalVisible}
            productNames={productNames}
          />
          }
        </FCModal>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
          <Button disabled={isLoading} style={formStyles.button} mode="contained" onPress={() => {setAddNewProduct(false);setModalVisible(!modalVisible)}}>
            Add Products
          </Button>
          <Button disabled={isLoading} style={formStyles.button} mode="contained" onPress={() => {setAddNewProduct(true); setModalVisible(!modalVisible); }}>
            Add New Product
          </Button>
        </View>
        {products.length && products.at(0).name !== '' &&
          products.map((product, id) => 
            <ProductCard product={product} key={id} />
          )
        }
        <Button disabled={isLoading} style={formStyles.button} mode="contained" onPress={handleGenerate}>
          Generate
        </Button>
      </View>
    </ScrollView>
  );
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  picker: {
    height: 52,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
    borderColor: '#0a3c90',
  },
  text: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    marginVertical: 12,
    marginBottom: 18,
  },
  label: {
    fontSize: 20, 
    fontWeight:'600',
    marginBottom: 10,
    marginTop: 5,
    borderBottomColor: '#0a3c90',
    borderBottomWidth: 0.8
  }
});

export default FormPage;
