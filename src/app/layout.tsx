import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Posts from '@/components/Posts'
import { Raleway } from 'next/font/google'
import Animacion from '@/components/AnimacionDots'

const raleway = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Paola Gomez | Boutique floral' ,
  description: 'Somos expertos en diseño floral para eventos sociales y corporativos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${raleway.className} w-full overflow-x-hidden relative`}>
        {/* <Animacion data={
          {styles:{
              "width": "100vw",
              "height": "100%",
              "position": "absolute",
              "overflow": "hidden",
              "zIndex": "-1"
          }}
        }/> */}
        <Navbar />
        <div className='w-full flex flex-col sm:flex-row bg-black/40'>
          <div id='background'></div>
          <main className='w-full h-full flex-1 overflow-y-auto p-4 pe-6 text-white'>
            {children}
          </main>
          <aside className='w-max'>
            <Posts />
          </aside>
        </div>
        <footer className='w-full p-8 bg-white'>
          <p className='text-center text-gray-500'>© 2023 Paola Gómez. Todos los derechos reservados.</p>
          <p className='text-center text-gray-500'>Desarrollado por <a href='https://www.instagram.com/solsoftware_mx/' target='_blank' className='text-blue-500'>Solsoftware</a></p>
        </footer>
      </body>
    </html>
  )
}
