import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "seran",
        age: 20,
        email: "vishwa.sovis@gmail.com"
    });
    
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);