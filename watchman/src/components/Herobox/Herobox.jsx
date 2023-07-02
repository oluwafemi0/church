import React from 'react'
import Video from '../../assets/video2.mp4'
import Modal from '../Modal/Modal'
import { HeroboxContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroH2 } from './HeroboxElement'

const Herobox = () => {
  return (
    <>
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto  px-4 md:px-8">
    

    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      
      <div class="flex flex-col justify-center sm:text-center lg:ml-12 lg:py-12 lg:text-left xl:w-3/12 xl:py-24">
        <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Watchman Ayobo Parish</p>

        <h1 class="text-black-800 mb-8 text-3xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Join Us Online Every Sunday @ 9am</h1>
        <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>


       
        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <Modal />
         </div>
      </div>
      <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg  lg:h-auto xl:w-6/12">
       
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </div>
    </section>
  </div>
</div>
    </>
  )
}

export default Herobox