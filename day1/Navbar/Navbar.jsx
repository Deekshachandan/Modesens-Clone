import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import { Input } from '@chakra-ui/react'




const links = [
    { path: "/", title: "HOME" },
    { path: "/women", title: "WOMEN" },
    { path: "/kids", title: "KIDS" },
    { path: "/men", title: "MEN" },
    { path: "/designer", title: "DESIGNERS" },
    { path: "/why", title: "WHY MODESENS" },
    { path: "/com", title: "COMMUNITY" },
]



export default function Navbar() {

    return (

        <div>
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                    <img
                        src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
                        alt=""
                        
                    ></img>
                    </a>
                </div>

                <div className="links">
                    {links.map((item) =>
                        <Link key={item.path} to={item.path}>{item.title}</Link>
                    )}
                </div>

                <div className="rightIcons">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png"
              alt=""
            ></img>
          </div>
          {/* {isAuth ? <div></div> : <SignupPopup />} */}
          <div>
            <img
              src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
              alt=""
            />
          </div>

 <div className="search"> 
            <img
              style={{ width: "30%", }}
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
              alt=""
            /> 
          
               <Input placeholder='SEARCH' size='sm' />

      
          </div>
          <div
            style={{ marginTop: "-10px", cursor: "pointer" }}
            // onClick={() => setIsAuth(false)}
          >
            {/* {isAuth ? "Log Out" : ""} */}
          </div>
        </div>



            </div>



        </div>









    )




}