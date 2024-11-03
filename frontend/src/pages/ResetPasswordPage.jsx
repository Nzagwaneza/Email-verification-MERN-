import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { Lock } from "lucide-react";
import Input from "../components/input";
import toast from "react-hot-toast";

export const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { resetPassword, isLoading, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);
      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Error resetting password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-green-500 bg-opacity-50 backdrop-filter 
  backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className=" bg-blue-300 opacity-9 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-slate-600 bg-gray-950">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>
          <p className="text-gray-950 mb-6 text-center">
            Enter your email address and we will send you a link to reset your
            password.
          </p>
          <Input
            icon={Lock}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) {
                setError("");
              }
            }}
            required
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (error) {
                setError("");
              }
            }}
            required
          />
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          {!error && (
            <p className="text-black text-sm mb-4 text-center">
              Password should be at least 6 characters long, contain at least
              one digit, and include one special character.
            </p>
          )}

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
            {isLoading ? "Resetting..." : "Set New Password"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};
