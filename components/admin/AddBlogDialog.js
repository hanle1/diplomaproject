import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';
import {setAddDialogStatus} from '../../actions'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import config from '../../config/config.json'
import axios from 'axios';

class AddBlogDialg extends Component{
	 constructor(props,context) {
	    super(props);
	    this.handleClose = this.handleClose.bind(this)

	}
	handleConfirm(){
		var ctx = this
		var type = document.getElementById('blogtype').value
		var blogTitle = document.getElementById('newblogname').value
		axios.post(config.remote_url+"/blogs/add",
			{blogTitle:blogTitle,
			description:'待编辑博客描述',
			blogContent:'待编辑博客内容',
			type:type},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
				console.log(response.data);
				const {dispatch} = this.props
				dispatch(setAddDialogStatus(false))
			})
	}
	handleClose(){
		const {dispatch} = this.props
        dispatch(setAddDialogStatus(false))
	}
	render(){
		const {isopen} = this.props //通过connect将state注入到props
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onTouchTap={this.handleConfirm}
	      />,
	    ];
		return(
			<Dialog
	          title="添加博客类型"
	          modal={false}
	          actions={actions}
	          open={this.props.isopen}
	          onRequestClose={this.handleClose}
	        >
			<TextField
				id="blogtype"
			    hintText="Hint Text"
			    floatingLabelText="填写博客类型"
			    />	
			<br />
			<TextField
				id="newblogname"
			    hintText="Hint Text"
			    floatingLabelText="请添加一篇新博文"
			    />        
	        </Dialog>
        )
    }
}

function mapStateToProps(state) {
    const {dialogBtnStatus} = state
    return {
        isopen: dialogBtnStatus.isopen
    }
}
export default connect(mapStateToProps)(AddBlogDialg)