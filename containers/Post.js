import React, {Component, PropTypes} from 'react'
import axios from 'axios';
import marked from 'marked'
import '../style/markdown.css'
import '../style/railscasts.css'
import config from '../config/config.json'
import BlogPageSlider from '../components/BlogPageSlider'
import CommentArea from '../components/CommentArea'
var blogbody={
	"marginLeft": "20%",
	"marginTop":"2%",
}
var blogtitle={
	"marginLeft": "24%",
	"marginRight": "4%",
	"marginTop":"2%",
	"font-size":"20px",
	"color":"#1A237E"
}
var blogtext={
	"marginLeft":"4%",
	"marginRight":"2%"
}
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true
});
class Post extends Component{
	constructor(props) {
        super(props);
        this.state={
	    	bloghtml:'',
	    	blogtitle:'',
	    	blogType:'',
	    	categories: []
	    }
    }
    componentDidMount() {
		const {location} = this.props
    	let ctx = this;
    	axios.get(config.remote_url+location.pathname+'/markdown').then(res=>{
    		ctx.setState({bloghtml:marked(res.data.blogContent,{sanitize: true}).toString()});
    		ctx.setState({blogtitle:res.data.blogTitle});
    		ctx.setState({blogType:res.data.type});
    	}) 	
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	})
	}
	render() {
		return (
			<div>
			<BlogPageSlider categories ={this.state.categories}/>
			<section style={blogtitle}>
			目录: <a href={config.local_sort_url+this.state.blogType}>{this.state.blogType}</a> >> {this.state.blogtitle}
			</section>
			<div style={blogbody}>
			<div style={blogtext}
			className="markdown-body" 
			dangerouslySetInnerHTML={{__html: this.state.bloghtml}}/>
			<CommentArea/>
			</div>
			</div>
		);
	}
	
}

export default Post;