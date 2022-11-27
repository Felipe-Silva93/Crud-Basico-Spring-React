import { Badge, Button, Form, Table } from "react-bootstrap";
import React,{useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from "react-router-dom";

import api from 'api'




const Forms: React.FC=() => {


    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    
   
   const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    console.log("submit",{email, senha});
   };



    return(
        <div className="container">
            <br />
                <h1>Login</h1>
                
            <br />
            <div className="container">
            
            <Form onSubmit={handleSubmit} >

                <Form.Group className="mb-3">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                    type="text" name ="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                    placeholder="email meu bom" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>senha:</Form.Label>
                    <Form.Control type="password"name ="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}
                    placeholder="senha jhow" />
                </Form.Group>
                
                <Button  type="submit"size="sm" >Cadastre-se</Button>{' '}
                <Button  type="submit"size="sm" >Logar</Button>{' '}
               
             </Form>

                        

            </div>

        </div>


    );

}

export default Forms;