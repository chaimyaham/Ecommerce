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
import { loadUser } from "./redux/actions/user";
import Home from './pages/Home'
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  const { isAuthenticated} = useSelector((state) => state.user);
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
