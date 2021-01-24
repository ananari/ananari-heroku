import Sidebar from './Sidebar.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home.js';
import SylotiApp from './SylotiKeyboard.js';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home className="content"/>
        </Route>
        <Route exact path="/sylotikeyboard">
          <SylotiApp />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
