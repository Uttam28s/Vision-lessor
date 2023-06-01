import React, { useState } from "react";
import { formStyles } from "../screens/FormPage";
import TextInputFC from "../components/TextInput";
import { View, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";
import { addData } from "../helper/FirebaseHelper";

const AddNewProductForm = ({setModalVisible, setSaveProduct, saveProduct}) => {
  const [productName, setProductName] = useState("");
  const [productHsn, setProductHsn] = useState("");
  const [productUnits, setProductUnits] = useState([{ label: "", value: "" }]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddNewUnit = () => {
    setProductUnits([...productUnits, { label: "", value: "" }]);
  };

  const handleAddUnits = (value, id) => {
    const updatedProducts = [...productUnits];
    updatedProducts[id] = { label: value, value: value };
    setProductUnits(updatedProducts);
  };

  const handleSubmit = async() => {
    setIsLoading(true);
    const productData = {
      label: productName,
      value: productName,
      hsn: productHsn,
      unit: productUnits,
    };

    try {
      await addData("products", productData);
      console.log("Product added successfully!");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error adding buyer:", error);
    }
    setModalVisible(false)
    setSaveProduct(!saveProduct)
  };

  return (
    <>
      <View
        style={{ backgroundColor: "#dcdcdcd9", padding: 8, borderRadius: 10 }}
      >
        <TextInputFC
          style={formStyles.text}
          label="Product Name"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInputFC
          style={formStyles.text}
          label="Product HSN"
          value={productHsn}
          onChangeText={setProductHsn}
        />
        <Text style={formStyles.label}>Units</Text>
        <View>
          {productUnits.map((product, id) => (
            <TextInputFC
              style={formStyles.text}
              label={`Unit ${id + 1}`}
              value={product.label}
              key={id}
              onChangeText={(value) => handleAddUnits(value, id)}
            />
          ))}
          <Button style={{margin: 15}} mode="contained" onPress={handleAddNewUnit}>
            Add Unit
          </Button>
        </View>
      </View>
      <Button
        disabled={isLoading}
        style={{ marginTop: 20 }}
        mode="contained"
        onPress={handleSubmit}
      >
        Save
      </Button>
    </>
  );
};

export default AddNewProductForm;
