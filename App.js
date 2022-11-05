import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Text, View, TextInput, Pressable, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import SessionOverview from "./overview/sessionOverview";
import ActiveMoment from "./moments/activeMoment";
import UserDetails from "./user/user-details";
import * as React from 'react';
import OnboardingScreen from './screens/OnboardingScreen';
import {store, persistor} from './context/authStore';
import { UserForm } from './user/user-form';
import { useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// import {Provider as AuthProvider, Provider} from './context/authContext';
// import {Context as AuthContext} from './context/authContext';
import {Provider} from 'react-redux'

//auth flow
const AuthStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="start"
        component={OnboardingScreen}
      />
       <AuthStack.Screen
        options={{headerShown: false}}
        name="userform"
        component={UserForm}
      />
    </AuthStack.Navigator>
  );
}


// main app
const homeName = "In de buurt";
const detailsName = "Uitnodigen";
const settingsName = "profiel";

const Tab = createBottomTabNavigator();
function HomeFlow() {
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
          tabBarActiveTintColor : "#AD40AF"
        }
        )}    
      >
        <Tab.Screen name={homeName} component={SessionOverview} />
        <Tab.Screen name={detailsName} component={ActiveMoment} />
        <Tab.Screen name={settingsName} component={UserDetails} />
      </Tab.Navigator>
  );
}

// start up app
const Stack = createNativeStackNavigator();
function App() {
  const state  = useSelector(state => state);
  console.log(state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.user === null ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Auth"
              component={AuthFlow}
            />
          </>
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeFlow}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
