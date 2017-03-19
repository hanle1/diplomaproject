import React, {Component, PropTypes} from 'react';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/divider'
import Discuss from './Discuss'
var commentStyle={
	"paddingTop":"4%",
	"paddingLeft":"4%",
	"paddingRight":"4%",
	border:2
}
class CommentArea extends Component{ 
	render(){
		return(<div style={commentStyle}>
			<hr style={{height:1,border:0,color:"#D5D5D5"}}/>
			<Divider/><br/>
			<h1 style={{"font-size":"24","color":"#2196F3"}}>Comment</h1>
			<Discuss/>
			<Discuss/>
			<Discuss/>
			</div>)
	}
}

export default CommentArea
