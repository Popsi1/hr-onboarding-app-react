import React, {createContext, useState, } from 'react';

export const GlobalVariables = createContext({});

export const GlobalProvider = ({ children }) => {

    const [employees, setEmployees] = useState([]);
    const [loginResponse, setLoginResponse] = useState('');
    
  
    return (
        <GlobalVariables.Provider value={{
            employees, setEmployees,
            loginResponse, setLoginResponse,
             
}}>
            {children}
        </GlobalVariables.Provider>
    )
}