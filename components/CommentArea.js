import React, {Component, PropTypes} from 'react';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/divider'
import Discuss from './Discuss'
import axios from 'axios';
import config from '../config/config.json'
var commentStyle={
	
	"border": "3px solid #E0E0E0"
}
class CommentArea extends Component{ 
	constructor(props) {
        super(props);
        this.state={
	    	comments: [],
	    }
    }
	msgClick=()=>{
		var message = document.getElementById('message').value;
	　　if (message !== null && message !== undefined && message !== '') {
		axios.post(config.remote_url+"/comment/add",
			{blogId:this.context.id,
			content:message},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
				alert(response.data);
			})	
			document.getElementById('message').value=""		
	　　}else{
			alert('Please enter chat content ')
		}
		var ctx =this;
		axios.get(config.remote_url+'/comment/'+this.context.id+'/comments').then(res=>{
    		ctx.setState({comments:res.data});
    	}) 
	}
	refreshComment(){
		var ctx =this;
		axios.get(config.remote_url+'/comment/'+this.context.id+'/comments').then(res=>{
    		ctx.setState({comments:res.data});
    	}) 
	}
	getChildContext() {
		var ctx = this
	    return {refreshfuc: ctx.refreshComment()};
	}
	componentDidMount(){
		var ctx =this;
		axios.get(config.remote_url+'/comment/'+this.context.id+'/comments').then(res=>{
    		ctx.setState({comments:res.data});
    	}) 
	}
	render(){
		return(<div style={commentStyle}>
				<hr style={{height:1,border:0,color:"#D5D5D5"}}/>
				<Divider/><br/>
				<h1 style={{"paddingLeft":"15px","color":"#2196F3"}}>评论列表</h1>
				<hr style={{"height":"3px","border":"none","borderTop":"5px ridge green"}}/>
				{this.state.comments.map(item => {
						return (
				<Discuss replyMessages={item} key={item.comment.id}/>
					)})}
				<div className="basic-grey">
			        <h1>leave a message:
			        <span>Please fill all the texts in the fields.</span>
			        </h1>
			        <span>Message :</span>
			        <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
			        <label>
			        <span>&nbsp;</span>
			        <input type="button" className="button" onClick={this.msgClick} value="Send" />
			        </label>
			    </div>					
			</div>)
	}
}
CommentArea.contextTypes = {
  id: React.PropTypes.string,
};
CommentArea.childContextTypes = {
  refreshfuc: React.PropTypes.func
};
export default CommentArea
