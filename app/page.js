import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <div  className="intro_div flex justify-center items-center  bg-cover relative" >
        <div className="text-white text-center">
        <p className="text-[40px] font-bold mt-24 mb-8 text-shadow tracking-[26px]">STELLAR HUNT</p>
          <p className="text-lg px-16 mb-8 text-white event_description">The future of humanity lies in your hands. A rogue faction is sabotaging the mission to find a new habitable planet for our species. It is your destiny to aid Cooper and his team in ensuring the success of the Interstellar mission.</p>
        </div>
    </div>
    
  )
}
