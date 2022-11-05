import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../context/authActions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default function SessionOverview() {
  const dispatch = useDispatch();

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
        style={{
          backgroundColor: "#AD40AF",
          padding: 20,
          width: "90%",
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => dispatch(signout())}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            fontWeight: "bold",
            // fontFamily: "Roboto-MediumItalic",
          }}
        >
          Bekijk authenticatie flow opnieuw
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
      </View>
  );
}
