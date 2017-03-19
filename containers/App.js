import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Slider from '../components/Slider'
import {blueGrey400,blueGrey900} from 'material-ui/styles/colors';
import TitleBtn from '../components/TitleBtn'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppHead from '../components/AppHead'

class App extends Component {
    constructor(props) {
        super(props)
    }
    getChildContext() {
        return {
            muiTheme: getMuiTheme({
          palette: {
            primary1Color: blueGrey400,
            textColor: blueGrey900,
          },

        }) ,
        };

    }
    render() {
        const {isopen} = this.props //通过connect将state注入到props
        return (
            <div>
                <AppHead/>
                <Slider isopen={isopen}/>  
                <div style={{paddingTop:62,"height":"100%"}}>      
                {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {titleBtnStatus} = state
    return {
        isopen: titleBtnStatus.isopen
    }
}
App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,

};
export default connect(mapStateToProps)(App)