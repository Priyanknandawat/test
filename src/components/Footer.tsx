import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";

const Footer =() =>{
    return(
        <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-4">
            <Image className="w-24 " src={logo} alt="logo"/>
            <p className="text-sm ">All rights reserved{""}<a className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-260 href=">@PriyankNandawat</a></p>
        </div>
    );
}

export default Footer;