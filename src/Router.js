import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "./pages/Jobs"
import Favorites from "./pages/Favorites"
import Details from "./pages/Details";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function JobsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Jobs' component={Jobs} />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>

    )
}

function Router () {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="JobsStack" component={JobsStack} 
                            options={{ headerShown: false , title:'Jobs', 
                            tabBarIcon: ({color, size }) => {
                                return <Icon name={'home'}
                                 size={size} color={color} />}}}
                 />
                <Tab.Screen name='Favorites' component={Favorites} 
                options={{tabBarIcon: ({color, size }) => {
                    return <Icon name={'heart'}
                     size={size} color={color} />}}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router

/* <NavigationContainer> yapısını sadece routerda kullanıp jobstack functıon da 
kullanmamamızın sebebi iç içe yani nested yapılarda sadece ana yapıda 
<NavigationContainer> kullanılmalıdır.  */