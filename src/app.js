import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import CreateUser from "./components/CreateUser/CreateUser";

const App = () => {
    return (
            <Provider store={store}>
                <Router >
                    <Route path="/" exact component={CreateUser}/>
                    {/*<Route path="/" exact component={CreateUser}/>*/}
                    {/*<Route path="/" exact component={CreateUser}/>*/}
                </Router>
            </Provider>
        )
}

export default App;