import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import SessionOverview from "../overview/sessionOverview";
import ActiveMoment from "../moments/activeMoment";
import UserDetails from "../user/user-details";

//Screen names
const homeName = "In de buurt";
const detailsName = "Uitnodigen";
const settingsName = "profiel";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={UserDetails}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "map" : "map-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "fast-food" : "fast-food-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle : {height: 0},
          tabBarActiveTintColor : "#6E2FFF"
        }
        )}    
      >
        <Tab.Screen name={homeName} component={SessionOverview} />
        <Tab.Screen name={detailsName} component={ActiveMoment} />
        <Tab.Screen name={settingsName} component={UserDetails} />
      </Tab.Navigator>
  );
}

export default MainContainer;
