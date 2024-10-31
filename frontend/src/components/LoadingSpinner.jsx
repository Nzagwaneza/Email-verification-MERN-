import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="spinner border-4 border-t-4 border-gray-400 border-t-blue-800 rounded-full w-12 h-12 animate-spin"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
