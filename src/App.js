import Sidebar from './Sidebar.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home className="content"/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
