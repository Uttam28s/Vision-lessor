import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputFC from './TextInput';
import { Button, Switch } from 'react-native-paper';
import DropDown from './Dropdown';
import { getConditionalData } from '../helper/FirebaseHelper';
import { priceCalculator } from '../helper';

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    backgroundColor: '#ffffff',
    width:'100%'
  },
  button: {
    marginVertical: 12,
    marginBottom: 18,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    height: 52,
    width: '100%',
    minWidth: '100%',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
    borderColor: '#0a3c90',
  },
  formWrapper:{
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
    backgroundColor: '#dcdcdcd9',
    padding: 8,
    borderRadius: 10
  },
  halfDropdown: {
    minWidth: '48%'
  },
  halfText:{
    width: '48%'
  },
  productWrapper: {

  }
});


const AddProductForm = ({
  products,
  setProducts,
  setModalVisible,
  productNames
}) => {
  
  const handleAddProduct = () => {
    const newProduct = {
      name: '',
      hsn: '',
      quantity: '',
      unit: '',
      pice:'',
      price: '',
      gst:'',
      isIGSTIN: false,
    };
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    const updatedData = products.filter((data,ind) =>  ind !== id);
    setProducts(updatedData)
  }

  const findProduct = (data) => {
    if(data){
      return productNames.find(val => val.label === data);
    }
    return ''
  }

  const handleProductChange = (index, field, value) => {
    if(field === 'name') {
      const updatedProducts = [...products];
      updatedProducts[index]['hsn'] = findProduct(value?.label)?.hsn;
      updatedProducts[index]['name'] = {label: value?.label, value: value?.value};
      setProducts(updatedProducts);
    } else if(field === 'gst') {
      const updatedProducts = [...products];
      const assembleValue = priceCalculator.assembleValue(updatedProducts[index]?.quantity,updatedProducts[index]?.price);
      const assembleIgst = priceCalculator.igst(assembleValue, value);
      const totalProductPrice = (parseFloat(assembleValue) + parseFloat(assembleIgst)).toFixed(2) || 0
      updatedProducts[index]['assembleValue'] = assembleValue;
      updatedProducts[index]['assembleIgst'] = assembleIgst;
      updatedProducts[index]['totalProductPrice'] = totalProductPrice;
      updatedProducts[index]['gst'] = value;
      setProducts(updatedProducts);
    } else {
      const updatedProducts = [...products];
      updatedProducts[index][field] = value;
      setProducts(updatedProducts);
    }
  };

  const handleSubmit = () => {
    // const assembleValue 
    setModalVisible(false)
  };

  return (
    <View style={styles.productWrapper}>
      {products.map((product, index) => (
        <View style={styles.formWrapper} key={index}>
          <DropDown
            data={productNames}
            title="Product Name"
            value={product?.name}
            setValue={value => handleProductChange(index, 'name', value)}
            style={styles.picker}
          />
          <TextInputFC
            style={[styles.text, styles.halfText]}
            label="HSN/SAC"
            disabled
            value={findProduct(product?.name?.label)?.hsn}
            onChangeText={value => handleProductChange(index, 'hsn', value)}
          />
          <TextInputFC
            style={[styles.text, styles.halfText]}
            label="Quantity"
            value={product?.quantity?.toString()}
            onChangeText={value => handleProductChange(index, 'quantity', value)}
            keyboardType="numeric"
          />
          {product?.name?.label && 
            <DropDown
              data={findProduct(product?.name?.label)?.unit}
              title="Unit"
              value={product?.unit}
              setValue={value => handleProductChange(index, 'unit', value)}
              style={[styles.picker, styles.halfDropdown]}
            />
          }
          <TextInputFC
            style={[styles.text, styles.halfText]}
            label="Qty In PCS / KG"
            value={product?.pice?.toString()}
            onChangeText={value => handleProductChange(index, 'pice', value)}
            keyboardType="numeric"
          />
          <TextInputFC
            style={[styles.text, styles.halfText]}
            label="Rate"
            value={product?.price?.toString()}
            onChangeText={value => handleProductChange(index, 'price', value)}
            keyboardType="numeric"
          />
          <TextInputFC
            style={[styles.text, styles.halfText]}
            label="GST %"
            value={product?.gst?.toString()}
            onChangeText={value => handleProductChange(index, 'gst', value)}
            keyboardType="numeric"
          />
          <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-around', width:'30%' }}>
            <Text style={{ fontWeight: 600 }}>IGST</Text>
            <Switch value={product?.isIGSTIN} color="#2a3cffb0" onValueChange={value => handleProductChange(index, 'isIGSTIN', value)} />
          </View>
          {products.length > 1 &&
            <Button style={styles.button} mode="contained" onPress={() => handleDeleteProduct(index)}>
              Delete
            </Button>
          }
        </View>
      ))}
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} mode="contained" onPress={handleAddProduct}>
          Add Product
        </Button>
        <Button style={styles.button} mode="contained" onPress={handleSubmit}>
          Submit
        </Button>
      </View>
    </View>
  );
};

export default AddProductForm;
