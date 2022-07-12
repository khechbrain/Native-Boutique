import axios from "axios"
import { baseUrl } from "../../utils/ApiInfos"

const ventes = {
    addVentes(name,product_id,qte){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"vente",{
                "jsonrpc":"2.0",
                "params":{
                    name,
                    product_id,
                    qte
                }
            })
            .then(response => {
                console.log(response.data);
                resolve(response)
            })
            .catch(error => console.log("Erreur: ", error))
        })
    },
    getVentesList(){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"get_ventes",{})
            .then(response => {
                resolve(response.data.result.response)
            })
            .catch(error => console.log("Erreur: ", error))
        })
    },
}
export default ventes