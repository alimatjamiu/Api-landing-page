import Image from "next/image";
import Logo from "../../public/images/logo copy.svg";
import FaceBook from "../../public/images/icon-facebook.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Pinterest from "../../public/images/icon-pinterest.svg";
import Instagram from "../../public/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-[#35323e] text-white p-8  ">
      <div className=" grid grid-cols-1 lg:grid-cols-5 px-16  ">
        <div className="mx-auto lg:mx-0 pb-2 lg:pb-0 ">
          <Image src={Logo} alt="logo" width={80} height={80} className="mb-4" />
         
      </div>

      
        <div className="flex flex-col gap-2 items-center lg:items-start ">
          <h3 className="hover:text-[#2acfcf] transition-colors">Features</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start ">
            <li><a className="hover:text-[#2acfcf]" href="#">Link Shortening</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Branded Links</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Analytics</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start hover:text-[] "> 
          <h3>Resources</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start  ">
            <li><a className="hover:text-[#2acfcf]" href="#">Blog</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Developer</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Support</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start ">
          <h3>Company</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start">
            <li><a className="hover:text-[#2acfcf]" href="#">About Us</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Our Team</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Career</a></li>
            <li><a className="hover:text-[#2acfcf]" href="#">Contact</a></li>
          </ul>
        </div>
       
     
         <div className="flex gap-4  justify-center  items-center lg:items-start  ">
            <a className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer" href="#"><Image src={FaceBook} alt="Facebook" width={24} height={24} /></a>
            <a className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer" href="#"><Image src={Twitter} alt="Twitter" width={24} height={24} /></a>
            <a className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer" href="#"><Image src={Pinterest} alt="Pinterest" width={24} height={24} /></a>
            <a className="hover:bg-[#2acfcf] active:bg-[#2acfcf] hover:rounded-full cursor-pointer" href="#"><Image src={Instagram} alt="Instagram" width={24} height={24} /></a>
        </div>
      </div>
      
    </footer>
  );
}

