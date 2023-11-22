
import Observer from '@/components/Observer'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const playFairDisplay = Playfair_Display({subsets: ['latin']})

export default function Home() {
  return (
    <>
    <Observer />
    <section className='w-full flex flex-col gap-6'>
    <h1 className={`${playFairDisplay.className} text-4xl text-gray-200 my-2 hidden_lazy lazy`}> Soy <strong className='animate-charcter'>Paola Gómez</strong>, arquitecta floral apasionada por la creación de experiencias únicas.</h1>
      <header className='w-full h-fit flex'>
        <Image src='/images/bienvenida.jpeg' alt='bienvenida' width={600} height={300} className='aspect-video object-contain hidden_lazy lazy' priority />
        </header>
        <article>
          <p className='hidden_lazy lazy'>En este espacio, compartiré contigo mi mundo de arquitectura floral, donde las flores son la paleta con la que diseño emociones. Desde cursos online y presenciales hasta la confección de bouquets y la creación de eventos florales inolvidables, cada pétalo cuenta una historia.</p>
          <p className='hidden_lazy lazy'>¡Sumérgete en la magia de las flores conmigo! Descubre la elegancia de la naturaleza y déjate inspirar. 🌿✨</p>
          <p className='hidden_lazy lazy'>¡Bienvenidos a un viaje floral lleno de creatividad y estilo! 🌷</p>
          <p className='hidden_lazy lazy'><span className='text-blue-500'> #ArquitecturaFloral #Bienvenidos #FloresConEstilo</span></p>
        </article>
        <div className='w-full h-[4px] bg-white/60'></div>
        <article className='flex flex-col gap-2' id='tienda'>
          <h2 className={`${playFairDisplay.className} text-2xl hidden_lazy lazy`}>Visita mi tianda online</h2>
          <p className='hidden_lazy lazy'>Explora mi selección cuidadosamente elaborada y elige el bouquet que hablará por ti. Desde elegantes arreglos hasta opciones personalizadas, cada creación es una expresión de amor y estilo.</p>
          <p className='hidden_lazy lazy'>Haz clic, elige la belleza y dale vida a tus emociones con un toque floral. ¡Descubre la magia de regalar flores desde la comodidad de tu hogar! 🌸✨</p>
          <Link href='https://www.paolagomezfloral.com/' target='_blank' className='p-4 rounded-full px-6 bg-green-500 text-white font-bold w-max transition-all hover:bg-green-700 hidden_lazy lazy'>Ir a comprar</Link>
          <Link href='https://www.paolagomezfloral.com/' target='_blank' className='underline text-blue-200 hidden_lazy lazy'>paolagomezfloral.com</Link>
          <video className='aspect-video sm:w-1/2 object-contain hidden_lazy lazy' poster='/images/pgflores1.jpg' controls muted>
            <source src='/videos/pg1.mp4' type='video/mp4' />
          </video>
        </article>
        <div className='w-full h-[4px] bg-white/60'></div>
        <article className='flex flex-col gap-2' id='online'>
          <h2 className={`${playFairDisplay.className} text-2xl hidden_lazy lazy`}>Conoce mis cursos online</h2>
          <p className='hidden_lazy lazy'>Estoy emocionada de invitarte a explorar el maravilloso mundo de la bouquetería a través de mis cursos online, disponibles en Hotmart.</p>
          
          <ul className='mt-2'>
            <li className='flex flex-col gap-1 w-[380px] bg-white/90 rounded-md p-2'>
              <Image src='/images/ws1.jpeg' alt='bienvenida' width={360} height={300} className='object-contain' />
              <Link href='https://hotmart.com/es/marketplace/productos/bouqueteria-on-line-el-arte-de-las-envolturas-coreanas-en-el-diseno-floral/T73330605X?sck=HOTMART_SITE' target='_blank' className='text-black'>Bouquetería On line (el arte de las envolturas coreanas en el diseño floral)</Link>
              <p className='text-xs text-gray-800'>Aprende a crear bouquets únicos y memorables con el arte de las envolturas coreanas.</p>
            </li>
          </ul>
        </article>
        <div className='w-full h-[4px] bg-white/60'></div>
        <article className='flex flex-col gap-2 bg-black/10 backdrop-opacity-50 backdrop-blur-xl' id='galeria'>
          <h2 className={`${playFairDisplay.className} text-2xl hidden_lazy lazy`}>Galeria, referencias y mas</h2>
          <div className='flex gap-4 mt-4 overflow-x-auto'>
            <Image src='/images/pgvideopost (2).jpeg' alt='bienvenida' width={280} height={300} className='h-[300px] object-contain hidden_lazy lazy' />
            <video className='h-[300px] w-[280px] object-contain hidden_lazy lazy' controls muted>
              <source src='/videos/pgvideopost (1).mp4' type='video/mp4' />
            </video>
            <Image src='/images/pgvideopost (1).jpeg' alt='bienvenida' width={280} height={300} className='h-[300px] object-contain hidden_lazy lazy' />
            <video className='h-[300px] w-[280px] object-contain hidden_lazy lazy' controls muted>
              <source src='/videos/pgvideopost (2).mp4' type='video/mp4' />
            </video>
            <video className='h-[300px] w-[280px] object-contain hidden_lazy lazy' controls muted>
              <source src='/videos/pgvideopost (4).mp4' type='video/mp4' />
            </video>
          </div>
        </article>
      </section>
    </>
    
  )
}
