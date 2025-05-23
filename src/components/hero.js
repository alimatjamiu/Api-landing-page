import Illustration from "../../public/images/illustration-working.svg"
import Image from "next/image"

export default function Hero() {
  return (
<div className="lg:p-8 mb-20 lg:mb-12">
  
      <div className="flex flex-col lg:flex-row-reverse gap-4 lg:gap-18 ">
      <div className="lg:w-[40%]  ">
        <Image src={Illustration} alt="illustration-workin" width={1000} height={1000}/>
      </div>
      <div className="flex flex-col mt-4  py-2 lg:w-[40%] lg:mt-8 lg:mr-10 xl:mr-22 text-center lg:text-left">
        <h1 className="text-4xl font-semibold lg:text-5xl xl:text-6xl text-[#232127] px-6 lg:px-0">More than just shorter links</h1>
        <p className="text-[#9e9aa7] text-sm  font-semibold px-10 mt-2 lg:pr-10 xl:pr-30 lg:mt-0 lg:px-0">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
         <button className="bg-[#2acfcf] p-2 text-white rounded-full w-40 mt-4 mx-auto lg:mx-0 font-semibold px-2 lg:px-0 focus:opacity-20 ">Get Started</button>
        </div>
       
      </div>
</div>
      

    
  )
}
