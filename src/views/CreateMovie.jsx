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

      const refresh=()=>{
        window.location.reload()
      }

    //***********method post using axios************

    const addFilm = (event) =>{
        event.preventDefault()
        axios.post("https://moviesapp-b1789-default-rtdb.firebaseio.com/posts.json",JSON.stringify(values))
        .then((response) => console.log(response))
         .then(res=>refresh())
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
                    <Form.Control type="text" placeholder="Enter rating"  name="rating" value={values.rating}  onChange={handleChange}/>
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
