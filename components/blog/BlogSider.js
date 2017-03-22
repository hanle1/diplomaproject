import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'


class BlogSider extends Component{ 
constructor(props, context) {
        super(props,context)
        this.state={
        	categories:[]
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
						<div className="heading"><h2>About us</h2></div>
						<div className="content">
							<img src={require("../../img/zerotheme.jpg")} style={{border: 0}}/>
							<p>Html5 Templates created by chinaz. You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files.</p>
						</div>
					</div>
					<div className="box">
						<div className="heading"><h2>Categories</h2></div>
						<div className="content">
							<ul>
							{this.state.categories.map(item => {
								return (
								<li><a href={"#/blog/sort/"+item}>{item}</a></li>
									)
							})}								
							</ul>
						</div>
					</div>
					<div className="box">
						<div className="heading"><h2>Popular Post</h2></div>
						<div className="content">
							<div className="post">
								<img src={require("../../img/img4.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
							<div className="post">
								<img src={require("../../img/img5.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
							<div className="post">
								<img src={require("../../img/img1.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
    }
}
export default BlogSider;