import axios from "axios"
import { baseUrl } from "../../utils/ApiInfos"

const approvisionnements = {
    addApprovisionnement(name,product_id,qte){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"addstock",{
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
    getApprovisionnementList(){
        return new Promise((resolve,reject)=>{
            axios.post(baseUrl+"approvisionnement",{})
            .then(response => {
                resolve(response.data.result.response)
            })
            .catch(error => console.log("Erreur: ", error))
        })
    },
}
export default approvisionnements