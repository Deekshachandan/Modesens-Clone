import React , {useContext}from "react"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import {Alert , AlertIcon} from "@chakra-ui/react"



export default function PrivateRoute({children}){
const {isAuth}=useContext(AuthContext)
const navigate=useNavigate();


if(!isAuth){
return <Alert status='info'>
   <AlertIcon />
   Kindly Login to grab the best deals
  </Alert>  
     

}return children
}