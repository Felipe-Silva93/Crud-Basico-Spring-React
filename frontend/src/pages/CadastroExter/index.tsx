import { Badge, Button, Form, Table } from "react-bootstrap";
import React,{useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from "react-router-dom";

import api from 'api'


interface Iform{
    
    nome: string ;
    email:string;
    senha:number;
    

}


const CadastroExter: React.FC=() => {
    

    const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
    const history = useHistory()

    const[model, setModel] =useState<Iform>({

    nome: '',
    email:'',
    senha:0

    })

    function updated(e: ChangeEvent<HTMLInputElement>){
        
        setModel({
            ...model, //desistruturaçãi do que já tiver no model

            [e.target.name]: e.target.value

        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault()
        const response = await api.post ('/crud/cadastrar',model)
        console.log(response)
        back()
        
    }


    function login(){
        history.push('/form')
    }
    function back(){
        history.goBack()
    }

    

    


    return(
        <div className="container">
            <br />
                <h1>Cadastro</h1>
                
            <br />
            <div className="container">
            
            <Form onSubmit={onSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                    type="text" name ="email" 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)} 
                    placeholder="email meu bom" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" name ="nome" 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)}
                    placeholder="seu lindo nome" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>senha:</Form.Label>
                    <Form.Control type="number"name ="senha"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)}
                    placeholder="senha jhow" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group>
                <Button  type="submit"size="sm" >Salvar</Button>{' '}
                <Button  type="submit"size="sm" onClick={login} >Cancelar</Button>{' '}
             </Form>

                        

            </div>

        </div>


    );

}

export default CadastroExter;