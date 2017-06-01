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

class Home extends Component {

	searchPressed() {
		this.props.fetchMovies('Batman');
	}

	render() {
		return <View>
			<View>
				<TouchableHighlight style={styles.button} onPress={ () => this.searchPressed() }>
				<Text>Fetch Movies</Text>
				</TouchableHighlight>
			</View>
			<ScrollView>

			</ScrollView>
		</View>
	}
}

function mapStateToProps(state) {
	return {
		searchedMovies: state.searchedMovies
	}
}

export default connect(mapStateToProps)(Home);