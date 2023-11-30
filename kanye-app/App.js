import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from './src';
import Sobre from './src/sobre';
import Top from './src/tops';
import Kanye from './src/kanye';
import Translate from './src/trad';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'ios-book',
  },
  Kanye: {
    name: 'ios-search',
  },
  Top: {
    name: 'ios-star',
  },
  Translate: {
    name: 'ios-pencil',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#126afe',
        activeTintColor: '#e1b715',
        inactiveBackgroundColor: 'ligthgray',
        inactiveTintColor: 'blue',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Kanye" component={Kanye} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Translate" component={Translate} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Top Frases" component={Top} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
