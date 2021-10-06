import React from "react"
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "reactstrap"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListNews from "./pages/ListNews"
import NewNews from "./pages/NewNews"
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container >
        <Router> 
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
            <Route exact path="/news/" component={ListNews} />
            <Route exact path="/news/create" component={NewNews} />
            <Redirect to="/auth/login" />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
