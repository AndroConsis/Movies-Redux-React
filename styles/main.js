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

// Color Palette
const BUD = '#F8B195'
const FROLY = '#F67280'
const TURKISH = '#C06C84'
const SMOKY = '#6C5B7B'
const MING = '#355C7D'


// We add an em() shortcut function
export function em(value) {
  return unit * value;
}



module.exports = StyleSheet.create({
	container: {
	  flex: 1,
	},

	searchSection: {
		flexDirection: 'row',
		backgroundColor: TURKISH,
		flex: .1,
	},

	searchInput: {
		flex: .8,
		paddingLeft: em(1),
  	paddingRight: em(1),
  	fontSize: em(1.25),
  	color: 'white',
	},

	searchButton: {
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 6,
	},

	scrollSection : {
		flex: 2
	},

	movieCard: {
  	height: 150,
  	flex: 1,
  	flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
  	borderRadius: 2,
  	borderColor: BUD,
  	marginLeft: 5,
  	marginRight: 5,
  	marginTop: 5,
	},

  movieCardPosterContainer: {
      flex: .4,
  },

	movieImage: {
		// height: (x - em(1.75) * 2) * (3/5),
		// width: (x - em(1) * 2) * (2/5),
    backgroundColor: TURKISH,
    flex: 1,
	},

	movieCardInfoContainer: {
    flex: .8,
    flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingLeft: 10,
		paddingTop: 10,
	},

	movieTitle: {
		fontSize: 24,
	},

	movieYear: {
	},

	modal: {
	  flex: 1,
	  top: 0,
	  bottom: 0,
	  right: 0,
	  left: 0,
	  backgroundColor: 'white'
	},

	movieImageFull: {
	  height: 450,
	},
	movieInfoFull: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 10,
	},

	text: {
	  marginTop: 10
	},
	spacer: {
		height: 6,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 100,
		left: 100,
		alignItems: 'center',
		justifyContent: 'center',
		height: 44,
		borderRadius: 2,
		borderWidth: 1,

	},

	text: {
		fontSize: 18,
		fontWeight: "700",
	},

	activityIndicator: {
		flex: 1,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		color: FROLY,
	},

	movieItemPosterContainer: {
		flex: 2,
	},
});
