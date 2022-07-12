import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import {useNavigate} from 'react-router-native';
import ActionRedux from '../../redux/action';

const ListApprovisionnement = () => {
    const navigate = useNavigate()
    const [approvisionnements,setApprovisionnements] = useState([])

    useEffect(()=>{
        ActionRedux.approvionnements.getApprovisionnementList()
        .then((data)=>{
            setApprovisionnements(data)
        })
    },[])

    return (
        <View>
            <Button title='Faire un entrée' onPress={()=>navigate('add')}></Button>
            <View>
                <Text>{"\n"}Liste des approvisionnements{"\n"} </Text>
                {
                    approvisionnements.map((appr,index)=>{
                        return(
                            <View key={index}>
                                <Text>{appr.product_id} {appr.qte}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default ListApprovisionnement;