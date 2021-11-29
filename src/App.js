import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home/Home/Home';
import NavBar from './Page/Shared/NavBar/NavBar';
import Services from './Page/Home/Services/Services';
import AboutUs from './Page/Home/AboutUs/AboutUs';
import Contract from './Page/Home/Contract/Contract';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/contract">
            <Contract></Contract>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
