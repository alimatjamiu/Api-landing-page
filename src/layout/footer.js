import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import FaceBook from "../../public/images/icon-facebook.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Pinterest from "../../public/images/icon-pinterest.svg";
import Instagram from "../../public/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-[#35323e] text-white p-8  ">
      <div className=" grid grid-cols-1 lg:grid-cols-5 px-16  ">
        <div className=" ">
        <Image className="text-white fill-current" src={Logo} alt="logo" width={100} height={100} />
      </div>

      
        <div className="flex flex-col gap-2 items-center lg:items-start ">
          <h3>Features</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start ">
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start hover:text-[] "> 
          <h3>Resources</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start ">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developer</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center lg:items-start ">
          <h3>Company</h3>
          <ul className="flex flex-col gap-1 pb-8 items-center lg:items-start">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
       
     
         <div className="flex gap-4  justify-center">
            <a href="#"><Image src={FaceBook} alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src={Twitter} alt="Twitter" width={24} height={24} /></a>
            <a href="#"><Image src={Pinterest} alt="Pinterest" width={24} height={24} /></a>
            <a href="#"><Image src={Instagram} alt="Instagram" width={24} height={24} /></a>
        </div>
      </div>
      
    </footer>
  );
}

