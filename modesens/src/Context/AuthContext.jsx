import { createContext , useState} from "react";
export const AuthContext=createContext()



export default function AuthContextProvider({children}){
const[isAuth, setAuth]=useState(true)
const [cartData,setCartData] = useState([])
const [alltotal,setAlltotal] = useState(0)

const toggleAuth=()=>{
    setAuth( !isAuth)
}

    return(
        <div>
            <AuthContext.Provider value={{isAuth,setAuth, toggleAuth, cartData,setCartData,alltotal,setAlltotal}}>{children}</AuthContext.Provider>
        </div>
    )
}