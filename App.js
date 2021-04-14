/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import PredimScreen from './src/screens/Predim/index';
import PredimPoutre from './src/screens/Predim/Poutre';
import PredimPoteau from './src/screens/Predim/Poteau';
import PredimDalle from './src/screens/Predim/Dalle';
import PredimSemelle from './src/screens/Predim/Semelle';
import DCharges from './src/screens/DCharges';
import MDM from './src/screens/MDM';
import TeamDetail from './src/screens/TeamDetail';
import Team from './src/screens/Team';
import About from './src/screens/About';
import Drawer from './src/screens/Drawer';
import Dimensionnement from './src/screens/Dimensionnement';
import DimPoutre from './src/screens/Dimensionnement/Poutre';


const Stack = createStackNavigator();


function Menu () {
  let { navigate } = useNavigation();
  return (
      <TouchableOpacity onPress={() => {
        navigate('Drawer')
      }}>
        <View>
          <Image style={{ width: 50, height: 50 }} source={require('./src/assets/images/menu.jpg')} />
        </View>
      </TouchableOpacity>
  )
}


const App  = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "GC High-Tech",
            headerLeft: () => <Menu />,
            headerLeftContainerStyle: {
                marginLeft: 8
            }
        }}
         name="Home" component={HomeScreen} />
        <Stack.Screen name="MDM" component={MDM} />
        <Stack.Screen name="Predim" options={{ title: 'Pré-dimensionnement' }} component={PredimScreen} />
        <Stack.Screen name="PredimPoutre" component={PredimPoutre} />
        <Stack.Screen name="PredimPoteau" component={PredimPoteau} />
        <Stack.Screen name="PredimDalle" component={PredimDalle} />
        <Stack.Screen name="PredimSemelle" component={PredimSemelle} />
        <Stack.Screen name="Dimensionnement" options={{ title: 'Dimensionnement' }} component={Dimensionnement} />
        <Stack.Screen name="DimPoutre" options={{ title: 'Dimensionnement de la Poutre' }} component={DimPoutre} />
        <Stack.Screen name="DCharges" component={DCharges} />
        <Stack.Screen name="Drawer" options={{ title: 'Menu' }} component={Drawer} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="TeamDetail" component={TeamDetail} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
