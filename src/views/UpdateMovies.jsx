import React, {useState,useEffect} from 'react'
import {Row, Container,Form, Col, Card,Button, Modal} from 'react-bootstrap' 
import axios from 'axios'

function UpdateMovies({el}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


// **********Update axios*********************

const [update, updateMovie] = useState({
    title: el.title,
    description: el.description,
    year:el.year,
    posterUrl:el.posterUrl,
  });
  const handleChangeAdmin = e => {
    const { name, value } = e.target
    updateMovie({
      ...update,
      [name]: value 
    });
    console.log(update)
  };
  
  const updateData=(e,id)=> {
    axios.put(`http://localhost:3004/posts/${id}`,update)
    .then(response => {
        console.log(response);
      })
    .catch(err=> 
      console.log(err)
    );
  }
  



    return (
        <div>
             <Button onClick={handleShow} className="btnAdminEdit">
               <i className="ml-2 far fa-edit fa-2x"></i>
               </Button>
               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                        <Form onSubmit= {(e)=> updateData(e,el.id)}>
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


                        <Button type="submit">
                        Update movie
                        </Button>
                        </Form>
                    </Container>

                  </Modal.Body>
                  {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button type="submit" onClick={handleClose()}>
                    Update movie
                    </Button>
                  </Modal.Footer> */}
               </Modal>  
        </div>
    )
}

export default UpdateMovies
