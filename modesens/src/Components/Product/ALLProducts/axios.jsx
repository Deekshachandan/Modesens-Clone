import axios from "axios"

export default function Axios(params={}){
    console.log(params)
    return axios.get("https://modesens-api.onrender.com/products" ,{
        params:{
            _page:params.page,
            _limit:params.limit,
            gender:params.gender,
            category:params.category,
            brand:params.brand,

}
})



}