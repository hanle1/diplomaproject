import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer';
import HomeContent from '../components/home/HomeContent'
import HomeSider from '../components/home/HomeSider'

class Home extends Component {
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
						<HomeContent/>					
					</div>
				</div>
				<HomeSider/>
				</div>
				</div>
			</section>
        )
    }
}

export default Home