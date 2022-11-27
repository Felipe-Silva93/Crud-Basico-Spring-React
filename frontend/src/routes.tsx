import Cadastro from 'pages/Casatro';
import React from 'react';
import { Switch, Route }  from 'react-router-dom'
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Listing from "./pages/Listing";
import CadastroExter from 'pages/CadastroExter';
import {useState} from 'react';


import { AuthContext } from 'context/auth';

const Routes: React.FC = () => {

    const[user, setUser]=useState(null);

    const login = (email: any, senha: any) =>{


    };
   
    return (
       
    
             <Switch>
                <AuthContext.Provider value={{authenticated: email, senha, login}}>
        
                <Route path ="/form" exact component ={Form} />
                <Route path ="/listing" exact component ={Listing} />
                <Route path ="/Cadastro" exact component ={Cadastro} />
                <Route path ="/CadastroExter" exact component ={CadastroExter} />
                <Route path ="/Cadastro/:id" exact component ={Cadastro} />

                </AuthContext.Provider>

            </Switch>
    );

}
export default Routes;
