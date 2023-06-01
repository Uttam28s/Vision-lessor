import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { getConditionalData } from "../helper/FirebaseHelper";
import BillCard from "../Pages/BillCard";
import { generateUniqueCode } from "../helper";

const HomePage = ({ navigation, route }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getConditionalData("bills").then((data) => setCardData(data));
  }, []);

  useEffect(() => {
    if(route?.params?.cardData) {
      setCardData(route?.params?.cardData);
    }
  }, [route?.params?.cardData]);

  const handleAddCard = () => {
    navigation.navigate("Create Bill", { cardData: cardData });
  };

  const addCardToList = (card) => {
    setCardData([...cardData, card]);
  };

  const renderCard = ({ item }) => (
    <>
    {item && item?.products?.length ?
      <BillCard item={item} key={generateUniqueCode()}/> :
      <Text>No data</Text> }
    </>
  )

  return (
    <View style={styles.container}>
      {cardData.length ? 
      <FlatList
        data={cardData}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.cardList}
      /> : <Text>No data available</Text>
    }
      <TouchableOpacity style={styles.addButton} onPress={handleAddCard}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardList: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 8,
  },
  addButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#2a3cffb0",
    borderRadius: 50,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
  },
});

export default HomePage;
