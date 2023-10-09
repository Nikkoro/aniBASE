import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./auth/Auth";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/watchlist">
              <Watchlist />
            </Route>
            <Route exact path="/watched">
              <Watched />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </GlobalProvider>
  );
}

export default App;
