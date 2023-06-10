import { Navigate, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ActivationPage from "./pages/ActivationPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
// import { server } from "./server";
// import axios from "axios";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import Home from './pages/Home'
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./routes/ProtectedRoute";

import ShopActivation from "./components/shop/ShopActivation";
import ShopSignUpPage from "./pages/ShopSignUpPage";
import ShopLoginPage from "./pages/ShopLoginPage";
import ShopDashboardPage from "./pages/ShopDashboardPage";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import ShopeHomePage from "./pages/ShopeHomePage";


function App() {
  const { isAuthenticated} = useSelector((state) => state.user);
  useEffect(() => {
    // axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
    //  toast.success(res.data.message);
    // }).catch((err)=>{
    //   toast.error(err.response.data.message)
    // });

    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <div className="App">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={!isAuthenticated?(<Login/>):(<Navigate to="/"/>)} />
        <Route path="/sign-up" element={!isAuthenticated?(<SignUp/>):(<Navigate to="/"/>)} />
        
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
        />
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

      <Route path="/shop-create" element={<ShopSignUpPage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/seller/activation/:activation_token"
          element={<ShopActivation />}
        />


<Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />

<Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopeHomePage />
            </SellerProtectedRoute>
          }
        />




      </Routes>
     
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
