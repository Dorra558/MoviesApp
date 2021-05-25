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


// const putMovie = ()=> {
//   const [updatedAt, setUpdatedAt] = useState([]);

//   useEffect(() => {

//     const article = { 
//       title: '',
//       year:'',
//       posterUrl:'',
//   };
//       axios.put('http://localhost:3004/posts', article)
//           .then(response => setUpdatedAt(response.data.updatedAt));

//   // empty dependency array means this effect will only run once (like componentDidMount in classes)
//   }, []);
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
           {movie.filter((elmt)=>{
        if (search===""){
          return elmt
        }
        else if (elmt.title.toLowerCase().includes(search.toLowerCase())){
          return elmt
        }
      }).map(el=>

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
                      {/* <Button variant="primary" onClick={handleShow} className="btnAdminEdit"><i className="ml-2 far fa-edit fa-2x"></i></Button> */}
                      <UpdateMovies el={el} />
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
