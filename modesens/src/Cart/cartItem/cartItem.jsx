import {
  Grid,
  Box,
  Text,
  Image,
  Button,
  Heading,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon ,
  FormControl,
  FormLabel, FormHelperText

} from "@chakra-ui/react";
import  {Link} from "react-router-dom"



const data = JSON.parse(localStorage.getItem("storage")) || [];

var total = data.reduce(function(sum,el,index,arr){
    return sum + Number(el.price)
},0);

console.log(data)




export default function CartData() {


const Remove=(item)=>{
{/* <Alert status="error">
                  <AlertIcon />
                  <AlertTitle>Remove product from cart !!!</AlertTitle>
                  <AlertDescription>
                    Click on the below button to continue
                  </AlertDescription>
                </Alert>
for(let i=0;i<data.length;i++){
  if(data[i]===item)
      data.splice(i,1)
} */}






  }

return (
    <div>

<div   style={{display:"grid", gridTemplateColumns:"repeat(2, auto)" , gap:"5px", width:"100%"}} >
<div 
style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)" , gap:"2px", width:"60%"}}>
  {data.map((item)=>{
return <Box>
<Box> <img src={item.image} alt="" /></Box>
<Box> <Text>{item.brand}</Text></Box>
<Box> <Text>{item.description}</Text></Box>
<Box> <Text>{item.price}</Text></Box>
<Box>
<Button colorScheme="blue"    onClick={()=>Remove(item.id)}>Remove</Button>
</Box>
</Box>
})}
</div>

<div style={{width:"45%", height:"200px" ,  padding:"15px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
<h2 >CART TOTAL</h2>
  <Text as="i"  color='green' >Total amount payable is just Rs. {total}</Text>
 
 <Link to="/pay"><Button  display="block"   colorScheme="blue">CHECK OUT</Button>  </Link> 
</div>
</div>
</div>
  )
}












































