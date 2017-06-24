import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from '../../styles/main'
import MovieModal from './movieModal'
import MovieCard from './MovieCard'

const {
	ScrollView,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
	ActivityIndicator,
	KeyboardAvoidingView
} = ReactNative

const imageBaseUrl = 'http://image.tmdb.org/t/p/w500/'
const movieIds = [166426,297762,283995,324552,126889,419430,381288,337339,282035,339846,274857,14564,295693,397837,433422,345938,381289,339967,258230,372058]

class Home extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	searchText: '',
	  	isLoading: false,
	  	modalVisible: false,
	  	movie: {}
	  };
	}

	componentWillMount() {
		/*this.props.fetchMovie(this.aMovieId()).then(() => {
			this.setState({
				isLoading: false,
				modalVisible: true,
				movie: this.props.oneMovie
			});
		})*/
	}

	fetchMovieDetails(movieId) {
		this.setState({isLoading: true});
		this.props.fetchMovie(movieId).then(() => {
			this.setState({
				isLoading: false,
				movie: this.props.oneMovie
			});

			setTimeout(()=>{
				this.setState({
					modalVisible: true
				});
			}, 20)
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
		return <View
		style={styles.container}>

			<KeyboardAvoidingView
			behavior="height"
			style={styles.searchSection}>
				<TextInput style={styles.searchInput}
					returnKeyType='search'
					underlineColorAndroid = "transparent"
					placeholder='SEARCH HERE'
					autoCapitalize = 'characters'
					onChangeText = {(searchText) => this.setState({searchText})}
					value={this.state.searchText}
				/>
				{this.state.isLoading && <View style={styles.searchButton}>
									<ActivityIndicator/>
								</View>}

				{!this.state.isLoading &&
					<TouchableHighlight style={styles.searchButton} onPress={ () => this.searchPressed() }>
								<Text>SEARCH</Text>
					</TouchableHighlight>}
			</KeyboardAvoidingView>
			{<ScrollView style={styles.scrollSection}>
					{this.movies().map((movie) => {
						return <View key={movie.id}>
							<TouchableHighlight
								onPress={() => this.fetchMovieDetails(movie.id) }
								underlayColor="transparent">
								<View>
									<MovieCard movie={movie}/>
								</View>
							</TouchableHighlight>
						</View>
					})}
				</ScrollView>
			}
			{this.state.modalVisible && <MovieModal {...this.props}/>}
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
