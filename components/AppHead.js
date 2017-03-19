import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import {clickTitleBtn} from '../actions'

class AppHead extends Component {
	constructor(props,context) {
	    super(props,context);
	    this.state = {open: true};
	}

    clickLink(url) {
        const {dispatch} = this.props
        dispatch(clickTitleBtn(false))
    }
    handleTouchTap(){
    	const {dispatch} = this.props
    	dispatch(clickTitleBtn(true))
    }
	render(){
		return(
	        <AppBar 
	        title='hanle'
			onLeftIconButtonTouchTap={e => this.handleTouchTap()}
			style={{position:"fixed" ,top:0}}
	        />
			)
	}
}
export default connect()(AppHead)
