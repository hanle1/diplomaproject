import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/divider'
import Paper from 'material-ui/Paper';
import CommentReply from './CommentReply'
import ReplyButton from './post/ReplyButton'
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';
const style = {
  "width": "100%",
  margin: 20,
  display: 'inline-block',
};

class Discuss extends Component{ 
	constructor(props) {
        super(props)
    }
	render(){
		const {replyMessages} = this.props;
		const {commentReplies} = this.props
		return(<div style={{"width":"100%"}}>
			<Divider/>
			<Card style={{"margin":"4% auto","width":"85%",background:"#FAFAFA"}}>
	        <CardHeader
	          title="URL Avatar"
	        />
	        <CardText>
	         {replyMessages.comment.content}
	        <br/> 
	        <br/>
	        <ReplyButton replyId = {replyMessages.comment.id}commentId={replyMessages.comment.id}/>
			<br/>
	        </CardText>
	        {replyMessages.commentReplies.map(item => {
						return (
					<CommentReply replyMessage = {item} key={item.id}/>
					)})}
	      </Card>
			</div>)
	}
}
export default Discuss
