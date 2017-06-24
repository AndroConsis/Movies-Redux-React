import * as types from './types'
import Api from '../lib/api'

export function fetchMovies(query) {
	return (dispatch, getState) => {
		const params = `&query=${encodeURIComponent(query)}&`;
		return Api.get(`/search/movie?${params}`).then(resp => {		
			dispatch(setSearchedMovies({ movies: resp.results }))
		}).catch( (ex) => {
			// Nothing
		})
	}
}

export function fetchMovie(id) {
	// dispatch method will send the message out to the application
	// getState method gives access to entire state of application at the point this is called, all the reducers and everything
	return (dispatch, getState) => {	
		return Api.get(`/movie/${id}?`).then(resp => {
			dispatch(setOneMovie({movie: resp}))
		}).catch( (ex) => {
			console.log("EXCEPTION: " + ex);
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

export function hideModal () {
	return (dispatch, getState) => {
		return dispatch(hideTheModal({value: false}));
	}
}

export function hideTheModal(value) {
	return {
		type: types.HIDE_MODAL,
		value
	}
}