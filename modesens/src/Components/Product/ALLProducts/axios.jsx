import axios from "axios"

export default function Axios(params={}){
    return axios.get("https://warm-falls-74936.herokuapp.com/api/products" ,{
        params:{
            _page:params.page,
            _limit:params.limit,
            gender:params.gender,
            category:params.category,
              brand:params.brand,



        }
    })



}