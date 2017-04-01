import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import config from '../../config/config.json'
import {connect} from 'react-redux'
import {requsetMessages} from '../../actions'

class MessageInput extends Component {
	constructor(props) {
        super(props)
    }
	send = () =>{
		var ctx = this
		axios.post(config.remote_url+"/message/add",
			{name:document.getElementById('name').value,
			email:document.getElementById('email').value,
			message:document.getElementById('message').value},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
				const {dispatch} = ctx.props
				dispatch(requsetMessages())
				alert(response.data);
			})

	　　}
	render(){
	return(
		<div className="basic-grey">
	        <form action="" method="post" className="STYLE-NAME">
	        <h1>leave a message:
	        <span>Please fill all the texts in the fields.</span>
	        </h1>
	        <label>
	        <span>Your Name :</span>
	        <input id="name" type="text" name="name" placeholder="Your Full Name" />
	        </label>
	         
	        <label>
	        <span>Your Email :</span>
	        <input id="email" type="email" name="email" placeholder="Valid Email Address" />
	        </label>
	        <label>
	        <span>Message :</span>
	        <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
	        </label>
	        <label>
	        <span>&nbsp;</span>
		    <FlatButton
		    	style={{backgroundColor:"red",color:"white"}}
		        label="Send"
		        primary={true}
		        onTouchTap={this.send}
		      />
	        </label>
	        </form>
	    </div>	
	    )}
}

export default connect()(MessageInput)