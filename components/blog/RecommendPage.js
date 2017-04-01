import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import BlogSection from './BlogSection'
import {connect} from 'react-redux'
import {requsetBlog} from '../../actions'

class RecommendPage extends Component{ 

	constructor(props) {
        super(props)
    }
    componentDidMount(){
    	const {dispatch} = this.props
		dispatch(requsetBlog('/recommend'))
    }
	render(){
		const {blogContent} = this.props 
		return(<div>
			{blogContent.map(item => {
						return (
					<BlogSection post={item}/> 
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
export default connect(mapStateToProps)(RecommendPage)
