import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText,CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import BlogCard from './BlogCard'
import config from '../config/config.json'
var blogContain={
	"marginLeft":"23%",
}
class BlogPageContent extends Component{ 
	

	constructor(props) {
        super(props)
        this.state={
    		blogs:[]
    	 }
    }
	// componentDidMount() {
	// 	const {location} = this.props
	// 	let ctx = this;
	// 	axios.get(config.remote_url+location.pathname).then(res=>{
	// 		console.log(res.data)
 //    		ctx.setState({blogs:res.data});
 //    	}) 	
    	
	// }
	render(){
		const {location} = this.props
		let ctx = this;
		axios.get(config.remote_url+location.pathname).then(res=>{
    		ctx.setState({blogs:res.data});
    	}) 
		return(<div 
			style={blogContain}>
			{this.state.blogs.map(item => {
						return (
					<BlogCard post={item}/>
					)})}
			
			</div>)
	}
}

export default BlogPageContent