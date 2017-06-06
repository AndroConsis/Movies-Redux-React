import * as types from './types'
import Api from '../lib/api'

export function fetchMovies(query) {
	return (dispatch, getState) => {
		const params = `&query=${encodeURIComponent(query)}&`;
		return Api.get(`/search/movie?${params}`).then(resp => {		
			dispatch(setSearchedMovies({ movies: resp }))
		}).catch( (ex) => {
			// Nothing
		})
	}
}

export function fetchMovie(id) {
	return (dispatch, getState) => {
		const params ='';
		return Api.get(`/movie/${id}?`).then(resp => {
			dispatch(setOneMovie({movie: resp}))
		}).catch( (ex) => {
			console.log(ex);
		})
	}
}

export function setSearchedMovies( { movies }) {
	return {
		type: types.SET_SEARCHED_MOVIES,
		movies
	}
}

export function setOneMovie({ movie }) {
	return {
		type: types.SET_ONE_MOVIE,
		movie
	}
}