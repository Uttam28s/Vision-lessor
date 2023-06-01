import React from 'react'
import { View } from 'react-native'
import { DatePicker } from 'react-native-woodpicker'

const DatePickerFC = ({
  invoiceDate,
  setInvoiceDate,
  styles
}) => {
  const handleText = () => invoiceDate
      ? invoiceDate.toDateString()
      : "No value Selected";

  return (
    <View>
      <DatePicker
        value={invoiceDate}
        onDateChange={(date) => setInvoiceDate(date)}
        title="Date Picker"
        text={handleText()}
        isNullable={false}
        iosDisplay="inline"
        //backdropAnimation={{ opacity: 0 }}
        //minimumDate={new Date(Date.now())}
        //maximumDate={new Date(Date.now()+2000000000)}
        //iosMode="date"
        //androidMode="countdown"
        //iosDisplay="spinner"
        androidDisplay="spinner"
        style={styles}
        //locale="fr"
      />
    </View>
  )
}

export default DatePickerFC