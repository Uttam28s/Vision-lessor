import React from "react";
import { stateData } from "../helper";
import { formStyles } from "../screens/FormPage";
import TextInputFC from "../components/TextInput";
import DropDown from "../components/Dropdown";

const ReceiverForm = ({
  receiverName,
  setReceiverName,
  receiverAddress,
  setReceiverAddress,
  receiverState,
  setReceiverState,
  receiverGSTIN,
  setReceiverGSTIN,
  receiverPan,
  setReceiverPan,
  type,
  receiverData,
  handleUpdateReceiverData
}) => {
  return (
    <>
      {
        type === 'add' ? 
          <TextInputFC
            style={formStyles.text}
            label="Receiver Name"
            value={receiverName}
            onChangeText={setReceiverName}
        /> :
        <DropDown
          title="Select Name"
          value={receiverName}
          setValue={(value) => {setReceiverName(value); handleUpdateReceiverData(value)}}
          style={formStyles.picker}
          data={receiverData}
        />
      }
      <TextInputFC
        style={formStyles.text}
        label="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
        multiline
        numberOfLines={3}
        disabled={type === 'view'}
      />
      <DropDown
        title="Select State"
        value={receiverState}
        setValue={setReceiverState}
        style={formStyles.picker}
        data={stateData}
        disabled={type === 'view'}
      />
      <TextInputFC
        style={formStyles.text}
        label="Receiver GSTIN No."
        value={receiverGSTIN}
        onChangeText={setReceiverGSTIN}
        disabled={type === 'view'}
      />
      <TextInputFC
        style={formStyles.text}
        label="Receiver PAN No."
        value={receiverPan}
        onChangeText={setReceiverPan}
        disabled={type === 'view'}
      />
    </>
  );
};

export default ReceiverForm;
