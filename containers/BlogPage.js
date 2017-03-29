import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionLabel from 'material-ui/svg-icons/action/label';
import {clickTitleBtn} from '../actions'
import { routeActions } from 'redux-simple-router'
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux'
import axios from 'axios';
import {requsetBlog} from '../actions'
import config from '../config/config.json'
import BlogSider from '../components/blog/BlogSider'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class BlogPage extends Component{ 
	
	render(){
		const {blogType,blogContent} = this.props
		return(
			<section id="content">
				<div className="wrap-content">
				<div className="row block">

				<div id="main-content" className="col-2-3">
					<div className="wrap-col">
						{this.props.children}					
					</div>
				</div>
				<BlogSider/>
				</div>
				</div>
			</section>
		  
	)}
}

 				

export default BlogPage