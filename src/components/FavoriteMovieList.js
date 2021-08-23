import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoriteActions';

const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    const handleRemoveFavorite = (e, id) => {
        e.preventDefault();

        props.removeFavorite(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={(e) => handleRemoveFavorite(e, movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return {
        favorites: state.favoritesReducer.favorites
    }
}
const mapDispatchToProps = {removeFavorite}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);