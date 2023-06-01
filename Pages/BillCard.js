import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCard";
import DownloadPdf from "./DownloadPdf";

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 20,
    backgroundColor: "#dcdcdcd9",
    padding: 8,
    borderRadius: 10,
    gap: 14,
  },
  invoiceWrapper:{
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    flexDirection: "row",
    gap: 14,
  },
  label: {
    fontWeight: 600,
  },
  fullWidth: {
    width: "100%",
    textAlign: 'center'
  },
  largeFont: {
    fontSize: 18
  },
});

const BillCard = ({ item }) => {
  return (
    <View style={styles.cardWrapper}>
    <View style={styles.invoiceWrapper}>
      <View>
        <Text style={styles.label}>Invoice No</Text>
        <Text>{item?.invoiceNo || "-"}</Text>
      </View>
      <View>
        <Text style={styles.label}>Receiver Name</Text>
        <Text>{item?.receiverName?.label || "-"}</Text>
      </View>
      <View>
        <Text style={styles.label}>Receiver State</Text>
        <Text>{item?.receiverState || "-"}</Text>
      </View>
      <View>
        <Text style={[styles.label, styles.largeFont]}>Total Amount</Text>
        <Text style={[styles.label, styles.largeFont]}>{item?.totalSum || "-"}</Text>
      </View>
    </View>
    {item?.products &&
        item?.products.length &&
        item?.products.map((product, id) => (
          <View style={styles.invoiceWrapper}>
            <Text style={[styles.label, styles.fullWidth, styles.largeFont]}>- Product {id + 1} -</Text>
            <ProductCard product={product} type='home'/>
          </View>
        ))}
        <DownloadPdf bill={item}/>
    </View>
  );
};

export default BillCard;
