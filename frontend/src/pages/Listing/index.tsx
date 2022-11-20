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


    },[])



    async function loadListing(){

        const responde = await api.get('/crud')
        console.log(responde)
        setListings(responde.data)
    }


    return(
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            
                {
                    listings.map(listing=>(

                        <tr>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    
                    ))
                }
        </tbody>        
                
            
       
      
    </Table>

    );

}

export default Listing;