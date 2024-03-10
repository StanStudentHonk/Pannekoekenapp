import {Text, View, TextInput, Pressable, Image, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useContext, useEffect } from 'react';
import * as Progress from 'react-native-progress';
import  {Formik}  from 'formik';
import axios from 'axios';
import styles from '../styles';
import {Context as AuthContext} from '../context/authContext';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../context/authActions';
import * as ImagePicker from 'expo-image-picker'

axios.defaults.baseURL = "http://192.168.2.12:8080/api/v1"

const ButtonForm = (props) => {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.formButton} onPress={onPress}>
        <Text style={styles.formText}>{title}</Text>
      </Pressable>
    );
}


const UserForm = ({navigation}) => {
    const dispatch = useDispatch();
    const [getProgression, setProgression] = useState(0);
 
    let stepArray = [<UserFormName/>,<UserFormDateOfBirth/>, <UserFormGender/>, <UserFormSchool/>,<UserFormCity/>,<UserFormBio/>, <UserFormImage/>]
    return (

      <View style={styles.container}>
        <Progress.Bar style={styles.progresbar} progress={getProgression * 0.125 + 0.125} animated={true} width={null} color={"#AD40AF"} borderWidth={0} unfilledColor={"#989898"}/>
        <Formik
          initialValues={{
            firstname: "",
            email: "",
            bio: "",
            city: "",
            education: "",
            job: "",
            school: "",
            gender: "MAN",
            imageUri: null,
            dateOfBirth: new Date(),
          }}
          onSubmit={(values) => {
            if(getProgression <= 5){
                setProgression(1 + getProgression)
            }
            else{
              axios.post('/users', {
                firstname: values.firstname,
                email: "test@gmaill",
                city: values.city,
                gender: values.gender,
                school: values.school,
                education: values.education,
                dateOfBirth: getDateString(values.dateOfBirth),
                bio: values.bio
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              console.log(values)
              dispatch(signin(values))
              // signin({email: values.firstname, password: values.school});
            }
          }}
        >
          {(props) => (
            AddExtraProps(stepArray[getProgression], props)
          )}
        </Formik>
      </View>
    );
}

function AddExtraProps(Component, extraProps) {
    return <Component.type {...Component.props} {...extraProps} />;
}

const UserFormName = (props) => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitel}>Mijn voor-naam is</Text>
        <TextInput
          style={styles.input}
          placeholder="Voornaam"
          onChangeText={props.handleChange("firstname")}
          value={props.values.firstname}
        />
        <Text style={styles.formExplainText}>
          Dit is hoe je naam wordt weergegeven op MeryMeeting. Je kunt dit later
          niet meer wijzigen
        </Text>

        <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
      </View>
    );
} 

const UserFormCity = (props) => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitel}>Mijn woon-plaats is</Text>
        <TextInput
          style={styles.input}
          placeholder="Woonplaats"
          onChangeText={props.handleChange("city")}
          value={props.values.city}
        />
        <Text style={styles.formExplainText}>
          Dit is de plaats waar je woonachtig bent. Je kan later altijd nog je woonplaats aanpassen
        </Text>

        <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
      </View>
    );
}

const UserFormSchool = (props) => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitel}>Dagelijks ben ik bezig met</Text>
        <TextInput
          style={styles.inputSmall}
          placeholder="Op welke school zit je?"
          onChangeText={props.handleChange("school")}
          value={props.values.school}
        />
        <TextInput
          style={styles.inputSmall}
          placeholder="Welke opleiding doe je?"
          onChangeText={props.handleChange("education")}
          value={props.values.education}
        />
         <Text style={styles.formExplainText}>
          Zit je niet meer op school? Vul hier dan niks in.
        </Text>
        <TextInput
          style={styles.inputSmall}
          placeholder="Wat voor werk doe je?"
          onChangeText={props.handleChange("job")}
          value={props.values.job}
        />
        <Text style={styles.formExplainText}>
          Dit is informatie over je dagelijks leven. Deze informatie is altijd aan te passen.
        </Text>

        <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
      </View>
    );
}

const UserFormGender = (props) => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitel}>Ik ben een</Text>
        <Picker
          selectedValue={props.values.gender}
          onValueChange={(itemValue, itemIndex) => props.setFieldValue('gender', itemValue)}
        >
          <Picker.Item label="MAN" value="MAN" />
          <Picker.Item label="VROUW" value="VROUW" />
          <Picker.Item label="GEK" value="GEK" />
        </Picker>
        <Text style={styles.formExplainText}>
          Je gender is op elk moment aan te passen.
        </Text>

        <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
      </View>
    );
}

const UserFormDateOfBirth = (props) => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.formTitel}>Ik ben ge-boren op</Text>
        <DateTimePicker
          style={styles.datePicker}
          onChange = {(event, selectedDate) => props.setFieldValue('dateOfBirth', selectedDate)}
          mode={"date"}
          value={props.values.dateOfBirth}
        />
        <Text style={styles.formExplainText}>
          Dit is de plaats waar je woonachtig bent. Je kan later altijd nog je
          woonplaats aanpassen
        </Text>

        <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
      </View>
    );
}

const UserFormBio = (props) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitel}>Een stukje over mijzelf</Text>
      <TextInput
        style={styles.inputLarge}
        multiline={true}
        numberOfLines={8}
        placeholder="Dit is een stukje over jezelf"
        onChangeText={props.handleChange("bio")}
        value={props.values.bio}
      />
      <Text style={styles.formExplainText}>
        Dit stukje over jezelf is door iedereen te zien. Dit kan je altijd aanpassen
      </Text>

      <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
    </View>
  );
};

const UserFormImage = (props) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.Images,
      allowsEditing : true
    })
    console.log(result)

    if(!result.cancelled){
      props.setFieldValue('imageUri', result.uri)
      setImage(result.uri)
    }
  }
  
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitel}>Selecteer je profiel foto</Text>
      <View style={{ marginBottom: "10%", marginTop: "10%" }}>
        <Button color="#AD40AF" title="Kies uit gallerij" onPress={pickImage} />
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              marginBottom: "10%",
              marginTop: "10%",
              width: 275,
              height: 275,
            }}
          />
        )}
      </View>

      <Text style={styles.formExplainText}>
        Dit is je profiel foto deze is voor iedereen te zien. Je profiel foto
        kan je altijd aanpassen
      </Text>
      <ButtonForm title="Doorgaan" onPress={props.handleSubmit} />
    </View>
  );
};

function getDateString(date){
  let month = date.getMonth()
  let day = date.getDay()
  if(date.getMonth() < 10){
    month = "0" + date.getMonth()
  }
  if(date.getDay() < 10){
    day = "0" + date.getDay()
  }
  let dateString = date.getFullYear() + "-" + month + "-" + day
  console.log(dateString)
  return dateString
}




export {UserForm, ButtonForm}