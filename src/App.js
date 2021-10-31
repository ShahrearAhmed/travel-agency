import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Home/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Home/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import ManageAllOrder from './Manage-All-Order/ManageAllOrder';
import Order from './Pages/Order/Order';
import Offering from './Pages/Offering/Offering';
// import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddBooking from './Pages/AddBooking/AddBooking';
import Booking from './Pages/Booking/Booking';
import ManageServices from './Pages/ManageServices/ManageServices';
import MyOrder from './Pages/MyOrder/MyOrder';


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
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route> */}
            {/* <Route path="/addService">
              <AddBooking></AddBooking>
            </Route> */}

            <PrivateRoute path="/addService">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            {/* <PrivateRoute path="/details/:id">
              <Details></Details> */}
            <PrivateRoute path="/offering">
              <Offering></Offering>
            </PrivateRoute>
            <PrivateRoute path="/order/:serviceId">
              <Order></Order>
            </PrivateRoute>
            {/* <PrivateRoute path="/offering">
              <Offering></Offering>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/orderring">
              <Order></Order>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/manage-all-order">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
