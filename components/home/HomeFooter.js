import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar';
console.log(StyleSheet)
var footerStyle ={
    "height":"200",
    "width":"100%",
    "marginTop":"2%",
    zIndex: 2,
    float:"bottom"
}
var	footerPart={
	"height":"100%",
    "width":"32%",
    float:'left',
    "paddingLeft": "1%",
    overflow:"auto"
}

var footerFont={
	fontSize: 20,
	paddingTop: 15,
	paddingLeft: 12,
	color:"#888888"
}

class HomeFooter extends Component {
	
	render(){
		return(
	        <div style={footerStyle}>
	        <div style={footerPart}>
	        <h1 style={footerFont}>Hello world</h1>
	        <hr/>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				  
	        </div>
	        <div style={footerPart}>
	        <h1 style={footerFont}>Hello world</h1>
	        <hr/>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				     
	        </div>
	         <div style={footerPart}>
	        <h1 style={footerFont}>Hello 2world</h1>
	        <hr/>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				    
	        </div>
	        </div>
			)
	}
}
export default HomeFooter