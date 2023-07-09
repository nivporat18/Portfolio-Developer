'use client'
import BookWork from './bookWork/page'
import Contact from './contact/page'
import About from './about/page'
import Image from 'next/image'

export default function Home() {

  const scrollDown = ()=>{
    window.scroll({
      top: 2500,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
  <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex  lg:items-center">



          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              פיתוח אתרים</h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
               אודות
              </button>

              <button onClick={scrollDown}  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                יצירת קשר
              </button>
            </div>
          </div>
        </div>

      </section>


  <section className="bg-white">
    <About/>
  </section>



    <section className="bg-gray-900 text-white flex flex-col">
        <BookWork/>
    </section>




    <section className="relative bg-[url(https://res.cloudinary.com/mepelaozen/image/upload/v1688560817/one%20project/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863_pzwkpr.avif)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <Contact/>

    </section>


  </>

  )
}
