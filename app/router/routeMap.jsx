import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Login from '../containers/Login'
import Order from '../containers/Order'
import Qry from '../containers/Qry'
import Reg from '../containers/Reg'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/">
                    <IndexRoute component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path='/main' component={App}>
                        <IndexRoute component={Reg}/>
                        <Route path='/Order' component={Order}/>
                        <Route path='/Qry' component={Qry}/>
                        <Route path='/Reg' component={Reg}/>
                        <Route path='*' component={NotFound}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
