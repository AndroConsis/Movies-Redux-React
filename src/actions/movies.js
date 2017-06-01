import * as types from './types'
import Api from '../lib/api'

export function fetchMovies(query) {
	return (dispatch, getState) => {
		const params = [
			`query=${encodeURIComponent(query)}`
		].join('&');
		return Api.get(`/search/movie?${params}`).then(resp => {
			dispatch(setSearchedMovies({ movies: resp }))
		}).catch( (ex) => {
			// Nothing
		})
	}
}

export function setSearchedMovies( { movies }) {
	return {
		type: types.SET_SEARCHED_MOVIES,
		movies
	}
}