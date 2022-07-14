import React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { listProduct_KEY } from './HomePage';

const ToolbarComponent = ({ navigation, route,title }) => {
    return (
        <Toolbar>
          {/* <ToolbarBackAction onPress={()=> navigation.goBack() }></ToolbarBackAction> */}
          {
            route.name === listProduct_KEY?
              <Ionicons style={styles.icon} name='menu' size={32} color='white' onPress={()=>navigation.goBack()} />
              :
              <Ionicons style={styles.icon} name='arrow-back-outline' size={24} color='white' onPress={()=>navigation.goBack()} />
          }
          <ToolbarContent
            title= {title || "Ma boutique"}
          />
        </Toolbar>
    );
};
const styles = StyleSheet.create({
  icon:{
    // fontWeight:'bold',
    marginLeft:15
  }
})
export default ToolbarComponent;