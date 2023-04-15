import { StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lista from './src/telas/Lista';

const Stack = createNativeStackNavigator();

export default function App() {

  function rodar(){
    Alert.alert('ola')
  }

  return (
    <NavigationContainer>
    <Stack.Navigator styles={styles.container} initialRouteName="Lista" >
      <Stack.Screen options={{headerShown: false}} name="Lista" component={Lista} />
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
