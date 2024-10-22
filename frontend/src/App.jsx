import { Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div
      className="min-h-screen bg-blue-100 bg-gradient-to-br 
    from-blue-100 to-white flex items-center justify-center 
    relative overflow-hidden"
    >
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      ></FloatingShape>
      <FloatingShape
        color="bg-green-700"
        size="w-48 h-48"
        top="70%"
        left="80"
        delay={2}
      ></FloatingShape>
      <FloatingShape
        color="bg-blue-900"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      ></FloatingShape>
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
