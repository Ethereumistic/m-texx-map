"use client";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from 'next/image';
import { FaHome, FaBriefcase, FaUser, FaCog, FaLightbulb, FaTrophy } from 'react-icons/fa';

import Collect from "@/components/Collect";
import CircleSelector from "@/components/CircleSelector";
import ImgCarousel from "@/components/ImgCarousel";
import HowToCards from "@/components/HowToCards";
import OurLocations from "@/components/OurLocations";

export default function Post({ posts }) {
  

  return (
    <>
    
    {/* {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )} */}

      {/* <div className="text-center text-4xl">САМО ЛОКАЦИИТЕ РАБОТЯТ</div> */}
      <div className="relative ">
        {/* Mobile Background Video */}
        <video className="-mt-6 brightness-75 md:hidden" src="/img/background2.mp4" autoPlay loop muted playsInline></video>
        {/* Desktop Background Video */}
        <video className="hidden md:block xl:rounded-lg -mt-6 brightness-75 mx-auto" src="/img/bgvideo.webm" autoPlay loop muted ></video>
        {/* 4K Video centered for biggest device */}
        {/* <video className="hidden max-xl:block xl:rounded-lg -mt-6 brightness-75 " src="/img/bgvideo.webm" autoPlay loop muted ></video> */}

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <h1 class="mx-16 text-xl xl:text-5xl text-white font-russo text-right">Рециклиране на текстил: Втори живот за стари дрехи, 
              <br />
              първа стъпка към...</h1>
              <Link href="/recycling">
              <button class="text-md xl:text-2xl font-russo mr-4 mt-4 bg-transparent border border-white hover:bg-lgreen hover:border-dgreen text-white hover:text-dgreen py-1 px-2 xl:py-4 xl:px-8 rounded-full float-right">Рециклиране на Текстил</button>
              </Link>
            </div>
            </div>
      </div>

      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-96 my-8">
        <div className="flex flex-col items-center p-2 xl:p-8 bg-lgreen dark:bg-lgreen text-dgreen rounded-lg shadow-md">
          <h2 className="text-2xl xl:text-4xl font-russo mb-4 text-center">Запази околната среда, чрез преизползване, рециклиране и ...</h2>
          <p className="text-lg xl:text-2xl text-center font-osw">
          През 2022г. България е генерирала повече от 100 000 тона текстилни и кожени отпадъци, 
          но само 2% от този отпадък се рециклира. Ние целим да предоставим безплатно рециклиране 
          като услуга на домакинства и организации в България и да насърчим за преизползването, 
          рециклирането и намаляване на използването, чрез образование, с акцент върху 
          ангажирането на младежите в училищата.
          </p>
        </div>
      </div>

      <Image
        className="mx-auto rounded-lg border-4 border-lgreen dark:lgreen mb-8"
        src="/img/esvg.svg" // Relative path to your image in the public folder
        alt="Description of the image"
        width={1000} // Specify the width
        height={1000} // Specify the height
      />

      <div className='w-full h-auto bg-lgreen dark:bg-lgreen my-8'>
        <h1 className='text-2xl xl:text-6xl text-dgreen dark:text-dgreen font-russo text-center py-3 mx-12'>Жизнения цикъл на дрехите и влиянието му върху околната среда</h1>
    </div>

      <ImgCarousel className='' />

      <div className=' w-full mx-auto h-auto bg-lred dark:bg-lred my-4'>
        <h1 className='text-2xl xl:text-4xl text-dred dark:text-dred font-russo text-center py-4 px-2'>Изхвърляне на дрехи в контейнери за общи отпадъци води до замърсяване на околната среда</h1>
    </div>
      <HowToCards />
      <Collect />
      <OurLocations />

    </>
  );
}
