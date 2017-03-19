import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/divider'
import Paper from 'material-ui/Paper';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';
const style = {
  "width": "100%",
  margin: 20,
  display: 'inline-block',
};
class Discuss extends Component{ 
	render(){
		return(<div style={{"width":"100%"}}>
			<Divider/>
			<Card style={{"marginTop":"4%"}}>
	        <CardHeader
	          title="URL Avatar"
	          avatar="images/ok-128.jpg"
	        />
	        <CardText>
	          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
	        </CardText>
	        <p>回复: </p>
	        <Divider style={{paddingLeft:4}}/>
	        <CardHeader
	          title="URL Avatar"
	          avatar="images/ok-128.jpg"
	        />
	        <CardText>
	          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
	        </CardText>
	      </Card>
			</div>)
	}
}
export default Discuss
