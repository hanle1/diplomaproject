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
import BlogPageContent from '../components/BlogPageContent'
import BlogPageSlider from '../components/BlogPageSlider'
import {requsetBlog} from '../actions'
import config from '../config/config.json'


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const SelectableList = makeSelectable(List);
class BlogPage extends Component{ 
	constructor(props,context) {
	    super(props);
	    this.state={
	    	categories: []
	    }
	}

    componentDidMount() {
    	let ctx = this;
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	}) 	

	}
	render(){
		const {blogType,blogContent} = this.props
		return(
		<div>
		    <BlogPageSlider categories ={this.state.categories}/>
		    {this.props.children}
	  	</div>
	)}
}

 
export default BlogPage