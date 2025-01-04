import { NavigationContainer } from '@react-navigation/native';
import { Home, Profile } from './components';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App 