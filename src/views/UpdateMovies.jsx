import React, {useState,useEffect} from 'react'
import {Row, Container,Form, Col, Card,Button, Modal} from 'react-bootstrap' 
import axios from 'axios'

function UpdateMovies({el, movie,refresh}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// const refresh=()=>{
//   window.location.reload()
// }
   
// **********Update axios*********************

const [update, updateMovie] = useState({
    title: movie[el].title,
    description: movie[el].description,
    year: movie[el].year,
    posterUrl: movie[el].posterUrl,
  });
  const handleChangeAdmin = e => {
    const { name, value } = e.target
    updateMovie({
      ...update,
      [name]: value 
    });
    console.log(update)
  };
  
  const updateData=(id)=> {
    
    axios.put(`https://moviesapp-b1789-default-rtdb.firebaseio.com/posts/${id}.json`,update)
    .then ((response )=> updateMovie(response.data))
    .then(res=>refresh())
    .catch(err=> 
      console.log(err)
    );
  }
  // useEffect(()=>{
  //   updateData()
  // },[])



    return (
        <div>
             <Button onClick={handleShow} className="btnAdminEdit">
               <i className="ml-2 far fa-edit fa-2x"></i>
               </Button>
               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="text-warning"> Edit movie</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                        <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter title"  name="title" defaultValue={movie[el].title} onChange={handleChangeAdmin} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter date" name="year" defaultValue={movie[el].year} onChange={handleChangeAdmin} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter decription"  name="description" defaultValue={movie[el].description} onChange={handleChangeAdmin}  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="rating"  name="rating" defaultValue={movie[el].rating} onChange={handleChangeAdmin}  />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text" placeholder="image"  name="posterUrl" defaultValue={movie[el].posterUrl} onChange={handleChangeAdmin}  />
                        </Form.Group>


                        <Button onClick={()=>{updateData(el)}}>
                        Update movie
                        </Button>
                        </Form>
                    </Container>

                  </Modal.Body>

               </Modal>  
        </div>
    )
}

export default UpdateMovies
