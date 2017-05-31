import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import { hashHistory } from 'react-router'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userName: '' 
        };
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Login container</h1>
                    <input 
                        ref="userName" 
                        type="text" 
                        placeholder="请输入..." 
                        onChange={this.changeHandle.bind(this)}
                        onKeyUp={this.keyUpHandle.bind(this)}/>
                    <span onClick={this.clickHandle.bind(this)}>登录</span>
                </div>
            </div>
        )
    }
    login() {
        if (this.state.userName === '') {
            return
        }

        var userName = this.state.userName
        this.props.userInfoActions.update({
            userName: userName
        });

        hashHistory.push('/Main')
    }
    keyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.login()
    }
    changeHandle(e) {
        this.setState({
            userName: e.target.value 
        });
    }
    clickHandle(e) {
        // const userNameDom = this.refs.userName
        // console.log(userNameDom)
        // console.log('userName', this.state.userName)
        this.login()
    }
}

function mapStateToProps(state) {
    return {

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
)(Login)
