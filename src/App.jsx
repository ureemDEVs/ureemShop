import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        {/* <Route path='/products' element={<ProductList />} /> */}
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/login' element={<Login />} /> {/* use this code till log in sign up isnot added*/}

        {/* after log in sign up added use below code to navigate logIn page*/}
        {/* <Route path='/login' element={
          user ? <Navigate to="/" /> : <Login />
        } /> */}


        <Route path='/register' element={<Register />} />
        {/*use code written below to navigate to register page after adding logIn signUp functionality*/}
        {/* <Route path='/register' element={
          user ? <Navigate to="/" /> : <Register />

        } /> */}

      </Routes>
    </Router>
  );
};

export default App;