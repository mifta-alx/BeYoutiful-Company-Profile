"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google'
const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export default function Home() {
  const dataImage = [
    {
      'url': '/1.jpg',
      'productName': 'Wardah Highlighter',
      'rating': 4,
      'price': 'Rp57.000'
    },
    {
      'url': '/2.jpg',
      'productName': 'Maybelline Powder',
      'rating': 5,
      'price': 'Rp89.000'
    },
    {
      'url': '/3.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/4.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/5.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/6.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/7.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/8.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
    {
      'url': '/9.jpg',
      'productName': 'BeYoutiful Eyeshadow',
      'rating': 5,
      'price': 'Rp60.000'
    },
  ]
  const [toggle, setToggle] = useState(false)
  const [currentImageIndexes, setCurrentImageIndexes] = useState([0, 1, 2]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const intervalGroup = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) => {
        const nextIndex = (prevIndexes[2] + 1) % dataImage.length;
        const nextIndexes = [];

        for (let i = nextIndex; i < nextIndex + 3; i++) {
          nextIndexes.push(i % dataImage.length);
        }

        setActiveDotIndex(nextIndexes[0] / 3); // Update active dot index

        return nextIndexes;
      });
    }, 4000); // Mengubah interval menjadi 4 detik

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataImage.length);
    }, 3000);

    return () => {
      clearInterval(intervalGroup);
      clearInterval(interval);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white" >
      <div className='bg-gradient-to-tr from-rose-200 via-rose-100 to-white w-full h-fit'>

        <nav className="bg-transparent w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:py-12 md:px-16 p-4">
            <a href="#" className="flex items-center">
              <img src="./logo.png" className="h-12 mr-3" alt="Logo" />
              <span className={`self-center text-2xl whitespace-nowrap text-black ${pjs.className} font-bold`}>Be<span className='text-primary opacity-[86%]'>You</span>tiful</span>
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-primary rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-primary" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setToggle(!toggle)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${toggle ? '' : 'hidden'}`} id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary bg-white rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Beranda</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Fasilitas</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Beauty Partner</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-primary opacity-[86%] md:p-0">Contact</a>
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

      <div className='bg-gradient-to-br from-rose-200 via-rose-100 to-white w-full h-fit items-center flex'>
        <div className='flex max-w-screen-xl md:flex-row flex-col gap-8 md:gap-0 px-4 py-8 md:px-16 md:py-24 w-full items-center justify-between mx-auto'>
          <img src='./section2.jpg' className='md:order-1 order-2 w-[468px] md:h-[540px] h-[350px] object-cover object-top md:object-center md:rounded-tl-[47px] md:rounded-br-[47px] md:rounded-bl-[0px] md:rounded-tr-[47px] rounded-2xl' />
          <div className='max-w-xl md:order-2 order-1'>
            <div className='md:space-y-5'>
              <h1 className={`${pjs.className} text-3xl md:text-5xl text-black font-normal italic md:text-left text-center`}>Modern Product for</h1>
              <h1 className={`${pjs.className} text-3xl md:text-5xl text-black font-bold not-italic md:text-left text-center`}>Modern Care</h1>
            </div>
            <div className='md:mt-6 mt-8'>
              <p className={`${pjs.className} font-normal text-sm md:text-xl text-black text-justify`}>BeYoutiful adalah sebuah platform inovatif yang menyediakan solusi kecantikan yang lebih mudah dan efektif bagi konsumen. Platform kami dirancang untuk meningkatkan aksesibilitas, efisiensi bisnis, dan pengalaman pelanggan dalam mencari, memilih, dan membeli produk atau jasa kecantikan. Melalui teknologi canggih dan fitur-fitur inovatif, BeYoutiful menyediakan solusi kecantikan yang efektif dan sesuai dengan kebutuhan konsumen, serta mendorong inovasi dalam industri kecantikan</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-tr from-rose-200 via-rose-100 to-white w-full h-fit flex'>
        <div className='flex max-w-screen-xl flex-col gap-4 md:gap-0 px-4 py-8 md:px-16 md:py-10 w-full items-center justify-center mx-auto'>
          <h1 className={`uppercase ${pjs.className} font-medium tracking-widest text-black text-3xl md:text-5xl`}>Product</h1>
          <div className="md:hidden flex justify-center flex-col items-center space-y-6 mt-2">
            <img src={dataImage[currentIndex].url} alt="Product Image" className="w-[348px] h-[480px] object-cover rounded-2xl drop-shadow-xl" />
            <div className="mt-8 bg-primary w-full rounded-xl px-6 py-4 flex flex-col gap-4 opacity-[86%]">
              <span className="text-white space-x-4">
                {'★'.repeat(dataImage[currentIndex].rating)}
              </span>
              <h3 className={`${pjs.className} font-semibold tracking-wide text-lg`}>{dataImage[currentIndex].productName}</h3>
              <span className={`${pjs.className} text-base font-light text-white tracking-wide`}>{dataImage[currentIndex].price}</span>
            </div>
          </div>
          <div className="md:flex hidden justify-center space-x-6 mt-14">
            {currentImageIndexes.map((index) => {
              const product = dataImage[index];
              return (
                <div key={index} className="flex flex-col items-center">
                  <img
                    key={index}
                    src={dataImage[index].url}
                    alt={`Image ${index + 1}`}
                    className="w-[348px] h-[480px] object-cover rounded-2xl drop-shadow-xl"
                  />
                  <div className="mt-8 bg-primary w-full rounded-xl px-6 py-4 flex flex-col gap-4 opacity-[86%]">
                    <span className="text-white space-x-4">
                      {'★'.repeat(product.rating)}
                    </span>
                    <h3 className={`${pjs.className} font-semibold tracking-wide text-lg`}>{product.productName}</h3>
                    <span className={`${pjs.className} text-base font-light text-white tracking-wide`}>{product.price}</span>
                  </div>
                </div>
              )
            }
            )}
          </div>
          <div className="md:flex mt-8 hidden">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-4 h-4 mx-1 rounded-full border-primary border ${index === activeDotIndex ? 'bg-primary' : 'bg-transparent'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-tr from-rose-200 via-rose-300 to-rose-400 w-full h-fit flex'>
        <div className='flex max-w-screen-xl flex-col md:gap-20 gap-8 px-4 py-8 md:px-16 md:py-10 w-full items-center justify-center mx-auto'>
          <div className='flex flex-col md:flex-row justify-between w-full gap-6 md:gap-0'>
            <div className='flex flex-col max-w-sm justify-between'>
              <h1 className={`text-2xl whitespace-nowrap text-black ${pjs.className} font-bold`}>Be<span className='text-primary opacity-[86%]'>You</span>tiful</h1>
              <p className={`${pjs.className} text-lg font-bold text-white`}>The No. 1 Digital Destination for all things about Beauty - Shopping, LifeStyle & Trends</p>
            </div>
            <div className='flex flex-col md:flex-row gap-9'>
              <div className={`flex flex-col ${pjs.className} gap-6`}>
                <p className='uppercase font-normal'>information</p>
                <ul className={`${pjs.className} font-normal text-sm`}>
                  <li>
                    <a href="">Our Story</a>
                  </li>
                  <li>
                    <a href="">
                      BeYoutiful Promies</a>
                  </li>
                  <li>
                    <a href="">
                      Curation Process</a>
                  </li>
                  <li>
                    <a href="">
                      The BeYoutiful Brand
                    </a>
                  </li>
                  <li>
                    <a href="">BeYoutiful Rewards
                    </a>
                  </li>
                  <li>
                    <a href="">BeYoutiful Feed
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`flex flex-col ${pjs.className} gap-6`}>
                <p className='uppercase font-normal'>customer care</p>
                <ul className={`${pjs.className} font-normal text-sm`}>
                  <li>
                    <a href="">My Account
                    </a>
                  </li>
                  <li>
                    <a href="">
                      FAQs</a>
                  </li>
                  <li>
                    <a href="">
                      Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='text-center w-full space-y-2 '>
            <h1 className={`${pjs.className} font-black text-2xl md:text-5xl tracking-wider uppercase italic text-black`}>Never <span className='text-white'>miss a</span> sale <span className='text-white'>again</span></h1>
            <p className={`${pjs.className} font-light text-white text-base md:text-lg tracking-widest`}>by : LEGAR COMPANY</p>
          </div>
        </div>
      </div>
    </main>
  )
}
