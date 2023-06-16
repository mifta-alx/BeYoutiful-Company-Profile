import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'
const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white" >
      <div className='bg-gradient-to-tr from-rose-200 via-rose-100 to-white w-full h-screen'>

        <nav class="bg-transparent w-full">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-12 md:px-16 p-4">
            <a href="#" class="flex items-center">
              <img src="./logo.png" class="h-12 mr-3" alt="Logo" />
              <span class={`self-center text-2xl whitespace-nowrap text-black ${pjs.className} font-bold`}>Be<span className='text-primary opacity-[86%]'>You</span>tiful</span>
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-primary rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-primary" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Beranda</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Fasilitas</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Beauty Partner</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='flex max-w-screen-xl md:flex-row flex-col gap-8 md:gap-0 px-4 py-8 md:px-16 md:py-10 w-full items-center justify-between mx-auto'>
          <div className='max-w-xl'>
            <h1 className={`${pjs.className} text-xl md:text-4xl text-black font-bold`}>Discover your inner beauty with beYoutiful: Your ultimate beauty solution platform.</h1>
            <div className='max-w-xs md:mt-6 mt-4'>
              <p className={`${pjs.className} font-normal text-sm md:text-xl text-black`}>1st Indonesian Beauty Platform with Augmented Reality (AR) Fitur</p>
            </div>
            <div className={`bg-primary w-fit rounded-md md:px-6 md:py-3 px-4 py-2.5 uppercase opacity-[86px] md:mt-6 mt-4`}>
              <p className={`${pjs.className} font-normal md:text-sm text-xs`}>Shop Now</p>
            </div>
          </div>
          <img src='./banner.jpg' className='w-[428px] md:h-[500px] h-[250px] object-cover object-center md:rounded-tl-[47px] md:rounded-br-[47px] md:rounded-bl-[0px] md:rounded-tr-[47px] rounded-2xl' />
        </div>
      </div>
      <div className='bg-gradient-to-br from-rose-200 via-rose-100 to-white w-full h-screen items-center flex'>
        <div className='flex max-w-screen-xl md:flex-row flex-col gap-8 md:gap-0 px-4 py-8 md:px-16 md:py-10 w-full items-center justify-between mx-auto'>
          <img src='./section2.jpg' className='w-[468px] md:h-[540px] h-[250px] object-cover object-center md:rounded-tl-[47px] md:rounded-br-[47px] md:rounded-bl-[0px] md:rounded-tr-[47px] rounded-2xl' />
          <div className='max-w-xl'>
            <div className='space-y-5'>
              <h1 className={`${pjs.className} text-xl md:text-5xl text-black font-normal italic`}>Modern Product for</h1>
              <h1 className={`${pjs.className} text-xl md:text-5xl text-black font-bold not-italic`}>Modern Care</h1>
            </div>
            <div className='md:mt-6 mt-4'>
              <p className={`${pjs.className} font-normal text-sm md:text-xl text-black text-justify`}>BeYoutiful adalah sebuah platform inovatif yang menyediakan solusi kecantikan yang lebih mudah dan efektif bagi konsumen. Platform kami dirancang untuk meningkatkan aksesibilitas, efisiensi bisnis, dan pengalaman pelanggan dalam mencari, memilih, dan membeli produk atau jasa kecantikan. Melalui teknologi canggih dan fitur-fitur inovatif, BeYoutiful menyediakan solusi kecantikan yang efektif dan sesuai dengan kebutuhan konsumen, serta mendorong inovasi dalam industri kecantikan</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-gradient-to-tr from-rose-200 via-rose-100 to-white w-full h-screen items-center flex'>
        <div className='flex max-w-screen-xl md:flex-row flex-col gap-8 md:gap-0 px-4 py-8 md:px-16 md:py-10 w-full items-center justify-between mx-auto'>
          <img src='./section2.jpg' className='w-[468px] md:h-[540px] h-[250px] object-cover object-center md:rounded-tl-[47px] md:rounded-br-[47px] md:rounded-bl-[0px] md:rounded-tr-[47px] rounded-2xl' />
          <div className='max-w-xl'>
            <div className='space-y-5'>
              <h1 className={`${pjs.className} text-xl md:text-5xl text-black font-normal italic`}>Modern Product for</h1>
              <h1 className={`${pjs.className} text-xl md:text-5xl text-black font-bold not-italic`}>Modern Care</h1>
            </div>
            <div className='md:mt-6 mt-4'>
              <p className={`${pjs.className} font-normal text-sm md:text-xl text-black text-justify`}>BeYoutiful adalah sebuah platform inovatif yang menyediakan solusi kecantikan yang lebih mudah dan efektif bagi konsumen. Platform kami dirancang untuk meningkatkan aksesibilitas, efisiensi bisnis, dan pengalaman pelanggan dalam mencari, memilih, dan membeli produk atau jasa kecantikan. Melalui teknologi canggih dan fitur-fitur inovatif, BeYoutiful menyediakan solusi kecantikan yang efektif dan sesuai dengan kebutuhan konsumen, serta mendorong inovasi dalam industri kecantikan</p>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  )
}
