import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-green-700 bg-opacity-50 backdrop-filter 
  backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8  bg-blue-300 opacity-9">
        <h2 className="text-3xl font-bold mb-6 text-center">Forgot Password</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="text-gray-800 mb-6 text-center">
              Enter your email address and we will send you a link to reset your
              password.
            </p>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              className="mt-5 py-3 px-4 w-full flex justify-center bg-gradient-to-r 
          from-slate-500 to-blue-400 text-white font-bold rounded-lg shadow-lg 
          hover:from-green-800 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 focus:ring-offset-slate-500 transition duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              {isLoading ? (
                <Loader className="size-6 animate-spin mx-auto" />
              ) : (
                "Send reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            <p className="text-gray-950 mb-6">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
            <div className="px-8 h-7 bg-gray-900 bg-opacity-50 flex justify-center">
              <Link
                to={"/login"}
                className="text-sm text-white hover:underline flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
