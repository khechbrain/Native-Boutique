import React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigate} from 'react-router-native';

const ToolbarComponent = ({ navigation, route }) => {
  const navigate = useNavigate()
    return (
        <Toolbar>
          <ToolbarBackAction onPress={()=>navigate(-1)}></ToolbarBackAction>
          {/* <Ionicons name='arrow-back-outline' size={32} color='white' onPress={()=>navigate(-1)} /> */}
          <ToolbarContent
            title="Ma boutique"
          />
        </Toolbar>
    );
};

export default ToolbarComponent;