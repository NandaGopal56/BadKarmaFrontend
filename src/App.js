import { Route, Routes } from "react-router-dom";
import LoginCallback from "./components/authentication/LoginCallback.jsx"
import Signin from "./components/authentication/Signin.jsx";
import Signup from "./components/authentication/Signup.jsx";
import ForgotPassword from "./components/authentication/ForgotPassword.jsx";

function App() {
  return (
        <Routes>
          <Route path="/login" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/oauth_callback" element={<LoginCallback/>} />
        </Routes>
      );
}

export default App;

