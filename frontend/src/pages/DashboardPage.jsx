import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../Utils/utils";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();
  const handleLogout = (e) => {
    e.preventDefault();

    logout();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-slate-400 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border-blue-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white bg-gradient-to-r from-slate-600 bg-gray-950">
        Dashboard
      </h2>
      <div className="space-y-6">
        <motion.div
          className="p-4 bg-slate-400 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-950 mb-3">
            Profile Information
          </h3>
          <p className="text-blue-950">Name: {user.name}</p>
          <p className="text-blue-950">Email: {user.email}</p>
        </motion.div>
        <motion.div
          className="p-4 bg-slate-400 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-950 mb-3">
            Account Activity
          </h3>
          <p className="text-blue-950">
            <span className="font-bold">Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-blue-950">
            <span className="font-bold">Last Login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="mt-5 py-3 px-4 w-full flex justify-center bg-gradient-to-r 
          from-slate-500 to-blue-700 text-white font-bold rounded-lg shadow-lg 
          hover:from-grayS-800 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 focus:ring-offset-slate-500 transition duration-200"
      >
        Logout
      </motion.button>
    </motion.div>
  );
};

export default DashboardPage;
