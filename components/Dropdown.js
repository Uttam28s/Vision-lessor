import React from 'react';
import { Picker } from 'react-native-woodpicker'

const DropDown = ({
  value,
  setValue,
  title,
  style,
  data,
  disable,
}) => {
  return (
    <Picker
        item={value}
        items={data}
        onItemChange={(item) => setValue(item)}
        title={title}
        placeholder={title}
        isNullable={true}
        style={style}
      //backdropAnimation={{ opacity: 0 }}
      // mode="dropdown"
      //isNullable
      disable={disable}
    />
  );
}

export default DropDown;