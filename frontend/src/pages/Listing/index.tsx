import { Badge, Button, Table } from "react-bootstrap";
import React,{useState, useEffect } from 'react';
import api from 'api'

interface Ilisting{
    id: number;
    nome: string ;
    email:string;
    senha:number;
    status:number;

}


const Listing: React.FC=()=>{


    const[listings, setListings]=useState<Ilisting[]>([])

    useEffect(()=>{
        loadListing()


    })



    async function loadListing(){

        const responde = await api.get('/listing')
        console.log(responde)
        setListings(responde.data)
    }


    return(
        <div className="container">
            <br/>
            <h1>pagina de listagem</h1>
            <br/>
            


            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Senha</th>
                    <th>Status</th>
                    <th>Açoes</th>
                </tr>
            </thead>
            <tbody>

                {
                    listings.map(listing=>(

                        <tr key={listing.id}>
                            <td>{listing.id}</td>
                            <td>{listing.nome}</td>
                            <td>{listing.email}</td>
                            <td>{listing.senha}</td>
                            <td>
                                <Badge bg ={listing.status? "success":"warning"}>
                                    {listing.status? "finalizada":"pendente"}
                                </Badge>
        
                            </td>
                            <td>
                                <Button variant="warning">editar</Button>
                                <Button variant="warning">Wa</Button>
                                <Button variant="warning">rning</Button>
                                <Button variant="warning">ng</Button>
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