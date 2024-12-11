"use client";
import { useState, useEffect } from "react";
import { Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function HomePage() {
  const [showIcon, setShowIcon] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 2000); // El icono desaparecerá después de 2 segundos
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <AnimatePresence mode="wait">
        {showIcon ? (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Home className="w-24 h-24 text-blue-500" />
          </motion.div>
        ) : (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Bienvenido a nuestra página
            </h1>
            <p className="text-xl text-gray-600">
              Estamos encantados de tenerte aquí
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
