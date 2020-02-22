import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
};


const UpdateMovie = (props) => {
    const [movie, setMovie] = useState(initialMovie);

    useEffect(() => {
      axios
          .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
          .then( response => {
              setMovie(response.data);
          })
    }, [props.match.params.id])

    const changeHandler = e => {
      setMovie({ ...movie, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
          .then(res => {
            props.history.push(`/movies/${movie.id}`);
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    onChange={changeHandler}
                    placeholder="id"
                    value={movie.id}
                />
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="title"
                    value={movie.title}
                />
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="director"
                    value={movie.director}
                />
                <input
                    type="text"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="metascore"
                    value={movie.metascore}
                />
                <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                    placeholder="stars"
                    value={movie.stars}
                />
                <button className="update-form-botton">Update</button>
            </form>
        </div>
    )
};

export default UpdateMovie;