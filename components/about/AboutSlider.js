import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'

var fontStyle={
	fontSize:20,"color":"#000000"
}
class AboutSlider extends Component{ 
constructor(props, context) {
        super(props,context)
    }
    componentDidMount(){
    }
    render() {
    	return(
 			<div id="sidebar" className="col-1-3">
				<div className="wrap-col">
					<div className="box">
						<div className="heading"><h2>About us</h2></div>
						<div className="content">
							<img src={require("../../img/zerotheme.jpg")} style={{border: 0}}/>
							<p>The blog uses "react" and "redux" in front-end,using "spring mvc" and "mybatis" in the back-end.Contacting me if you want to konw more about this blog</p><br/>
							<p style={fontStyle}>email: hannuo292@qq.com</p>
							<a style={{fontSize:20}} href="https://github.com/hanle1">github link</a>
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
export default AboutSlider;