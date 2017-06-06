import React from "react-native";
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1 ;

// We set our base font size value
const base_unit = 22;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function 
export function em(value) {
  return unit * value;
}


module.exports = StyleSheet.create({
	container: {
	  flex: 1
	},

	searchSection: {
		borderBottomWidth: 2,
		borderBottomColor: '#212121',
		backgroundColor: 'white',
		flexDirection: 'row',
	},

	searchInput: {
		flex: .8,
		paddingLeft: em(1),
      	paddingRight: em(1),
      	fontSize: em(1.25),
	},

	searchButton: {
		flex: 0.2,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		borderLeftColor: '#BDBDBD',
      	borderLeftWidth: 1
	},

	scrollSection : {
		backgroundColor: 'white',
	},

	movieCard: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: "#FFFFFF",
		borderBottomWidth: 0,
		padding: 10,
		paddingBottom: 0,
		borderColor: '#e5e5e5',
		justifyContent: 'space-between',
      	height: (x - em(10) * 2) * (2/5)
	},

	movieImage: {
		height: (x - em(1.75) * 2) * (3/5),
		width: (x - em(1) * 2) * (2/5),
		marginLeft: em(.4),
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},

	movieInfo: {
		flex: 1,
		alignItems: 'flex-start',
		padding: em(.2),
		paddingTop: 0,
	},

	movieTitle: {
		color: '#212121',
		alignSelf: 'flex-start',
		fontSize: em(1.25),
	},

	movieYear: {
		fontSize: em(1.25),
		marginTop: em(.2),
   	  	color: '#616161'
	},

	modalContainer: {
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100
	},

	modal: {
	  flex: 1,
	  alignItems: 'center',
	  backgroundColor: '#f7021a',
	  padding: 100
	},

	text: {
	  color: '#3f2949',
	  marginTop: 10
	}
});