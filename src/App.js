
import CountryList from "./Components/CountryList";
import CountryDetail from "./Components/CountryDetail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>

          <Route path="/" exact component={CountryList} />

          <Route path="/CountryDetail/:name" component={CountryDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
