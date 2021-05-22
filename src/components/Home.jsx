import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import {Container, Row, Col} from 'react-bootstrap'
import CardMovies from './CardMovies';
import Footer from './footer'
import React, {useState} from 'react'


function Home ({movie,favorites,getFavorites, addFavorite}) {
const [search,setSearch ] = useState("") 
const handleChange= (e)=>{
  setSearch(e.target.value)
}

  return (
    <div className="App">
    <Navigation handleChange={handleChange} favorites={favorites} />
    <div className="back my-5">
      <h1 className="container titre text-white">Unlimited movies, TV shows, <br/> and more.</h1>
   <div className=" container d-flex justify-content-start"><span className="text-center  titre2 text-white p-1 mt-4">Watch anywhere. Cancel anytime.</span></div>
    </div>

    <div className="py-5">
      <Container>
        <Row>
        <Col md={6}>
            <img className="w-75" src="https://data.whicdn.com/images/344624912/original.gif"/>
          </Col>
          <Col md={6} className="mt-5">
            <h1 className="titre pb-2 text-white">Enjoy on your TV.</h1>
            <span className="titre1 text-white">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</span>
          </Col>

        </Row>
      </Container>
    </div>
    

    <div className="py-5">
      <Container className="d-flex flex-wrap justify-content-around">
          <CardMovies search={search} movie={movie} favorites={favorites} getFavorites={getFavorites} addFavorite={addFavorite}/>
      </Container>
    </div>
<div>
  <Footer />
</div>

    </div>
  );
}

export default Home;
