import React, {useState} from "react";
import {Container,Form,Button} from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


function CreateMovies() {
  
    const [values, setValues] = useState({
        title: '',
        description: '',
        year:'',
        posterUrl:'',
      });
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
          ...values,
          [name]: value 
        });
        console.log(values  )
      };

    //   ***********method post using axios************

    const addFilm = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3004/posts",values)
        .then((response) => console.log(response))
              .catch((error) => console.log(error));
    }

    return (
        <div>
            <Container>
                <Form onSubmit={addFilm}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter title"  name="title" value={values.title}  onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="Enter date" name="year" value={values.year}  onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="Enter decription"  name="description" value={values.description}  onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="image"  name="posterUrl" value={values.posterUrl}  onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add movie
                </Button>
                </Form>
            </Container>
        </div>
    )
}

export default CreateMovies;
