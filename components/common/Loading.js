import React, {Component, PropTypes} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper'
const progress= {
	marginTop: "10%", marginLeft: "44%"
}
const paper={
	height: 1400
}
const text={
	lineHeight: 1.1, fontWeight: "normal",
	color: "#757575", marginTop: 50,
	textAlign: "center"
}
class Loading extends Component{
	
	render() {
		return (
			<Paper zDepth={4} style={paper}>
				<br/><br/>
				<h1 style={text}>loading</h1>
				<CircularProgress
					style={progress}
					mode="indeterminate" size={150} thickness={8} />
			</Paper>
		)
	}
}

export default Loading
