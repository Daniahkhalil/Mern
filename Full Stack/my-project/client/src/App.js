import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/people/">
            <Main />
          </Route>
          <Route path="people/:id">
            <Detail />
          </Route>
          ...
// Your other routes
        <Route path="/people/:id/edit">
          <Update />
        </Route>
// ...


        </Switch>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

