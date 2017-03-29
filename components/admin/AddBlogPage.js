import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import config from '../../config/config.json'
var blogContentStyle ={
	"paddingLeft":"24%",
	"paddingRight":"4%"
}
class AddBlogPage extends Component{
	constructor(props) {
		super(props)
	}

	save(){
		const {location} = this.props
		var arr = location.pathname.split('/')
		axios.post(config.remote_url+"/blogs/add",
			{blogTitle:document.getElementById("blogTitle").value,
			description:document.getElementById("blogDescroption").value,
			blogContent:document.getElementById("blogContent").value,
			type:arr[arr.length-1]},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
			console.log(response.data);
			})
	}
	render(){
		return(
			<div style={blogContentStyle}>
			<TextField
		      hintText="博客名称"
		      id="blogTitle"
		    ></TextField><br />
		    <TextField
		      hintText="博客描述"
		      id="blogDescroption"
		      multiLine={true}
		      fullWidth={true}
		      rows={4}
		      rowsMax={20}
		    ></TextField><br />
			<TextField
		      hintText="博客内容"
		      id="blogContent"
		      multiLine={true}
		      fullWidth={true}
		      rows={10}
		      rowsMax={100}
		    ></TextField><br />
		    <RaisedButton style={{"width":"100%"}} label="保存添加" onTouchTap={(evt) =>{this.save()}}/>
			</div>
			)
	}
}
export default AddBlogPage