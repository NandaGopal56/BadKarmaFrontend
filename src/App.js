import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.tsx"
import LoginCallback from "./components/LoginCallback.tsx"

function App() {
  return (
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/oauth_callback" element={<LoginCallback/>} />
        </Routes>
      );
}

export default App;

