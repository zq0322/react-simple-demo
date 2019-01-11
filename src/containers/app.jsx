import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import RouteView from '../router/index'

import '../common/css/index.css'


class App extends React.Component{
    render(){
        return <div className="wrapper">
            
            <div>
                <Router>
                    <RouteView />
                </Router>
            </div>
        </div>
    }
}
export default App