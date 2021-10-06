import React from "react"
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "reactstrap"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListNews from "./pages/ListNews"
import NewNews from "./pages/NewNews"
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute"
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <Container >
        <Router> 
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
            <PrivateRoute exact path="/news/" component={ListNews} />
            <Route exact path="/news/create" component={NewNews} />
            <Redirect to="/auth/login" />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
