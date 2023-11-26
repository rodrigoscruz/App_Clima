import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';



import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Page3 from './src/pages/Page3';
import Page4 from './src/pages/Page4';
import Page5 from './src/pages/Page5';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const icons = {
  Home: {
    name: 'ios-home'
  }, 
  Sobre:{
    name: 'ios-people'
  },
  Page3:{
    name: 'ios-call'
  },
  Page4:{
    name: 'ios-car'
  },
  Page5:{
    name: 'ios-cloud'
  } 
};


function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        activeBackgroundColor: 'lightgray',
        activeTintColor: 'red',
        inactiveBackgroundColor: 'yellow',
        inactiveTintColor: 'blue'
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Page4" component={Page4} />
        <Tab.Screen name="Page5" component={Page5} />
      </Tab.Navigator>
  );
}


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}