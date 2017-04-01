import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {blueGrey400,blueGrey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppHead from '../components/AppHead';
import AppBar from 'material-ui/AppBar';
import Loading from '../components/common/Loading'
import AppFooter from '../components/AppFooter'
import AudioPlayer  from'react-responsive-audio-player'

var bodystyle={
    "fontSize":"14px",
    "fontFamily":"微软雅黑",
    "background":" 50% top scroll no-repeat",
    "backgroundImage":"url(../img/bp.jpg)",
    "color":"#5d5d5d",
    "display": "block"
}
var playlist =
    [{ url: 'http://p2.music.126.net/at0wmUoxoCMqDJbJt1QFeQ==/5935163767130356.mp3',
             displayText: '平凡之路' },
    { url: 'http://p2.music.126.net/XGEBBSDsq8bKKCZz1j-pKA==/2093470139295642.mp3',
         displayText: 'Speed Of Sound' }
    ];
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {isReady: false};
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

    componentDidMount() {
        this.setState({isReady: true});
    }
    render() {
        const {location} = this.props //通过connect将state注入到props
        if (this.state.isReady){
            if(location.pathname.substring(1,6)=="admin"){
                return(
                    <div>
                    <AppBar title="admin page" style={{"position":"fixed", top:0}}/>
                    <div style={{"marginTop":"100px"}}>
                    {this.props.children}
                    </div>
                    </div>
                    )
            }else{
            return (
                <div className="wrap-body zerogrid">
                    <AppHead/>
                    <div>
                        {this.props.children}
                    </div>
                    <AppFooter/>
                    <AudioPlayer playlist={playlist} style={{ position: 'fixed', bottom: 0 }} />
                </div>
            )}
        }else return <Loading title="Loading Content ... "/>;
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