import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/divider'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import config from '../../config/config.json'
const button ={
	float:"right",
	marginRight: 20,
}

class ReplyButton extends Component{ 
	constructor(props) {
        super(props);
        this.state={
	    	open:false
	    }
    }

	  handleOpen = () => {
	    this.setState({open: true});
	  };

	  handleClose = () => {
	  	const {replyId} = this.props
	  	const {commentId} = this.props
		var message = document.getElementById('replyMessage').value;
		if (message !== null && message !== undefined && message !== '') {
		axios.post(config.remote_url+"/comment/reply",
			{blogId:this.context.id,
			content:message,
			replyId:replyId,
			commentId:commentId
			},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
				alert(response.data);
			})	
			document.getElementById('message').value=""		
		}else{
			alert('Please enter chat content ')
		}
	    this.setState({open: false});
	    this.context.refreshfuc
	  };

	render(){
		const actions = [
	      <FlatButton
	        label="Ok"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];
		return(
		      <div>
		     	<RaisedButton label="reply" primary={true} onTouchTap={this.handleOpen}/>
		        <Dialog
		          title="请输入回复内容"
		          actions={actions}
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
			         <TextField
			          id="replyMessage"
				      hintText="输入回复内容"
				      multiLine={true}
				      rows={2}
				      rowsMax={4}
				    /><br />
		        </Dialog>
		      </div>)
	}
}
ReplyButton.contextTypes = {
  id: React.PropTypes.string,
  refreshfuc: React.PropTypes.func
};

export default ReplyButton
