import React, { Component } from 'react'
import ReactNative from 'react-native'
import styles from '../../styles/main'

const {
	View,
	Text,
	Image
} = ReactNative

const imageBaseUrl = 'http://image.tmdb.org/t/p/w500/'

const MovieCard = (props) =>  {
  return <View style={styles.movieCard}>

    {/*Image View Container*/}
      <View style={styles.movieItemPosterContainer}>
        <Image
          resizeMode="contain"
          source= { {uri: imageBaseUrl + props.movie.poster_path} }
          style={styles.movieImage}/>
      </View>
      {/*Info View Container*/}
      <View style={styles.movieInfoContainer}>
        <View>
          <Text style={styles.movieTitle}>{props.movie.title}</Text>
          <Text style={styles.movieYear}>{props.movie.release_date}</Text>
        </View>
      </View>

    </View>;
}

// Make the Component available to other parts of app
export default MovieCard;
