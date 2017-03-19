import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
var containStyle={
    "height":"300",
}
var cardStyle={
	"height":"100%",
	"marginLeft": "2%",
	"marginTop": "2%",
	"marginBottom": "2%",
	overflow:"auto"
}
var leftContain={
	"width":"65%",
	"height":"100%",
	float:"left",
}
var rightStyle={
	"width":"30%",
	"hight":"100%",
	float:"right",
}
var personalResume = {
	"height":"100%",
	"marginLeft": "2%",
	"marginTop": "2%",
	"marginBottom": "2%",
	overflow:"auto"
}


class HomeContain extends Component {
	render(){
		return(
			<div style={containStyle}>
			<div style={leftContain}>
				<Card style={cardStyle}>
				    <CardHeader
				      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc la"
				    />					
				    <CardText style={{"paddingLeft":"2%"}}>
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				    </CardText>
				  </Card>
			 </div>
			 <div style={rightStyle}>	
			  		<Card style={personalResume}>
			  		 <img style={{			
				        display: "inline-block",
				        "width": "50%",
				        "max-width":"100",
				        "borderRadius": "50%",
					    padding: 8,
					    "border": "1px solid #dedede" /*no*/
				  		}}
		 	 		 src={require("../../img/avatar.png")}  />
				   	 <CardText style={{"paddingLeft":"2%"}}>
				  		     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacini
			   		  </CardText>
		  			</Card>	  
			</div>
	        </div>
    )}
}
export default HomeContain