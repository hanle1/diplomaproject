import React, {Component, PropTypes} from 'react'
import {clickTitleBtn} from '../actions'
import {connect} from 'react-redux'

class TitleBtn extends Component {
    constructor(props) {
        super(props)
    }
    onClickController() {
        const {dispatch} = this.props
        dispatch(clickTitleBtn(true))
    }
    render() {
        const {isopen} = this.props
        const className = "c-title-btn iconfont icon-menu "
        return (
            <i className={className} onClick={e => this.onClickController()}></i>
        )
    }
}

export default connect()(TitleBtn)