import React, {Component, PropTypes} from 'react'
import axios from 'axios';
import marked from 'marked'
import '../style/markdown.css'
import '../style/railscasts.css'
import config from '../config/config.json'
import BlogPageSlider from '../components/BlogPageSlider'
import CommentArea from '../components/CommentArea'
import Loading from '../components/common/Loading'

var blogbody={
	"marginTop":"2%",
}
var blogtitle={
	"marginLeft": "6%",
	"marginRight": "4%",
	"marginTop":"2%",
	"color":"#1A237E",
}
var blogtext={
	"marginLeft":"1%",
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
	    	categories: [],
	    	isReady: false
	    }
    }
    getChildContext() {
    	const {location} = this.props
    	var add = location.pathname.split('/')
	    return {id: add[(add.length-1)]};
	}
    componentDidMount() {
		const {location} = this.props
    	let ctx = this;
    	axios.get(config.remote_url+location.pathname+'/markdown').then(res=>{
    		ctx.setState({bloghtml:marked(res.data.blogContent,{sanitize: true}).toString()});
    		ctx.setState({blogtitle:res.data.blogTitle});
    		ctx.setState({blogType:res.data.type});
    		this.setState({isReady: true});
    	}) 	
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	})
	}
	render() {
		if (this.state.isReady){
		return (
			<div>
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
		)}
		else return (<Loading title="Loading Content ... "/>)
	}
}
Post.childContextTypes = {
  id: React.PropTypes.string
};
export default Post;