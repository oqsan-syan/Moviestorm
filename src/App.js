import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/series" component={Series} />
                <Route path="/movies" component={Movies} />
                <Redirect to="/notFound" />
              </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
