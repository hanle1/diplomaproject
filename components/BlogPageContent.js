import React, {Component, PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText,CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import BlogCard from './BlogCard'
import config from '../config/config.json'
import BlogSection from '../components/blog/BlogSection'
import {connect} from 'react-redux'


class BlogPageContent extends Component{ 
	

	constructor(props) {
        super(props)
        this.state={
    		blogs:[]
    	 }
    }
	componentDidMount() {
		// 通过connect将state注入到props

		// const {location} = this.props
		// let ctx = this;
		// axios.get(config.remote_url+'/blog/sort/'+blogType).then(res=>{
  //   		ctx.setState({blogs:res.data});
  //   	}) 	
    	
	}
	render(){
		const {blogContent} = this.props //
		return(<div>
			{blogContent.map(item => {
						return (
					<BlogSection key={Math.random()} post={item}/> 
					)})}
			
			</div>)
	}
}
function mapStateToProps(state) {
    const {replaceBlogStatus} = state
    return {
        blogContent: replaceBlogStatus.blogContent
    }
}
export default connect(mapStateToProps)(BlogPageContent)
