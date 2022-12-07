import { useEffect, useState , createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    return (
        <NoticiasContext.Provider>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext 