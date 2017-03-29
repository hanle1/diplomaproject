import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/divider'
import RaisedButton from 'material-ui/RaisedButton';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';
import ReplyButton from './post/ReplyButton'
const button ={
	float:"right",
	marginRight: 20,
}

class CommentReply extends Component{ 
	render(){
		const {replyMessage} = this.props
		return(
		        <div style={{fontSize:3}}>
		        <Divider/>
		        <CardHeader
		          title="zhao lei"
		        />
		        <CardText>
		         {replyMessage.content}
		        <br/>
		        <br/>
				<ReplyButton replyId = {replyMessage.id} commentId={replyMessage.commentId}/> <br/>
		        </CardText>
		        </div>)
	}
}
export default CommentReply
