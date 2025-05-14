import Brand from "../../public/images/icon-brand-recognition.svg"
import Detail from "../../public/images/icon-detailed-records.svg"
import Custom from "../../public/images/icon-fully-customizable.svg"
import Image from "next/image"

export default function Advance() {
  return (
    <div className="bg-[#bfbfbf] py-8">
      <div className="flex flex-col items-center justify-center py-2 text-center  ">
        <h1 className="text-xl font-semibold lg:text-2xl text-[#3b3054]">Advance Statistics</h1>
        <p className="lg:px-20 px-10 text-sm lg:text-md w-[84%] lg:w-[60%] text-[#9e9aa7]">Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center   items-center p-6 lg:px-16 xl:px-20 xl:mx-10 ">
       <div className="bg-white py-4 lg:py-0 lg:mx-0 rounded-md">
         
          <div className=" rounded-lg  p-6 flex flex-col gap-4 w-full max-w-[80rem] lg:max-w-4xl   ">
          <span className="rounded-full bg-[#3b3054] w-14 h-14 flex justify-center items-center p-4 -mt-16 mx-auto lg:mx-0 lg:-mt-12">
              <Image  src={Brand} alt="Brand logo" width={50} height={50} className="" />
          </span>
            <h2 className="text-xl font-bold text-[#3b3054]">Brand Recognition</h2>
            <p className="xl:text-base text-sm">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."</p>
          </div>
       </div>
       <div className="w-[8px] h-[50px] lg:w-[50px] lg:h-[4px] bg-[#2acfcf]"></div>

        <div className="bg-white py-4 lg:py-0 lg:mt-14 lg:mx-0 rounded-md  ">
             <div className="rounded-lg p-6 flex flex-col  gap-4  w-full max-w-[80rem] lg:max-w-4xl ">
            <span className="rounded-full bg-[#3b3054] w-14 h-14 flex justify-center items-center p-4 -mt-16 lg:-mt-12 mx-auto lg:mx-0">
              <Image  src={Detail} alt="Brand logo" width={50} height={50} className="" />
          </span>
            <h2 className="text-xl font-bold text-[#3b3054]">Detailed Records</h2>
            <p className="xl:text-base text-sm"> Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
          </div>
        </div>
        <div className="w-[8px] h-[50px] lg:w-[50px] lg:h-[4px] bg-[#2acfcf]"></div>

          <div className="bg-white lg:mt-26 py-4 lg:py-0 lg:mx-0 xl:mt-28 rounded-md">
             <div className=" rounded-lg  p-6 flex flex-col  gap-4  w-full max-w-[80rem] lg:max-w-4xl ">
             <span className="rounded-full bg-[#3b3054] w-14 h-14 flex justify-center items-center p-4 -mt-16 mx-auto lg:mx-0 lg:-mt-12">
              <Image  src={Custom} alt="Brand logo" width={50} height={50} className="" />
          </span>
            <h2 className="text-xl font-bold text-[#3b3054]"> Fully Customizable</h2>
            <p className="xl:text-base text-sm"> Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement."</p>
          </div>
          </div>
      
      </div>
  
    </div>
  )
}
