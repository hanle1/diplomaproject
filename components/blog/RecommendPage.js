import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import BlogSection from './BlogSection'
class RecommendPage extends Component{ 

	constructor(props) {
        super(props)
        this.state={
    		blogs:[]
    	 }
    }
	render(){
		const {location} = this.props
		let ctx = this;
		axios.get(config.remote_url+"/blog/sort/react").then(res=>{
    		ctx.setState({blogs:res.data});
    	}) 
		return(<div>
			{this.state.blogs.map(item => {
						return (
					<BlogSection post={item}/> 
					)})}
			
			</div>)
	}
}
export default RecommendPage;