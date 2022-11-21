import { Badge, Button, Form, Table } from "react-bootstrap";
import React,{useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import api from 'api'





const Cadastro: React.FC=() => {
    
    const history = useHistory()


    function login(){
        history.push('/form')
    }
    return(
        <div className="container">
            <br />
                <h1>Cadastro</h1>
                
            <br />
            <div className="container">
            
            <>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control type="email" placeholder="email meu bom" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="nome" placeholder="seu lindo nome" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>senha:</Form.Label>
                    <Form.Control type="email" placeholder="senha jhow" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group>
             </>
                <Button type="submit"size="sm">Submit</Button>{' '}
                <Button variant="dark "size="sm" onClick={login}>login</Button>            

            </div>

        </div>


    );

}

export default Cadastro;