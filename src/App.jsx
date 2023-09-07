import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <GlobalProvider>
      <Router>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
