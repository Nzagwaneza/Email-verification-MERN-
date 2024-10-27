import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-green-700-opacity-80 bg-opacity-50 backdrop-filter 
      backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8 bg-blue-300 opacity-9">
        <h2 className="text-3xl font-bold mb-6 text-center ">Welcome back</h2>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Link to={"/forgot-password"} className="text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          <motion.button
            className="mt-5 py-3 px-4 w-full flex justify-center bg-gradient-to-r 
          from-slate-500 to-blue-400 text-white font-bold rounded-lg shadow-lg 
          hover:from-green-800 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 focus:ring-offset-slate-500 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin" />
            ) : (
              "Login In"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-blue-600 bg-opacity-50 flex justify-center">
        <p className="text-base text-white">
          Don't have an account?{" "}
          <Link to={"/Signup"} className="text-black hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;
