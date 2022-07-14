import React from 'react';
import { Alert, StyleSheet,TouchableOpacity,View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Approvisionnement from './approvisionnement/Approvisionnement';
import Ventes from './ventes/Ventes';
import Products from './products/Products';
import ToolbarComponent from './ToolbarComponent';
import { primaryColor } from '../utils/ThemeColors';
import ProductsList from './products/ProductsList';
import AddProduct from './products/AddProduct';

//Screen names
const homeName = "Produits";
const entrees = "Approvisionnements";
const sorties = "Ventes";
// const addProduct = "addProduct";

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <>
      <View >
        <ToolbarComponent/>
      </View>
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
            // tabBarButton:(props)=> {
            //   console.log(props)
            //   return <TouchableOpacity {...props} ></TouchableOpacity>
            // },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                iconName = focused ? 'cube' : 'cube-outline';

                } else if (rn === entrees) {
                iconName = focused ? 'add-circle' : 'add-circle-outline';

                } else if (rn === sorties) {
                iconName = focused ? 'remove-circle' : 'remove-circle-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
            tabBarOptions={{
            activeTintColor: primaryColor,
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
            }}>

            <Tab.Screen name={homeName} component={Products} />
            <Tab.Screen name={entrees} component={Approvisionnement} />
            <Tab.Screen name={sorties} component={Ventes} />

            {/* <Tab.Screen  name={addProduct} component={AddProduct} /> */}

        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container:{

  }
})

export default HomePage;