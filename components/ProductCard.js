import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { priceCalculator } from "../helper";

const styles = StyleSheet.create({
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "auto",
    flexDirection: "row",
    gap: 14,
    marginBottom: 20,
    backgroundColor: "#dcdcdcd9",
    padding: 8,
    borderRadius: 10,
  },
  label: {
    fontWeight: 600,
  },
});

const ProductCard = ({ product, type }) => {
  const assembleValue = priceCalculator.assembleValue(
    product?.quantity,
    product?.price
  );
  const igst = priceCalculator.igst(assembleValue, product?.gst);

  return (
    <View style={styles.cardWrapper}>
      <View>
        <Text style={styles.label}>Product Name</Text>
        <Text>{product?.name?.label || "-"}</Text>
      </View>
      {!type && (
        <View>
          <Text style={styles.label}>HSN/SAC</Text>
          <Text>{product?.hsn || "-"}</Text>
        </View>
      )}
      <View>
        <Text style={styles.label}>Quantity in no.</Text>
        <Text>{product?.quantity || "-"}</Text>
      </View>
      {!type && (
        <View>
          <Text style={styles.label}>Unit</Text>
          <Text>{product?.unit?.label || "-"}</Text>
        </View>
      )}
      {!type && (
        <View>
          <Text style={styles.label}>Qty in Pcs/KG</Text>
          <Text>{product?.pice || "-"}</Text>
        </View>
      )}
      <View>
        <Text style={styles.label}>Rate</Text>
        <Text>{product?.price || "-"}</Text>
      </View>
      <View>
        <Text style={styles.label}>Assble. Value</Text>
        <Text>{assembleValue || "-"}</Text>
      </View>
      <View>
        <Text style={styles.label}>GST%</Text>
        <Text>{product?.gst || "-"}</Text>
      </View>
      <View>
        {product?.isIGSTIN ? (
          <View>
            <Text style={styles.label}>IGST</Text>
            <Text>{igst || "-"}</Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row", gap: 14 }}>
            <View>
              <Text style={styles.label}>SGST</Text>
              <Text>{(igst / 2).toFixed(2) || "-"}</Text>
            </View>
            <View>
              <Text style={styles.label}>CGST</Text>
              <Text>{(igst / 2).toFixed(2) || "-"}</Text>
            </View>
          </View>
        )}
      </View>
      <View>
        <Text style={styles.label}>Total</Text>
        <Text>
          {(parseFloat(assembleValue) + parseFloat(igst)).toFixed(2) || "-"}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
