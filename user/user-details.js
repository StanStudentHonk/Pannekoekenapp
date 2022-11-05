import React, {useContext} from 'react';
import { StyleSheet,ScrollView, Text, View, Image, TextComponent } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {Context as AuthContext} from '../context/authContext';
import { useSelector, useDispatch } from 'react-redux';

const UserDetails = () => {
  const state  = useSelector(state => state);
  console.log(state)
  return (
    <ScrollView contentContainerStyle={styles.parentComponent}>
      <View style={styles.pictureComponent}>
        <Image style={styles.image} source={{ uri: state.user.imageUri}} />
      </View>
      <View style={styles.TextComponent}>
        <View style={styles.TextIconComponent}>
          <Text style={styles.name}>
            {state.user.firstname},{" "}
            {getYearDiffWithMonth(state.user.dateOfBirth, new Date())}
          </Text>
        </View>
        <View style={styles.TextIconComponent}>
          <Icon name="home" size={20} color="#000000" />
          <Text style={styles.text}>{state.user.city}</Text>
        </View>
        <View style={styles.TextIconComponent}>
          {state.user.education === "" ? (
             <><Icon name="briefcase" size={18} color="#000000" /><Text style={styles.text}>
             {state.user.job}
           </Text></>
          ) : (
            <><Icon name="graduation-cap" size={18} color="#000000" /><Text style={styles.text}>
                {state.user.education},{state.user.school}
              </Text></>
          )}
       
        </View>
      </View>
      <View style={styles.BioComponent}>
        <Text style={styles.bioText}>{state.user.bio}</Text>
      </View>
      <View style={styles.MomentComponent}>
        <ScrollView>
          <View style={styles.MomentComponentRow}>
            <Image
              style={styles.MomentImage}
              source={require("../assets/party.jpg")}
            />
            <Image
              style={styles.MomentImage}
              source={require("../assets/drinkwithfriend.jpg")}
            />
          </View>
          <View style={styles.MomentComponentRow}>
            <Image
              style={styles.MomentImage}
              source={require("../assets/edgar.jpg")}
            />
            <Image
              style={styles.MomentImage}
              source={require("../assets/elevate.jpg")}
            />
          </View>
          <View style={styles.MomentComponentRow}>
            <Image
              style={styles.MomentImage}
              source={require("../assets/omar-lopez.jpg")}
            />
            <Image
              style={styles.MomentImage}
              source={require("../assets/drew-farwell.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  parentComponent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    fontSize: 17.5,
  },

  bioText: {
    color: "#808080",
    fontWeight: "#thin",
    fontSize: 15.5,
  },

  pictureComponent: {
    flex: 3.5,
  },

  TextComponent: {
 
    padding: "5%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  BioComponent: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: "6.5%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  MomentComponent: {
    // paddingTop: "",
    flex: 3.5,
    flexDirection: 'column'
  },

  MomentComponentRow: {
    flexDirection: 'row',
  },

  MomentImage: {
    borderColor: "white",
    borderWidth: 1,
    flex: 1,
    padding: '1%',
    height: 135,
  },

  TextIconComponent: {
    padding: "1.5%",
    flexDirection: "row",
  },

  image: {
    flex: 1,
    width: "100%",
  },
  title: {},
});

function getYearDiffWithMonth(startDate, endDate) {
  if(typeof startDate === 'string'){
   startDate = new Date(startDate)
  }
  const ms = endDate.getTime() - startDate.getTime();

  const date = new Date(ms);

  return Math.abs(date.getUTCFullYear() - 1970);
}

export default UserDetails;
