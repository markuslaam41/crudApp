// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from './screens/AddUserScreen';
import UserScreen from './screens/UserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import firebase from "firebase/compat";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const firebaseConfig = {
    apiKey: "AIzaSyBOlpERlaQemO--7xR3GlJs1w_WktVThq4",
    authDomain: "crudapp-727b3.firebaseapp.com",
    projectId: "crudapp-727b3",
    storageBucket: "crudapp-727b3.appspot.com",
    messagingSenderId: "651502613423",
    appId: "1:651502613423:web:bd95c36c7ab7b93bb4355a"
};


// Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
// Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function MyStack() {
  return (
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen
            name="AddUserScreen"
            component={AddUserScreen}
            options={{ title: 'Add User' }}
        />
        <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{ title: 'Users List' }}
        />
        <Stack.Screen
            name="UserDetailScreen"
            component={UserDetailScreen}
            options={{ title: 'User Detail' }}
        />
      </Stack.Navigator>
  );
}
export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name={'Add'} component={MyStack} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />)}}/>
              <Tab.Screen name={'User'} component={UserScreen} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />)}}/>
          </Tab.Navigator>
      </NavigationContainer>
  );

}