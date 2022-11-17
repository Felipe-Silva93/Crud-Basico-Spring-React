import React from 'react';
import { Switch, Route }  from 'react-router-dom'
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Listing from "./pages/Listing";


const Routes: React.FC = () => {
    <NavBar/>
    return (
    
             <Switch>
        
                <Route path ="/form" exact component ={Form} />
                <Route path ="/tela" exact component ={Listing} />
            </Switch>
    );

}
export default Routes;
