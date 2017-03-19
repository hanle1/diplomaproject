import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog';

class MessageDialog extends Component {
	constructor(props,context) {
	    super(props);
	    this.state = {
	    open: false,
	  };
	}
	 

	  handleOpen = () => {
	    this.setState({open: true});
	  };

	  handleClose = () => {
	    this.setState({open: false});
	  };
	  submit=()=>{
	  	this.setState({open: false});
	  }
	render(){
		const actions = [
	      <FlatButton
	        label="Ok"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.submit}
	      />,
	    ];
		return(
		<Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>)
	}
}
export default MessageDialog