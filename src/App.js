
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/login">
<Login/>
        </Route>
<Route path ="/checkout">
         <Header/>
        <Checkout/>
        </Route>
        <Route path="/">
          <Header/>
        <Home/>
        </Route>
      </Switch>
      </BrowserRouter>
     
     
     
    </div>
  );
}

export default App;
