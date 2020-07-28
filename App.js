import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllScreen from './AllScreen';
import CompletedScreen from './CompletedScreen';
import ActiveScreen from './ActiveScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HeaderTitle =  () => <Text style={{alignItems: 'center', justifyContent: 'center'}}>Header title</Text>
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Completed') {
            iconName = focused
              ? "done"
              : "done";
          } 
          else if (route.name === 'All') {
            iconName = focused ? "add-circle-outline"  : "add-circle-outline" ;
          }
          else if (route.name === 'Active') {
            iconName = focused ? "bars" : "bars";
            return <AntDesign name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Completed" component={CompletedScreen}></Tab.Screen>
        <Tab.Screen name="All" component={AllScreen}></Tab.Screen>
        <Tab.Screen name="Active" component={ActiveScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;