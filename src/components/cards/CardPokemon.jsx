import React from "react";
import  {MiApi} from "../MiApi"
import {Card, Col, ListGroup} from 'react-bootstrap';

export const CardPokemon = ({url}) => {

    const estado = MiApi(url)
    const {cargando,data} = estado

    return (
        <>
          {
              cargando 
              ?
              <h1>Cargando</h1>
              :
              <Col className="pt-3">
                  <Card>
                    <Card.Img variant="top" src={data.sprites.front_default}/>
                    <Card.Body className="pt-3 bg-azul">
                      <Card.Title className="text-uppercase text-center fw-bold amarillo">{data.name}</Card.Title>
                      <ListGroup variant="flush text-center bg-azul" >
                        <ListGroup.Item ><p>Experiencia: {data.base_experience}</p></ListGroup.Item>
                        <ListGroup.Item ><p>Ataque: {data.stats[1].base_stat}</p></ListGroup.Item>
                        <ListGroup.Item ><p>Ataque:{data.stats[2].base_stat}</p></ListGroup.Item>
                        <ListGroup.Item ><p>Ataque:{data.stats[3].base_stat}</p></ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                </Card>
              </Col>
          }
      </>
    )

}