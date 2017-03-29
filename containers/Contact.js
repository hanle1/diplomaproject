import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import '../style/contact.css'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Contact extends Component{ 
	render(){
		return(
		<div className="main">
				 <div className="inset">
				 	<div className="social-icons">
		    			 <div className="span"><i>Please fill in your information, confirm and submit  </i><div class="clear"></div></div>	
    					 <div className="clear"></div>
					</div>
				 </div>	
				 <h2>Or sign up with</h2>
				 <form>
				 <TextField  hintText="Hint Text" fullWidth="true"/><br />	
				 <TextField  hintText="Hint Text" /><br />	
				 <TextField  hintText="Hint Text" fullWidth="true"/><br />	
				 <TextField  hintText="Hint Text" fullWidth="true"/><br />	
				<div className="submit">
					<input type="submit" onclick="myFunction()" value="Create account" />
				</div>
				<div className="clear"> </div>
				 </form>
		</div>
	)}
}

export default Contact;