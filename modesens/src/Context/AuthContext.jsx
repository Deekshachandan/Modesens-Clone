import { createContext , useState} from "react";
export const AuthContext=createContext()



export default function AuthContextProvider({children}){
const[isAuth, setAuth]=useState(true)

const toggleAuth=()=>{
    setAuth( !isAuth)
}

    return(
        <div>
            <AuthContext.Provider value={{isAuth,setAuth, toggleAuth}}>{children}</AuthContext.Provider>
        </div>
    )
}