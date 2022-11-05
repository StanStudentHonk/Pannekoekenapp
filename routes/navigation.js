import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {UserForm} from "../user/user-form";
import MainContainer from "./mainNavigationBar"
import AuthStack from "./AuthNavigation";



const screens = {
    AuthStack: {
        screen: AuthStack,
        navigationOptions:{
        }
        

    },
    MainContainer: {
        screen: MainContainer,
        navigationOptions:{
            title: ""
        }
    }
}

const HomeStack = createStackNavigator(screens,{ 
    defaultNavigationOptions: {
        headerStyle: {height: 0},
        headerLeft: ()=> null,
    },
})

export default createAppContainer(HomeStack)
