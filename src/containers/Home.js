import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from '../../styles/main'

const {
	ScrollView,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
} = ReactNative

const imageBaseUrl = 'http://image.tmdb.org/t/p/w500/'
const movieIds = [166426,297762,283995,324552,126889,419430,381288,337339,282035,339846,274857,14564,295693,397837,433422,345938,381289,339967,258230,372058]

class Home extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	searchText: '',
	  	isLoading: true,
	  };
	}

	componentWillMount() {
		this.props.fetchMovie(this.aMovieId()).then(() => {
			console.log(this.props.oneMovie);
			this.setState({isLoading: false});
		})
	}

	searchPressed() {
		this.setState({isLoading: true});
		this.props.fetchMovies(this.state.searchText).then(() => {
			this.setState({isLoading: false});
		});
	}

	movies() {
		return Object.keys(this.props.searchedMovies).map( key => this.props.searchedMovies[key])
	}

	releaseYear(date) {
		return (date.split('-'))[0]
	}

	aMovieId() {
		return movieIds[Math.floor(Math.random()*movieIds.length)];
	}

	render() {
		return <View style={styles.container}>
			<View style={styles.searchSection}>
				<TextInput style={styles.searchInput}
					returnKeyType='search'
					underlineColorAndroid = "transparent"
					placeholder='Movie name'
					onChangeText = {(searchText) => this.setState({searchText})}
					value={this.state.searchText}
				/>
				<TouchableHighlight style={styles.searchButton} onPress={ () => this.searchPressed() }>
				<Text>SEARCH</Text>
				</TouchableHighlight>
			</View>
			{ !this.state.isLoading && <ScrollView style={styles.scrollSection}>
					{this.movies().map((movie) => {
						return <View key={movie.id} style={styles.movieCard}>
							<Image 
							resizeMode="contain" 
							source= { {uri: imageBaseUrl + movie.poster_path} } 
							style={styles.movieImage}/>
							<View style={styles.movieInfo}>
								<Text style={styles.movieTitle}>{movie.title}</Text>
								<Text style={styles.movieYear}>{this.releaseYear(movie.release_date)}</Text>
							</View>
						</View>
					})}
				</ScrollView> 
			} 
			{	this.state.isLoading && <View>
					<Text>Looking for it...</Text>
				</View>

			}

		</View>
	}
}

function mapStateToProps(state) {
	return {
		searchedMovies: state.searchedMovies,
		oneMovie: state.oneMovie
	}
}

export default connect(mapStateToProps)(Home);