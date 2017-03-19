import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer';
import HomeFooter from '../components/home/HomeFooter'
import HomeContain from '../components/home/HomeContain'

class Home extends Component {
    constructor(props,context) {
        super(props,context)
    }
    render() {
        return (
            <div style={{"height":"100%"}}>
                <HomeContain/>
                <HomeFooter/>
            </div>
        )
    }
}

export default Home