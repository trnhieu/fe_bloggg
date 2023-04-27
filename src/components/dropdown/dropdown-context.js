import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

const DropdownProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    };

    const values = { show, setShow, toggle };
    return (
        <DropdownContext.Provider value={values}>
            {children}
        </DropdownContext.Provider>
    );
};

function useDropdown() {
    const context = useContext(DropdownContext);
    return context;
}

export { DropdownProvider, useDropdown };
