import Sidebar from './Sidebar.js';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home.js';
import SylotiApp from './SylotiKeyboard.js';
import Projects from './Projects.js'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'}>
            <Home className="content"/>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/sylotikeyboard"}>
            <SylotiApp />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/projects"}>
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
