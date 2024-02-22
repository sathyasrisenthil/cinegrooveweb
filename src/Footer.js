import React from "react";
import Icon from "./SocialLinks";
export default function Footer()
{
    return(
        <div className=" bg-slate-950 mt-1">
             <div className="flex justify-center mb-5 mt-20 pt-10">
             <a className='bg-sky-500 hover:bg-sky-700 text-white  py-1 px-2 rounded mr-5'  href="/Loginpage">Login to access more</a>
            <a className='bg-sky-500 hover:bg-sky-700 text-white  py-1 px-2 rounded' href="/Signpage">SignUp to share Reviews</a>
            </div>
            <Icon />
            <div className="flex text-center mx-[650px] mt-5 justify-between text-xl">
                <a href="/" className="text-sky-400">Home</a>
                <a href="/Aboutuspage" className="text-sky-400">About Us</a>
                <a href="" className="text-sky-400">Contact</a>
                <a href="/Loginpage" className="text-sky-400">Login</a>
            </div>
            <h1 className="text-slate-50 text-center text-xl mt-5">@ copyrights 2024</h1>
        </div>
    );
}
/*
 <h1 className="text-slate-50 text-center text-2xl ">share your reviews and access more by</h1>
            <a className='bg-sky-500 hover:bg-sky-700 text-white  py-1 px-2 rounded mx-2' href="">Login</a>
*/
