import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import PopularBlogsArea from '../common/PopularBlogsArea'
import RecentBlogsArea from '../common/RecentBlogsArea'
var fontStyle={
	fontSize:14,"color":"#000000"
}
class HomeSider extends Component{ 
constructor(props, context) {
        super(props,context)
        this.state={
        	categories:[],
        }
    }
    componentDidMount(){
    	let ctx = this;
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	}) 
    }

    render() {
    	return(
 			<div id="sidebar" className="col-1-3">
				<div className="wrap-col">
					<div className="box">
						<div className="heading"><h2>关于这篇博客</h2></div>
						<div className="content">
							<p style={fontStyle}>博客的目的主要用来记录所学的知识以及分享所学内容，关于这个博客，
							后端架构使用的spring mvc+mybatis，前端使用的是react，项目部署在阿里云上的tomcat.</p><br/>
						</div>
					</div>
					<div className="box">
						<div className="heading"><h2>最近提交</h2></div>
						<RecentBlogsArea/>
					</div>
					<div className="box">
					    <div className="heading"><h2>popular blogs</h2></div>
						<PopularBlogsArea/>
					</div>
				</div>
			</div>
		)
    }
}
export default HomeSider;