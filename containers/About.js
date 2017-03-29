import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer';
import AboutSlider from '../components/about/AboutSlider'
import AboutContent from '../components/about/AboutContent'

class About extends Component {
    constructor(props,context) {
        super(props,context)
    }
    render() {
        return (
			<section id="content">
				<div className="wrap-content">
				<div className="row block">
				<div id="main-content" className="col-2-3">
					<div className="wrap-col">
							<AboutContent/>
					</div>
				</div>
				<AboutSlider/>
				</div>
				</div>
			</section>
        )
    }
}
// <HomeContent/>	
export default About