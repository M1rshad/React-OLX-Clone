import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebase/config"

export const AuthContext = createContext(null);

export default function Context ({children}) {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('User state changed ', currentUser );
            
        })
        return ()=> unsubscribe();
    }, [auth])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}