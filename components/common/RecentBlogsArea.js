
import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'

class RecentBlogsArea extends Component{ 
constructor(props) {
	 super(props)
        this.state={
        	recentblogs:[]
        }
}
 componentDidMount(){
    	let ctx = this;
    	axios.get(config.remote_url+"/blogs/recent").then(res=>{
    		ctx.setState({recentblogs: res.data});
    	}) 
    }

render() {
    	return(
			<div className="content">
				<ul>
				{this.state.recentblogs.map(item => {
					return (
					<div className="post">
						<img src={require("../../img/img4.jpg")} style={{"width":"50px"}}/>
						<h4><a href="#">{item.blogTitle}</a></h4>
						<p>{item.creationtime}</p>
					</div>
						)
				})}								
				</ul>
			</div>
    		)
    }
}
export default RecentBlogsArea