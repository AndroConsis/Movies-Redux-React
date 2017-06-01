import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedMovies = createReducer({}, {
	[types.SET_SEARCHED_MOVIES](state, action) {
		let newState = {};
		action.movies.forEach( (movie) => {
			newState[movie.id] = movie
		});
		return newState;
	}
});