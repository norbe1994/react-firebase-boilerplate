import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Perfil  from './components/dashboard/Perfil';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/perfil" component={Perfil} />
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
