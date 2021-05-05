import React, { Component } from 'react';
import { getMovies }from '../services/fakeMovieService';


class Movies extends Component {
    state = { 
        movies : getMovies()
     };

     handleDelete = (movie) =>
     {
        const mov = this.state.movies.filter(m => m._id !== movie._id);
        this.setState( {movies : mov} )
     }

    render() { 


        const {length : cnt } = this.state.movies;

        if(cnt === 0)
            return <p>There is no movie present in the Database</p>

        return (
        
        <React.Fragment>
        <p>There is {cnt} more movies present in the Database</p>
        <table className="table">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Genre</td>
                    <td>Stock</td>
                    <td>Rate</td>
                    <td></td>
                </tr>
            </thead>

            <tbody>

                {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                ))}

                
            </tbody>
        </table>
        </React.Fragment>
        
        );
    }
}
 
export default Movies;