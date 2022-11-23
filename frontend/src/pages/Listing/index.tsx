import { Badge, Button, Table } from "react-bootstrap";
import React,{useState, useEffect } from 'react';
import './styles.css'
import api from 'api'
import { useHistory } from "react-router-dom";

interface Ilisting{
    id: number;
    nome: string ;
    email:string;
    senha:number;
    admin:boolean;

}


const Listing: React.FC=()=>{


    const[listings, setListings]=useState<Ilisting[]>([])
    const history = useHistory()
    

    useEffect(() => {
        loadListing()


    },[])

    function novoCadastro(){
        history.push('/Cadastro')
    }

    function editar(id: number){
        history.push(`/Cadastro/${id}`)
    }



    async function loadListing(){

        const responde = await api.get('/crud/todos')
        console.log(responde)
        setListings(responde.data)
    }


    return(
    <div className="container">
        <br />
        <div className="listing-header ">
            <h1>lista de cadastros</h1>
            <Button variant="dark "size="sm" onClick={novoCadastro}>Nova cadastro</Button>
        </div>
        
        <br />
        <Table striped bordered hover className= "text-center">
            <thead>
                <tr>
                <th>id</th>
                <th>email</th>
                <th>nome</th>
                <th>admin</th>
                <th>ação</th>

                </tr>
            </thead>
            <tbody>
                
                
                    {
                        listings.map(listing=>(

                            <tr key = {listing.id}>
                                <td>{listing.id}</td>
                                <td>{listing.email}</td>
                                <td>{listing.nome}</td>
                                <td>
                                <Badge bg={listing.admin?"success":"warning"}>
                                    {listing.admin?"eAdmin":"naoAdmin"}</Badge>

                                </td>
                                <td>
                                    <Button size="sm"onClick={()=>editar(listing.id)}>editar</Button>{' '}
                                    <Button size="sm">salvar</Button>{' '}
                                    <Button size="sm">visualizar</Button>{' '}
                                    <Button size="sm">removar</Button>{' '}
                                </td>
                                
                            </tr>
                        
                        ))
                    }
            </tbody>        
                    
                
        
        
        </Table>
    </div>

    );

}

export default Listing;