import React, {Component, PropTypes} from 'react'
import MessageInput from '../components/message/MessageInput'
import MessageBoard from '../components/message/MessageBoard'
class Message extends Component {
render(){
	return(
		<div className="messagepage">
			<h1>留言板</h1>
			<MessageBoard/>
			<MessageInput/>
		</div>
	)}
}
export default Message