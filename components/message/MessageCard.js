import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class MessageCard extends Component {
	render()
	{
		return(
			<Card style={{"width":"80%","marginLeft":"10%","marginTop":"6","marginBottom":"26","background":"#E8E8E8"}}>
			    <CardHeader
			      title="韩乐"
			      subtitle="hannuo292@qq.com"
			    />
			    <CardText>
			     你好:
			    </CardText>
			</Card>	
			)
	}
}
export default MessageCard