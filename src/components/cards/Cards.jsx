import React from "react";
import {CardPokemon} from './CardPokemon'
import {Container,Row} from 'react-bootstrap';

export const Cards = ({results}) => {
    return(
        <>
            <Container className="pt-5 pb-5">
                <Row md={5}>
                    {
                    results.map( p => (  
                        <li key={p.id}>
                            <CardPokemon url={p.url}/>
                        </li>
                     ))
                    }
                </Row>    
            </Container>
        </>
    )

}
