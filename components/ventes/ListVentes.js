import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import {useNavigate} from 'react-router-native';
import ActionRedux from '../../redux/action';

const ListVentes = () => {
    const navigate = useNavigate()
    const [ventes,setVentes] = useState([])

    useEffect(()=>{
        ActionRedux.ventes.getVentesList()
        .then((data)=>{
            console.log(data);
            setVentes(data)
        })
    },[])

    return (
        <View>
            <Button title='Ajouter une sortie' onPress={()=>navigate('add')}></Button>
            <View>
                <Text>{"\n"}Liste des ventes{"\n"} </Text>
                {
                    ventes.map((vente,index)=>{
                        return(
                            <View key={index}>
                                <Text>{vente.product_id} {vente.qte}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default ListVentes;