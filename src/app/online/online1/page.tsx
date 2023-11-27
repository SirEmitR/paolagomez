import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { PlayPause } from '@/icons'
import Link from 'next/link'
import Observer from '@/components/Observer'
import Countdown from '@/components/Countdown'
const playFairDisplay = Playfair_Display({subsets: ['latin']})
const Online1 = () => {
  return (
    <section className='w-full flex flex-col gap-6'>
      <Observer />
      <div><h1 className={`${playFairDisplay.className} text-4xl text-gray-200 my-2 animate-charcter font-semibold hidden_lazy lazy`}>BOUQUETERIA el Arte de las envolturas Coreanas</h1>
      <p className='flex gap-2 items-center text-sm text-white font-semibold hidden_lazy lazy'><PlayPause className={`w-6 h-6 text-purple-500 rounded-full `}/> Curso online</p></div>
      <article>
        <p className='hidden_lazy lazy'>Soy <strong className='text-lg'>Paola Gómez</strong> <span className=' italic'>Diseñadora Floral</span> y para mi es un gusto poder compartir contigo mis conocimientos y experiencia para que puedas alcanzar tu sueño floral.</p>
        <p className='hidden_lazy lazy'>En este curso de Bouqueteria podrás encontrar todas la herramientas y técnicas necesarias poder lograr bouquet increíbles, con un diseño y estilo propio</p>
        <p className='mt-4 text-xl font-bold text-green-50  hidden_lazy lazy'>A tu tiempo, a tu ritmo.</p>
        <p  className='mt-2 hidden_lazy lazy'>Podrás repetir las veces que lo necesites. </p>
        <p className='hidden_lazy lazy'>Estas clases están grabadas como si fuera un taller presencial!!!</p>
        <p className='hidden_lazy lazy'>Gracias por tu confianza y disfruta el proceso.</p>
        <p className='mt-2 text-2xl text-pink-50 hidden_lazy lazy'>Mucho éxito se que alcanzarás grandes metas.</p>
      </article>
      <Countdown data={{
        titulo:'Oferta por tiempo limitado',
        fecha: 'December 15, 2023 23:30:00 GMT-0500'
      }} />
      <Link href='https://pay.hotmart.com/T73330605X?checkoutMode=2&off=tld2suya' target='_blank' className='p-4 px-6 rounded-full bg-green-500 text-white font-bold w-max transition-all hover:bg-green-700 hidden_lazy lazy'>Ir a comprar</Link>
      <video className='aspect-video sm:w-1/2 object-contain hidden_lazy lazy' controls>
            <source src='https://firebasestorage.googleapis.com/v0/b/paolagomez-workshop.appspot.com/o/Introduccion.mp4?alt=media&token=ab760d75-794e-4970-b4c1-7186a97069fd' type='video/mp4' />
          </video>
      <article>
        <p className='text-lg font-bold text-gray-200 hidden_lazy lazy'>Te gustaría dominar el arte de las envolturas coreanas y crear hermosos bouquet para regalar o vender?</p>
        <div className='flex flex-wrap w-full gap-4 mt-4'>
          <p className='sm:max-w-[45%] bg-amber-100/80 rounded-md text-black p-4 hidden_lazy lazy'>Dominar el arte de las envolturas coreanas te permitirá crear impresionantes bouquets, ya sea como regalos únicos o para emprender en el mundo de la venta de arreglos florales.</p>
          <p  className='sm:max-w-[45%] rounded-md bg-amber-100/80 text-black p-4 hidden_lazy lazy'>¡Un excelente enfoque! Comenzar desde lo básico del diseño floral, explorar diversos tipos de atados y dominar las técnicas para crear envolturas excepcionales es clave para convertirse en un experto en el arte de los bouquets.</p>
        </div>
      </article>
      <div className='w-full h-[4px] bg-white/60'></div>
      <article>
      <div className=''>
          <h2 className={`text-4xl font-bold ${playFairDisplay.className} text-white shadow-yellow-400 hidden_lazy lazy`}>Que vas a lograr</h2>
          <ul className='mt-6 flex flex-wrap gap-4'>
            <li className='p-4 bg-amber-100/80 rounded-md text-black sm:max-w-[45%] hidden_lazy lazy'>¡Aprender sobre el monitoreo y cuidado de las flores te permitirá mantener tus creaciones frescas y hermosas por más tiempo! Es el complemento perfecto para tu conocimiento en diseño floral.</li>
            <li className='p-4 bg-amber-100/80 rounded-md text-black sm:max-w-[45%] hidden_lazy lazy'>¡Dominar las armonías de color te dará la clave para crear composiciones florales impactantes! Aprender a utilizarlas potenciará la belleza y el efecto visual de tus bouquets.</li>
            <li className='p-4 bg-amber-100/80 rounded-md text-black sm:max-w-[45%] hidden_lazy lazy'>Conocer la cantidad adecuada de flores para cada bouquet es fundamental para lograr la armonía y el equilibrio perfecto en tus creaciones florales.</li>
            <li className='p-4 bg-amber-100/80 rounded-md text-black sm:max-w-[45%] hidden_lazy lazy'>¡Los trucos y secretos para hacer dobleces increíbles son la clave para destacar en el arte floral! Dominar estas técnicas te permitirá crear bouquets únicos y memorables.</li>
            <li className='p-4 bg-amber-100/80 rounded-md text-black sm:max-w-[45%] hidden_lazy lazy'>Dominar la creación de bouquets excepcionales te permitirá dejar una huella emocional al regalarlos y también generar oportunidades para venderlos, abriendo camino a potenciales ingresos extraordinarios.</li>
          </ul>
        </div>
      </article>
      <div className='w-full h-[4px] bg-white/60'></div>
      <div className='flex flex-col gap-4'>
        <Link href='https://pay.hotmart.com/T73330605X?checkoutMode=2&off=tld2suya' target='_blank' className='p-4 px-6 rounded-full bg-green-500 text-white font-bold w-max transition-all hover:bg-green-700 hidden_lazy lazy'>Quiero aprender, ir a comprar</Link>
        <p>O bien has click al enlace <Link href={'https://pay.hotmart.com/T73330605X?checkoutMode=2&off=tld2suya'} target='_blank' className='underline text-blue-200 hidden_lazy lazy'>https://pay.hotmart.com/T73330605X?checkoutMode=2&off=tld2suya</Link></p>
        <p className='hidden_lazy lazy'>Al realizar el pago, recibirás un correo electrónico con el asunto <strong> {`"Hotmart compra aprobada"`}</strong>, que te brindará acceso inmediato a tu curso <strong>{`"El Arte de las Envolturas Coreanas"`}</strong>.</p>
        <p className='font-bold text-xl hidden_lazy lazy'>¡Listo para comenzar tu viaje en el mundo floral!</p>
      </div>
    </section>
  )
}

export default Online1