import React, {Component, PropTypes} from 'react'
class MessageInput extends Component {
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
	        <input type="button" className="button" value="Send" />
	        </label>
	        </form>
	    </div>	
	    )}
}
export default MessageInput