import React from 'react';
import { Alert, StyleSheet,TouchableOpacity,View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { primaryColor } from '../utils/ThemeColors';
import ProductsList from './products/ProductsList';
import AddProduct from './products/AddProduct';
import DetailsProduct from './products/DetailsProduct';
import ListApprovisionnement from './approvisionnement/ListApprovisionnement';
import AddApprovisionnement from './approvisionnement/AddApprovisionnement';
import ListVentes from './ventes/ListVentes';
import AddVente from './ventes/AddVente';

//Screen names
export const listEntree_KEY = "Entrés";
export const addEntree_KEY = "addEntree";

export const listSorties_KEY = "Sorties";
export const addSortie_KEY = "addSortie";

export const listProduct_KEY = "Produits";
export const addProduct_KEY = "addProduct";
export const detailsProduct_KEY = "detailsProduct";

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={listProduct_KEY}
            screenOptions={({ route }) => ({
            tabBarButton:(props)=> {
              let rn = props.children.props.children[0].props.route.name
              if( rn ===  listProduct_KEY || rn ===  listEntree_KEY || rn ===  listSorties_KEY){
                return <TouchableOpacity {...props} ></TouchableOpacity>
              }else{
                return <TouchableOpacity ></TouchableOpacity>
              }
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === listProduct_KEY) {
                iconName = focused ? 'cube' : 'cube-outline';

                } else if (rn === listEntree_KEY) {
                iconName = focused ? 'add-circle' : 'add-circle-outline';

                } else if (rn === listSorties_KEY) {
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
            }}
            >
            <Tab.Screen name={listProduct_KEY} component={ProductsList} />
            <Tab.Screen  name={addProduct_KEY} component={AddProduct} />
            <Tab.Screen  name={detailsProduct_KEY} component={DetailsProduct} />

            <Tab.Screen name={listEntree_KEY} component={ListApprovisionnement} />
            <Tab.Screen name={addEntree_KEY} component={AddApprovisionnement} />

            <Tab.Screen name={listSorties_KEY} component={ListVentes} />
            <Tab.Screen name={addSortie_KEY} component={AddVente} />


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