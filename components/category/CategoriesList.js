import { Button, Text, View } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-native';
import ActionRedux from '../../redux/action';

const CategoriesList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categoriesList = useSelector(state => state.categories.categoryList)

    const bootstrapStyleSheet = new BootstrapStyleSheet();
    const { s, c } = bootstrapStyleSheet;
    const bootstrap = {
        card:[
            s.my4,
            s.row,
            s.rounded,
            s.bgLight,
            s.justifyContentCenter,
            s.w80,
            s.shadow
        ],
        title:[ 
            s.textCenter,
            s.h4,
            s.textPrimary,

        ],
        desc:[ 
            s.textCenter,
            s.h6,
            s.textSecondary,
            s.textNoWrap
        ],
        pu:[ 
            s.textCenter,
            s.h6,
            s.textWhite,
            s.p2,
            s.rounded,
            s.textNoWrap,
            s.mx3,
            s.fontWeightBold,
            {
                backgroundColor:'#5439ed'
            },
        ],
        category:[ 
            s.textCenter,
            s.h6,
            s.textWhite,
            s.p2,
            s.rounded,
            s.textNoWrap,
            s.mx3,
            s.fontWeightBold,
            {
                backgroundColor:'#fc1e82'
            },
        ],
        rowDiv:[
            s.row,
            s.w100,
            s.justifyContentCenter
        ]
    }

    const deleteCaegory = (id)=>{
        ActionRedux.categories.deleteCaegory(id,dispatch)
    }
    const updateProduct = (category)=>{
        ActionRedux.categories.setCurrentCategory(category,dispatch)
        navigate('updateCategory')
    }
    
    return (
        <View style ={styles.container}>
            <View>
                <Button title='Ajouter une catégorie' onPress={()=>navigate('addCategory')}></Button>
            </View>
            {
                categoriesList.map((category,index) =>{
                    return (
                        <View key={index} style={bootstrap.card} >
                            <View style={bootstrap.rowDiv}>
                                <Text>{category.name}</Text>
                            </View>
                            <View style={bootstrap.rowDiv}>
                                <Button title='Modifier' onPress={()=> updateProduct(category)}></Button>
                                <Button title='Supprimer' onPress={()=>deleteCaegory(category.id)}></Button>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
};
const styles ={
    container:{
        flex: 1,
        width:"100%",
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    card:{
        width:'100%',
        backgroundColor:'gray',
        width:'100%',
    }
}

export default CategoriesList;