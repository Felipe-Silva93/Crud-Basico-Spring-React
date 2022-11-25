import Cadastro from 'pages/Casatro';
import React from 'react';
import { Switch, Route }  from 'react-router-dom'
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Listing from "./pages/Listing";
import CadastroExter from 'pages/CadastroExter';



const Routes: React.FC = () => {
   
    return (
       
    
             <Switch>
        
                <Route path ="/form" exact component ={Form} />
                <Route path ="/listing" exact component ={Listing} />
                <Route path ="/Cadastro" exact component ={Cadastro} />
                <Route path ="/CadastroExter" exact component ={CadastroExter} />
                <Route path ="/Cadastro/:id" exact component ={Cadastro} />


            </Switch>
    );

}
export default Routes;
