'use client'

import { useState, useEffect } from 'react'
import { Home } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  const [showIcon, setShowIcon] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(false)
    }, 2000) // El icono desaparecerá después de 2 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {showIcon ? (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="z-10"
            >
              <Home className="w-24 h-24 text-gray-500" />
            </motion.div>
          ) : (
            <>
              <Image
                src="https://picsum.photos/1280/720"
                alt="Interior de una vivienda"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10 px-4 h-screen flex flex-col justify-center"
              >
                <h1 className="text-4xl font-bold text-white mb-2 shadow-text">Bienvenido a nuestra página</h1>
                <p className="text-xl text-white shadow-text">Estamos encantados de tenerte aquí. Encontrá tu hogar y posibles compañero/a de convivencia con Your Ideal Home</p>
              </motion.div>

              <div className='flex align-top'>
                <motion.div
                  key="landingPage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center z-10 px-4 w-1/2"
                >
                  <h1 className="text-4xl font-bold text-white mb-2 shadow-text">Testimonios</h1>
                  <p className="text-xl text-white shadow-text">Hace un año encontré esta pagina, estaba buscando una vivienda y una compañera porque no estaba en condiciones de pagar el alquiler yo sola. Ahora que ya las encontré, me siento muy satisfecha con como me sirvió esta pagina</p>
                </motion.div>

                <motion.div
                  key="landingPage"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center z-10 px-4 w-1/2"
                >

                  <h4 className="text-4xl font-bold text-white mb-2 shadow-text">Sos nuevo en Your Ideal Home o ya contas con un nombre de usuario?</h4>
                  <button type="submit" className="w-full text-white">Inicia Sesion</button>
                  <p className="text-xl text-white shadow-text">Si ya contas con un nombre de usuario</p>

                  <button type="submit" className="w-full text-white">Registrarse</button>
                  <p className="text-xl text-white shadow-text">Si sos nuevo en Your Ideal Home</p>
                </motion.div>
              </div>

            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

