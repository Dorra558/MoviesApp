import React, {useState,useEffect} from 'react'
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";

import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'
import Favorit from './components/favorit'
import axios from 'axios'


function App() {

// **********search function******************

  const [search,setSearch ] = useState("") 
  const handleChange= (e)=>{
    setSearch(e.target.value)
  }


  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    axios.get('http://localhost:3004/posts').then(
         (response )=> {setMovie(response.data)
  })
}
  useEffect(()=> {getMovie()
  },[])

  const [favorites, setFavorites] = useState(0)
  const getFavorites =() =>{
    setFavorites(favorites+1)
    console.log(favorites)
  }

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const addFavorite = (e) => {
   favoriteMovie.push(e)
    console.log(favoriteMovie)
  }


  return (
    <div className="App">

    <BrowserRouter>
      
    <Switch>
      <Route path="/MovieApp/admin"> <AdminLayout search={search} handleChange={handleChange}/> </Route>
      <Route exact path="/MovieApp"> <Home search={search} handleChange={handleChange} movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} addFavorite={addFavorite} /></Route>
        <Route path="/MovieApp/movies" component={Movies} />
        <Route path="/MovieApp/favorit" ><Favorit movie={movie} getMovie={getMovie} favorites={favorites} favoriteMovie={favoriteMovie}/></Route>
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      
    </Switch>
   
    </BrowserRouter>

    </div>
  );
}

export default App
