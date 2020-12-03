import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import New from "./New";
import Edit from "./Edit";
import About from "./About";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} ></Route>
                    <Route path="/new" component={New} ></Route>
                    <Route path="/edit/:id" component={Edit} ></Route>
                    <Route path="/about" component={About} ></Route>
                    <Redirect from='*' to='/' />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

// const Home = () => (
//     <div>
//         <h1>Home Page</h1>
//     </div>
// );

export default App;