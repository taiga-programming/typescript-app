import React from 'react';
import './App.css';
import Nav from './secure/components/Nav';
import Menu from './secure/components/Menu';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import Login from './public/Login';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
              <Route path={'/'} exact component={Dashboard} />
              <Route path={'/users'} component={Users} />
              <Route path={'/login'} component={Login} />
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
