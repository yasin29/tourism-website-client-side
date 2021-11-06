import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyOrders from './components/Pages/MyOrders/MyOrders';
import AllOrders from './components/Pages/AllOrders/AllOrders';
import AddServices from './components/Pages/AddServices/AddServices';
import Footer from './components/Shared/Footer/Footer';
import Book from './components/Pages/Home/Villas/Villa/Book/Book';
import Remove from './components/Pages/AddServices/Remove/Remove';
import AuthProvider from './context/AuthProvider';
import Login from './components/Pages/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Checkout from './components/Pages/Home/Villas/Villa/Book/Checkout/Checkout';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservices">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/booking/:villaId">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/remove">
              <Remove></Remove>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/checkout/:villaId">
              <Checkout></Checkout>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
