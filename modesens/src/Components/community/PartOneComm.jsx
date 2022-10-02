
import {Text, Box , Image, Heading, Divider, Button} from "@chakra-ui/react"
import "./PartCom.css"
import {useNavigate} from "react-router-dom"

export default function PartOneCommunity(){
    const navigate = useNavigate();
    const handleClick=()=>{
       navigate("/product")
      }
return(
    <div>
<div  style={{width:"100%"}}>
        <Box textAlign="center" mt="30px" lineHeight={2}>
        <Text>ModeSens automatically updates you on new arrivals
          back in stock items and sales</Text>
        </Box>

<div  style={{marginTop:"30px" , widows:"100%", marginLeft:"50px"}}>
    <Image src="https://modesens.com/banner/13558/getimg/?img=%2Fbanner%2F220220927-modesens-hashtag-1440x250-EN.jpg"/>
</div>


<Box mt="30px" lineHeight={3} py={4}>
    <Heading as='h2' size='md'>Fashion News and Style Guide</Heading>
   
    <Text mt="5">Explore and get inspired by the latest luxury fashion news, beauty trends, outfit ideas and more blogs selected by the ModeSens editorial team.</Text>

</Box>

<Box mt={8} mb={8}>
    <Divider />
</Box>

<Box mt={2}>
<Divider />
</Box>
 
 <div style={{marginTop:"10px"}}>
  <Text>Special Offers</Text>
 </div>



<div className='four' >

<div>
<img src="https://cdn.modesens.com/banner/20220608-modesens-Frontgate-364x484-H.jpg" alt="" />

  <h3>Four Legged Style</h3>
 <Text>Pets Accessories</Text>
 <Button onClick={handleClick}>Shop Now</Button>
</div>




<div>
<img src="https://cdn.modesens.com/banner/20220608-modesens-Urban-364x484-H.jpg" alt="" />
  <h3>Art And Comfort</h3>
 <Text>Most desirable furniture</Text>
 <Button onClick={handleClick}>Shop Now</Button>
</div>


<div>
<img src="https://cdn.modesens.com/banner/20220608-modesens-Bloomingdales-364x484-H.jpg" alt="" />
  <h3>Kitchen Accessories</h3>
 <Text>Fine Dinner Wear</Text>
 <Button onClick={handleClick}>Shop Now</Button>
</div>
</div>



<Box mt={2} mb={2}>
<Divider />
</Box>

<div className='five'>

<div>
  <img src="https://cdn.modesens.com/availability/50917509?w=400&" alt="" />
  <p>BURBERRY</p>
  <p>The Cotton T-Shirt is</p>
  <p>$275</p>
</div>

<div>
  <img src="https://cdn.modesens.com/availability/53328288?w=400&" alt="" />
  <p>BURBERRY</p>
  <p>Ribbed Cashmere And</p>
  <p>$484</p>
</div>

<div>
  <img src="https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt-500x500.jpg" alt="" />
  <p>BURBERRY</p>
  <p>Ribbed Cashmere And</p>
  <p>$484</p>
</div>

</div>

<Box mt="3">
<Button colorScheme="black" color="white">SHOP NOW</Button>
</Box>


<div className='six'>

<div>
  <Text>ModeSens App</Text>
  <h3>A seamless experience that takes your style
to the next level.</h3>
<Button  mt={2}colorScheme="blue">DOWNLOAD NOW</Button>
<img src="https://cdn.apkmonk.com/images/com.modesens.androidapp.png" alt="" />
</div>

<div>
  <Text>Browser Extension</Text>
  <h3>Get timely, accurate product information
    every time you browse.</h3>
<Button  mt={2}  colorScheme="blue" >INSTALL NOW</Button>
<img src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />
</div>
</div>


<Box mt="3">
<Button colorScheme="blue"  mt={2} mb={2} onClick={handleClick}  >MORE</Button>
<Text>COMMUNITY POST</Text>
</Box>


<Box mt={2} mb={2} >
<Divider />
</Box>


<div className='seven'>
<div>
    <img src="https://cdn.modesens.com/umedia/1638042s?w=400&" alt="" />
</div>

<div>
    <img src="https://cdn.modesens.com/umedia/1638895s?w=400&" alt="" />
</div>

<div>
    <img src="https://cdn.modesens.com/umedia/1638049s?w=400&" alt="" />
</div>


<div>
    <img src="https://cdn.modesens.com/umedia/1634399s?w=400&" alt="" />
</div>

</div>
















</div>














    </div>
)
}