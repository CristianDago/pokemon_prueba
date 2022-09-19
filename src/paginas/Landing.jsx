import React, {useState} from 'react'
import {MiApi} from '../components/MiApi'
import {Cards} from '../components/cards/Cards'
import Header from '../components/header/Header'
import {Container, Button, Row, Col} from 'react-bootstrap'

const Pokemon = () => {
    const [url,setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    const [search, setSearch] = useState("");
    const  estado = MiApi(url)
    const {cargando,data} = estado

    const searchPokemon = (e) => {

        e.preventDefault(); {
        if (!search.trim()) {
          
        alert ("Debes ingresar un nombre");
        return;

        } else {
   
            setUrl(`https://pokeapi.co/api/v2/pokemon/${search}`)

        }

        }
    }   
      
    return (
        <>
            <Header />
                <Row className="bg-dark p-5">
                    <Col></Col>
                    <Col>
                        <form onSubmit={searchPokemon}>
                            <input className="w-100" placeholder="Escribe el nombre"  onChange={(e) => setSearch(e.target.value)}/>
                            <button  className="w-100 mt-2 bg-azul border-0 blanco" type='submit'>Buscar Pokemón</button>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>

                {cargando 
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div>
                        <Cards results={data.results}/>
                        <Container className='text-center pb-5'>
                            <Button onClick={()=>setUrl(data.previous)} className="m-2 btn btn-dark">Anterior</Button>
                            <Button onClick={()=>setUrl(data.next)} className="m-2 btn btn-dark">Siguiente</Button>
                        </Container>
                    </div>
                } 
        </> 
    )
}

export default Pokemon