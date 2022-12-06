import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Project from '../components/Project'
import Footer from '../components/Footer'

export default function Home() {
  const images = [
    '/Kotlin_logo.png',
    '/Android_Studio_logo.png',
    '/Wordpress_logo.webp',
    '/CSS3_logo.png',
    '/HTML_logo.webp',
    'JavaScript_logo.png'
  ]
  const project1Gallery = [
    '/Kotlin_logo.png',
    '/Android_Studio_logo.png',
    '/Wordpress_logo.webp',
    '/CSS3_logo.png',
    '/HTML_logo.webp',
    'JavaScript_logo.png'
  ]

  return (
    <div className="w-full mt-14 grow flex items-center justify-center flex-col" >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-1/2 mt-24 flex flex-col items-center justify-center relative bg-slate-300 rounded-xl shadow-md shadow-black border-t-2 border-white">
        <img className=" w-36  rounded-full aspect-square object-cover absolute bottom-full translate-y-1/2 shadow-sm shadow-black" src='me.jpg'/>
        <div className=" pt-20 text-center pb-8 px-8 text-black text-lg">
          <p className="font-bold text-xl">My name is Jakub Nalepa, age 21.</p>
          <p>By the end of that summer I decided to become an Android Developer. It has become my 
            passion since that time, so everyday I learn more and more new things. My main programming
             language is Kotlin. Meantime I was doing internship as Web Developer, which I ended by the end of 
            November.</p>
          <p>Currently I'm unemployed, so, I am willing to collaborate with You!</p>
          <p>This website was created using <i>ReactJS</i></p>
        </div>
      </div>

      <div className="w-full mt-24 px-8 pb-8 bg-slate-300  shadow-md shadow-black border-t-2 border-white ">
          <p className="pt-4 text-center text-black text-xl font-bold">My current skills</p>
          <div className="flex gap-10 mt-6 justify-center">
            {images.map( (img, i) => (
              <img src={img} key={i} className=" h-16 drop-shadow-my-own shadow-white "></img>
            )) }
          </div>
      </div>

      <div className="mt-24 px-6 py-2 bg-slate-300 rounded-xl shadow-md shadow-black border-t-2 border-white">
        <p className="text-center text-black text-xl font-bold">My projects</p>
      </div>

      <Project title="Notebook" desc="Lorem ipsum ugh..." images={project1Gallery} />
      <Project title="Notebook" desc="Lorem ipsum ugh..." images={project1Gallery} />
      <Project title="Notebook" desc="Lorem ipsum ugh..." images={project1Gallery} />
      
      <Footer />
    </div>
  )
}
