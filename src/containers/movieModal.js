import React, { Component } from 'react'
import styles from '../../styles/main'

import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet
} from 'react-native'

class MovieModal extends Component {

   state = {
      modalVisible: false,
   }

   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

   render() {
      return (
         <View style = {styles.modalContainer}>

            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>

                  <TouchableHighlight onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>

               </View>
            </Modal>

            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>

         </View>
      )
   }
}

export default MovieModal