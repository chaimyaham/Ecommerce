import { Route, Routes } from "react-router-dom";
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
import { loadUser } from "./redux/actions/user";
import Home from './pages/Home'
import Products from "./pages/Products";
import Navbar from "./components/Navbar";


function App() {
  useEffect(() => {
    // axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
    //  toast.success(res.data.message);
    // }).catch((err)=>{
    //   toast.error(err.response.data.message)
    // });

    Store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sign-up" element={<SignUp />} />
        
        <Route
          path="/activation/:activationToken"
          element={<ActivationPage />}
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
