import React, { useState } from 'react';
import axios from 'axios';

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
};


const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialMovie);

    useEffect(() => {
        const selectedMovie = props.items.find(movie => {
          return `${movie.id}` === props.match.params.id;
        });
        console.log(selectedMovie);
        if (selectedMovie) {
          setItem(selectedMovie);
        }
    }, [props.items, props.match.params.id]);

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === "price") {
          value = parseInt(value, 10);
        }
    
        setMovie({
          ...movie,
          [ev.target.name]: value
        });
    };



    const handleSubmit = e => {
        e.preventDefault();
        axios
          .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
          .then(res => {
            props.updateItems(res.data);
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