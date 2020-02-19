import React from 'react';
import axios from 'axios';


const UpdateMovie = () => {



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