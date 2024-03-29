import { Badge, Button, Form, Table } from "react-bootstrap";
import React,{useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from "react-router-dom";

import api from 'api'

interface IParamsProps {
    id: string;
}

interface Iform{
    
    nome: string ;
    email:string;
    senha:number;
    

}


const Cadastro: React.FC=() => {
    
   
    const history = useHistory()
    const { id } = useParams<IParamsProps>();
    const[model, setModel] =useState<Iform>({

    nome: '',
    email:'',
    senha:0

    })

    useEffect(()=>{

    if (id != undefined )  {

        findEditar(id )
    }  
     console.log(id)
    },[id])

    function crud(){
        history.push('/listing')
    }

    function updated(e: ChangeEvent<HTMLInputElement>){
        
        setModel({
            ...model, //desistruturaçãi do que já tiver no model

            [e.target.name]: e.target.value

        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault()
        if (id != undefined )  {

            const response = await api.put (`/crud/atualizar/${id}`,model)
        }else{
            const response = await api.post ('/crud/cadastrar',model)
        }  
        
        
        back()
    }

   async function findEditar(id:string  ) {
    const response = await api.get(`/crud/id/${id}`)
    setModel({
        nome: response.data.nome,
        email:response.data.email,
        senha:response.data.senha


    })
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
                    type="text" name ="email" value={model.email}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)} 
                    placeholder="email meu bom" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" name ="nome" value={model.nome} 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)}
                    placeholder="seu lindo nome" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>senha:</Form.Label>
                    <Form.Control type="number"name ="senha" value={model.senha}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updated(e)}
                    placeholder="senha jhow" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" disabled />
                </Form.Group>
                <Button  type="submit"size="sm" >Salvar</Button>{' '}
                <Button  type="submit"size="sm"onClick={crud} >Cancelar</Button>{' '}
             </Form>

                        

            </div>

        </div>


    );

}

export default Cadastro;