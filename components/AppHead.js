import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar';
import {clickTitleBtn} from '../actions'
import '../style/head.css'
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
		<header>
			<div className="wrap-header">
				<div id="logo">
					<h1>heino blog </h1>
				</div>
				
				<nav>
					<div className="wrap-nav">
						<div className="menu">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#/blog">Blog</a></li>
								<li><a href="#/Gallery">Gallery</a></li>
								<li><a href="#/about">About</a></li>
								<li><a href="#/contact">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
				
			</div>
		</header>

			)
	}
}
export default connect()(AppHead)
