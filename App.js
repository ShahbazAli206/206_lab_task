import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/Home';
import TitleBar from './Screens/titlebar';
import ProfileScreen from './Screens/profiles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="aqua"
        barStyle="dark-content"
      />
      <Tab.Navigator  >
        <Tab.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
          headerTitle: () => <TitleBar title="Home" />,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={25} color={color} />
          ), })} />

        <Tab.Screen name="Profile" component={ProfileScreen} options={({ navigation }) => ({
          headerTitle: () => <TitleBar title="Profiles" />,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} color={color} />
          ), })} />
      </Tab.Navigator>
    </NavigationContainer>
  );}

const styles = StyleSheet.create({
  container: {  flex: 1,backgroundColor: '#b2b2b2',alignItems: 'center',justifyContent: 'center',}, 
});
