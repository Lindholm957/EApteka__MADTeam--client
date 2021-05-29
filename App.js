import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "./src/routes/loginView/LoginView";
import MainMenuNavigator from "./src/routes/mainScreen/MainMenuNavigator";
import Reminder from "./src/routes/mainScreen/reminders/Reminders";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();

const userIsAuthorized = 1;

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name='HomeStack' component={MainMenuNavigator}/>
            {/*<Stack.Screen name="LoginView" component={LoginView} options={{headerShown: false}}/>*/}
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
