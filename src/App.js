import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Add from './pages/Add/Add';
import Home from './pages/Home/Home';
import Update from './pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Switch>
          <Route path="/home" >
            <Home></Home>
          </Route>
        </Switch>
        <Switch>
          <Route path="/add" >
            <Add></Add>
          </Route>
        </Switch>
        <Switch>
          <Route path="/users/update/:id">
            <Update></Update>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
