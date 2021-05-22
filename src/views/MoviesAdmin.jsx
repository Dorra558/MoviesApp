import React,{useState, useEffect} from 'react'
import {Row, Col, Card,Button} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import axios from 'axios'

// *******get axios************************

function MoviesAdmin() {
    const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    axios.get('http://localhost:3004/posts').then(
         (response )=> {setMovie(response.data)
  })
}
useEffect(()=> {getMovie()
},[])


// **********Delete axios*********************

const deleteData=(e,id)=> {
  axios.delete(`http://localhost:3004/posts/${id}`)
  .then(response => {
      console.log(response);
    })
  .catch(err=> 
    console.log(err)
  );
}

    return (
       <div className="d-flex justify-content-around flex-wrap">
           { movie.map(el=>
        <div>
            <Row>
             <Col md={4}>
              <Card className="CardMov my-3" style={{ width: '16rem'}}>
              <Card.Img variant="top" className="w-100 imagCard" src={el.posterUrl}/>

              <div className="d-flex justify-content-around mt-2">
                  <Card.Title className="text-white font-weight-bold">{el.title}</Card.Title>
                  <Card.Text className="text-warning">
                        {el.year}
                  </Card.Text>
              </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between pb-2">
                      <Rater total={5} rating={el.rating}  interactive={true}/>
                    <Button variant="primary" className="btnWatch">Watch Now <i className="ml-2 fas fa-play-circle"></i></Button>
                    </div>

                    <div className="d-flex justify-content-between justify-content-center py-2">
                      <Button onClick= {(e)=> deleteData(e,el.id)} variant="primary" className="btnAdminSupp"> <i className="ml-2 far fa-trash-alt fa-2x"></i></Button>
                      <Button variant="primary" className="btnAdminEdit"><i className="ml-2 far fa-edit fa-2x"></i></Button>
                    </div>
                  </Card.Body>

                </Card>
             </Col>
          </Row>
        </div>
    )}
       </div>
    )
}

export default MoviesAdmin
