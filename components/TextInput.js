import React from 'react'
import { TextInput } from 'react-native-paper';

const TextInputFC = ({
  value,
  onChangeText,
  label,
  disabled,
  multiline,
  numberOfLines,
  style,
  keyboardType
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      disabled={disabled}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={style}
      underlineColor='#0a3c90'
      activeUnderlineColor='#0a3c90'
      outlineColor='#0a3c90'
      activeOutlineColor='#0a3c90'
    />
  )
}

export default TextInputFC