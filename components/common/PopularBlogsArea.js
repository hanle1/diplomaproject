import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'

class PopularBlogArea extends Component{ 
constructor(props) {
	 super(props)
        this.state={
        	popularblogs:[]
        }
}
 componentDidMount(){
    	let ctx = this;
    	axios.get(config.remote_url+"/blogs/popular").then(res=>{
    		ctx.setState({popularblogs: res.data});
    	}) 
    }

render() {
    	return(
			<div className="content">
				{this.state.popularblogs.map(item => {
					return (
					<div className="post">
						<img src={require("../../img/img4.jpg")} style={{"width":"50px"}}/>
						<h4><a href="#">{item.blogTitle}</a></h4>
						<p>{item.creationtime}</p>
					</div>
						)
				})}				
			</div>
    		)
    }
}
export default PopularBlogArea