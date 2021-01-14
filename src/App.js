import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './components/Navbar';
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'
import './App.css';

const App= () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <div className="App">

        <Route render={({location}) =>(
          <TransitionGroup className="page">
            <CSSTransition
                    key={location.key}
                    timeout={{enter: 500, exit: 150}}
                    classNames="fade"
                  >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/films/:id" component={DetailPage}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </div>
    </Router>
  );
}

export default App;
