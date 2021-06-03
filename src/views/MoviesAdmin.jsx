import React,{useState, useEffect, handleShow,show, handleClose} from 'react'
import {Row, Container,Form, Col, Card,Button, Modal} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import axios from 'axios'
import '../App.css'
import UpdateMovies from './UpdateMovies'


// *******get axios************************

function MoviesAdmin() {
  
  const [search,setSearch ] = useState("") 
  const handleChange= (e)=>{
    setSearch(e.target.value)
  }

const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    axios.get('https://moviesapp-b1789-default-rtdb.firebaseio.com/posts.json').then(
         (response )=> {setMovie(response.data)})}
        // (response )=> {setMovie(Object.entries(response.data))})}

useEffect(()=> {getMovie()
},[])



// (response )=> {console.log(Object.keys(response.data))})}


const refresh=()=>{
  window.location.reload()
}
// **********Delete axios*********************

const deleteData=(id)=> {
  axios.delete(`https://moviesapp-b1789-default-rtdb.firebaseio.com/posts/${id}.json`)
  .then(response => {(console.log(response.data))})
    .then(res=>refresh())
  .catch(err=> console.log(err)
  );
}

// // **********Update axios*********************

// const [update, updateMovie] = useState({
//   title: '',
//   description: '',
//   year:'',
//   posterUrl:'',
// });
// const handleChangeAdmin = e => {
//   const { name, value } = e.target
//   updateMovie({
//     ...update,
//     [name]: value 
//   });
//   console.log(update)
// };

// const updateData=(e,id)=> {
//   axios.put(`http://localhost:3004/posts/${id}`,update)
//   .then(response => {
//       console.log(response);
//     })
//   .catch(err=> 
//     console.log(err)
//   );
// }



// ***********Modal*************************
      // const [show, setShow] = useState(false);

      // const handleClose = () => setShow(false);
      // const handleShow = () => setShow(true);
    return (
<>
          <div className="d-flex justify-content-center">
             <input className="searchAdmin" type="text" onChange={handleChange} placeholder="Search movie..."/>
          </div>

       <div className="d-flex justify-content-around flex-wrap">
           {Object.keys(movie)
           
      //      .filter((elmt)=>{
      //   if (search===""){
      //     return elmt
      //   }
      //   else if (elmt.title.toLowerCase().includes(search.toLowerCase())){
      //     return elmt
      //   }
      // })
      .map(el=>

        <div>
            <Row>
             <Col md={4}>
              <Card className="CardMov my-3" style={{ width: '16rem'}} key={el}>
              <Card.Img variant="top" className="w-100 imagCard" src={movie[el].posterUrl}/>

              <div className="d-flex justify-content-around mt-2">
                  <Card.Title className="text-white font-weight-bold">{movie[el].title}</Card.Title>
                  <Card.Text className="text-warning">
                        {movie[el].year}
                  </Card.Text>
              </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between pb-2">
                      <Rater total={5} rating={movie[el].rating}  interactive={false}/>
                    <Button variant="primary" className="btnWatch">Watch Now <i className="ml-2 fas fa-play-circle"></i></Button>
                    </div>

                    <div className="d-flex justify-content-between justify-content-center py-2">
                      <Button onClick={()=> deleteData(el)} variant="primary" className="btnAdminSupp"> <i className="ml-2 far fa-trash-alt fa-2x"></i></Button>
                      {/* <Button variant="primary" onClick={handleShow} className="btnAdminEdit"><i className="ml-2 far fa-edit fa-2x"></i></Button> */}
                      <UpdateMovies refresh={refresh} movie={movie} el={el} />
                    </div>
                  </Card.Body>
                </Card>


        

                {/* <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                        <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter title"  name="title" defaultValue={el.title} onChange={handleChangeAdmin} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter date" name="year" defaultValue={el.year} onChange={handleChangeAdmin} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter decription"  name="description" defaultValue={el.description} onChange={handleChangeAdmin}  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="image"  name="posterUrl" defaultValue={el.posterUrl} onChange={handleChangeAdmin}  />
                        </Form.Group>

                        </Form>
                    </Container>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick= {(e) => {handleClose();updateData(e,el.id)}}>
                    Update movie
                    </Button>
                  </Modal.Footer>
               </Modal> */}


             </Col>
          </Row>
        </div>
    )}
       </div>
       </>
    )
}

export default MoviesAdmin
