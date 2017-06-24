import React, { Component } from 'react'
import styles from '../../styles/main'
import { connect } from 'react-redux'
import SlidingUpPanel from 'rn-sliding-up-panel'
import {
   Text,
   TouchableHighlight,
   View,
   Image,
   StyleSheet,
   ScrollView,
   Modal
} from 'react-native'


const imageBaseUrl = 'http://image.tmdb.org/t/p/w500/'

class MovieModal extends Component {
   constructor(props) {
     super(props);
   }

   _handleOnRequestClose() {
      this.props.hideModal();
   }

   movie() {
      return this.props.oneMovie.movie;
   }

   render() {
      return (
            <Modal
               visible = {this.props.modalVisible}
               animationType={"slide"}
               onRequestClose = {() => { this._handleOnRequestClose() } }
               >
               <ScrollView style = {styles.modal}>
                  <Image
                   resizeMode="cover"
                   source={{uri: imageBaseUrl + this.movie().poster_path}}
                   style = {styles.movieImageFull}
                  />
                  <View style = {styles.spacer}></View>
                  <View style={styles.movieInfoFull}>
                  <Text style = {styles.movieTitle}>{this.movie().title}</Text>
                  <View style = {styles.spacer}></View>
                  <Text>{this.movie().release_date}</Text>
                  <View style = {styles.spacer}></View>
                  <Text>{this.movie().overview}</Text>
                  </View>
                  <TouchableHighlight
                     style={styles.closeButton}
                     onPress={() => {this._handleOnRequestClose()}}>
                     <Text style = {styles.text}>CLOSE</Text>
                  </TouchableHighlight>
               </ScrollView>
            </Modal>
      )
   }
}

function mapStateToProps(state) {
  return {
    modalVisible: state.modalVisible,
    oneMovie: state.oneMovie
  }
}

export default connect(mapStateToProps)(MovieModal);
