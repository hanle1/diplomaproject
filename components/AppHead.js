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
								<li><a href="#">主页</a></li>
								<li><a href="#/blog">博客</a></li>
								<li><a href="#/message">留言板</a></li>
								<li><a href="#/about">关于</a></li>
								<li><a href="#/essay">随笔</a></li>
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
