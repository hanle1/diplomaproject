import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import config from '../../config/config.json'
var blogContentStyle ={
	"paddingLeft":"24%",
	"paddingRight":"4%"
}
class AdminBlogEdit extends Component{
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {location} = this.props
    	var arr = location.pathname.split('/')
		var blogid = arr[arr.length-1]
		var item;
		axios.get(config.remote_url+"/blogs/"+blogid+"/markdown").then(function(res){
			item = res.data;
			document.getElementById("blogTitleArea").value=item.blogTitle
			document.getElementById("blogContentArea").value=item.blogContent
		})
	}
	save(){
		axios.post(config.remote_url+"/blogs/save",
			{blogTitle:"arr[1]",blogDescroption:"dw",blogContent:"",type:""},
			{headers : {
       		 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    		}})
			.then(function (response) {
			console.log(response.data);
			})
	}
	render(){
		return(
			<div style={blogContentStyle}>
			<span style={{fontSize:14,color:"#0000CC"}}>博客题目:  </span><TextField
			  id = "blogTitleArea"
		    ></TextField><br />
		  	<span style={{fontSize:14,color:"#0000CC"}}>博客描述:</span> <TextField
		    ></TextField><br />
		    <span style={{fontSize:14,color:"#0000CC"}}>博客内容:  </span>
		    <br/>
			<TextField
			  id = "blogContentArea"
		      hintText="博客内容区域"
		      multiLine={true}
		      fullWidth={true}
		      rows={50}
		      rowsMax={100}
		    ></TextField><br />
		    <RaisedButton style={{"width":"100%"}} label="保存添加" onTouchTap={(evt) =>{this.save()}}/>
			</div>)
	}
}
export default AdminBlogEdit