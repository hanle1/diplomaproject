import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MessageCard from './MessageCard';

class MessageContent extends Component {
	render(){
	return(
		<div>
		<MessageCard/>
		<MessageCard/>
		<MessageCard/>
		<MessageCard/>
		</div>	
	    )}
}
export default MessageContent