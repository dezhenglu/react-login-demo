import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            navName: 'Reg'
        };
    }
    render() {

        const _style = {
            float:"left",
            color: "#fff",
            fontWeight: "bold",
            marginLeft: "400px",
            lineHeight: "24px"
        }

        return (
            <div id="header" className="bg">
                <div className="bg header_logo">
                    <div style={_style}>
                        欢迎用户: {this.props.userinfo.userName} <a onClick={this.logoutHandle.bind(this)}>退出登录</a>
                    </div>
                    <div className="bg nav_bg">
                        <div onClick={this.clickHandle.bind(this, 'Order')}
                            className={this.state.navName === 'Order' 
                                       ? 'nav_btn bg act'
                                       : 'nav_btn'}>预约</div>
                        <div onClick={this.clickHandle.bind(this, 'Reg')}
                            className={this.state.navName === 'Reg' 
                                       ? 'nav_btn bg act'   
                                       : 'nav_btn'}>登记</div>
                        <div onClick={this.clickHandle.bind(this, 'Qry')}
                            className={this.state.navName === 'Qry' 
                                       ? 'nav_btn bg act'
                                       : 'nav_btn'}>查询</div>
                    </div>
                </div>
            </div>
        )
    }

    clickHandle(navName) {
        if (navName === this.state.navName) {
            return
        }
        this.setState({
            navName: navName
        });
        hashHistory.push('/' + navName)
    }
    logoutHandle(e) {
        this.props.userInfoActions.update({
            userName: null
        });
        hashHistory.push('/Login')
    }
    componentDidMount() {
        if (this.props.userinfo.userName == null) {
            hashHistory.push('/Login')
        }
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
