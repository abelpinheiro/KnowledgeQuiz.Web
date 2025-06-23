import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
//import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Toaster } from "sonner";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
      
);

export default App;