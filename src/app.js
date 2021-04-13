import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import CreateUser from "./components/CreateUser/CreateUser";
import Sidebar from "./components/Sidebar/Sidebar";
import DataTable from "./utilities/DataTable/DataTable";

const App = () => {
    return (
            <Provider store={store}>
                <Router >
                    {/*<Route path="/" exact component={Sidebar}/>*/}
                    <Route path="/" exact component={DataTable}/>
                    {/*<Route path="/" exact component={CreateUser}/>*/}
                    {/*<Route path="/" exact component={CreateUser}/>*/}
                </Router>
            </Provider>
        )
}

export default App;