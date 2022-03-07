import React,{useState} from 'react';
import MovieCard from './MovieCard';
import { Button, Modal,Form } from 'react-bootstrap';
import {nanoid} from 'nanoid';

export default function MovieList(){
    const [movies,setMovies] = useState([
        {
            name: "The Shawshank Redemption",
            rating: 9,
            url:
            "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            
        },
        {
        name: "Se7en",
        rating: 8,
        url:
            "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        description:
            "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        },
        {
            name: "The Pianist",
            rating: 8,
            url:
            "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            description:
            "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        },
        {
            name: "Toy Story 3",
            rating: 6,
            url:
            "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
            description:
            "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college.",
        },
        
    ])
    const [addMovie,setAddMovie] = useState(
        {
            name:" ",
            description:" ",
            url:" ",
            rating:" ",
        }
    );
    const [val,setVal] = useState(false);
    const handleModal=()=>{
        setVal(!val)
    }

    const handleNewMovie=(e)=>{
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldVal = e.target.value;
        const newData = {...addMovie};
        newData[fieldName] = fieldVal;
        setAddMovie(newData);

    }
    const addNewMovie = (e) =>{
        e.preventDefault();

        const newMovie = {
            id : nanoid(),
            name:addMovie.name,
            description:addMovie.description,
            url:addMovie.url,
            rating:addMovie.rating,
        };
        const newMovies = [...movies,newMovie];
        setMovies(newMovies);
        handleModal();
    }

    const [filterText,setFilterText] = useState('');
    const [rating,setRating] = useState('');

    const changeText=(e)=>{
        e.preventDefault();
        setFilterText(e.target.value)
    }

    const changeRating=(e)=>{
        setRating(e.target.value);
    }
   
    return(
        <div >
            
            <div>
                <Button className="mt-2" onClick={handleModal}>Add movie</Button>
                <Modal show={val}>
                    <Modal.Header>Add A Movie !</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addNewMovie}>
                            <Form.Group>    
                            <input onChange={handleNewMovie} className="form-control mt-3" name="name" type="text"  placeholder='Enter movie name' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="description" type="text"  placeholder='Enter movie description' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="url" type="text"  placeholder='Enter movie url' required="required"></input>
                            <input onChange={handleNewMovie} className="form-control mt-3" name="rating" type="text"  placeholder='Enter movie rating' required="required"></input>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary" style={{float:"right",marginTop:5}}>Submit</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <div className="container justify-content-center mt-4" >
            <input style={{width:400}} className="form-control" onChange={changeText} type="text" name="filterText" placeholder='Search by text...'></input>
            <input  style={{width:400}} className="form-control" onChange={changeRating} type="text"  placeholder='Search by rating...'></input>
            </div>
            <div className="grid-container">
            {movies
        
            .filter(movie=>(
                movie.name.toLowerCase().indexOf(filterText)>=0 && movie.rating.toString().toLowerCase().indexOf(rating)>=0
            ))  
            .map(movie=>(
                <MovieCard  name={movie.name} description={movie.description} url={movie.url}  rating={movie.rating}/>
                ))
                }
            </div>
        </div>
    );
}