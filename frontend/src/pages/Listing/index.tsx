import { Badge, Button, Table } from "react-bootstrap";
import React,{useState, useEffect } from 'react';
import api from 'api'

interface Ilisting{
    id: number;
    nome: string ;
    email:string;
    senha:number;
    admin:boolean;

}


const Listing: React.FC=()=>{


    const[listings, setListings]=useState<Ilisting[]>([])

    useEffect(() => {
        loadListing()


    },[])



    async function loadListing(){

        const responde = await api.get('/crud/todos')
        console.log(responde)
        setListings(responde.data)
    }


    return(
    <div className="container">
        <br />
        <h1>lista de cadastros</h1>
        <br />
        <Table striped bordered hover className= "text-center">
            <thead>
                <tr>
                <th>id</th>
                <th>email</th>
                <th>nome</th>
                <th>Usenha</th>
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
                                <td>{listing.senha}</td>
                                <td>
                                <Badge bg={listing.admin?"success":"warning"}>
                                    {listing.admin?"eAdmin":"naoAdmin"}</Badge>

                                </td>
                                <td>
                                    <Button size="sm">editar</Button>{' '}
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