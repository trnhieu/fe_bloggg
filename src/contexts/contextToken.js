import { createContext, useContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const ContextToken = createContext();

const ProviderContext = ({ children, ...props }) => {
    const [token, setToken] = useLocalStorage("token", "");
    const values = { token, setToken };
    return (
        <ContextToken.Provider value={values} {...props}>
            {children}
        </ContextToken.Provider>
    );
};

const useToken = () => {
    const context = useContext(ContextToken);
    return context;
};

export { ProviderContext, useToken };
