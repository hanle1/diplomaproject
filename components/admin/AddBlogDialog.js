import React, {Component, PropTypes} from 'react'
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';
import {setAddDialogStatus} from '../../actions'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';

class AddBlogDialg extends Component{
	 constructor(props,context) {
	    super(props);
	    this.handleClose = this.handleClose.bind(this)

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
	        onTouchTap={this.handleClose}
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