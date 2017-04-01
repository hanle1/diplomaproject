import React, {Component, PropTypes} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MessageCard from './MessageCard';
import axios from 'axios';
import config from '../../config/config.json'
import {requsetMessages} from '../../actions'
import {connect} from 'react-redux'

class MessageContent extends Component {
	constructor(props) {
        super(props)
    }


    componentDidMount(){
    	const {dispatch} = this.props
		dispatch(requsetMessages())
    }

	render(){
		const {messages} = this.props
	return(
		<div>
		{messages.map(item => {
						return (
					<MessageCard key={Math.random()} message={item} /> 
					)})}
		</div>	
	    )}
}

function mapStateToProps(state) {
    const {replaceMessageStatus} = state
    return {
        messages: replaceMessageStatus.messages
    }
}
export default connect(mapStateToProps)(MessageContent)