import {Routes, Route} from "react-router-dom"
import Home from "../Home/Home"
import Designers from "../Designers/Designer"
import WhyModesens from "../WhyModesens/whyModensens"
import Community from "../community/community"
import Kids from "../Kids/Kids"
import  Women from "../Women/women"
import Mens from "../Mens/Mens"







export default function AllRoutes(){
return(

<Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/women" element={<Women />}></Route>
<Route path="/kids" element={<Kids />}></Route>
<Route path="/men" element={<Mens />}></Route>
<Route path="/designer" element={<Designers />}></Route>
<Route path="/why" element={<WhyModesens />}></Route>
<Route path="/com" element={<Community/>}></Route>
</Routes>







)






}

