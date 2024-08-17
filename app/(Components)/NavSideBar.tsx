"use client"
import Image from "next/image"
import LogoImg from "@/public/logo_image.png"
import { useState } from "react"

const NavSideBar = ({ nav, openNav }: any) => {
    const [navAnim,setNavAnim] = useState(true)

    const handleClick = () => {
        openNav(!nav)
        setNavAnim(!navAnim)
    }

    return (
        <div className={`z-20 ease-in-out duration-200 fixed left-0 h-screen w-[90%] bg-green-400 ${navAnim===true ? "translate-x-0" : "-translate-x-full"}`}>

            <div className="px-3 flex justify-between items-center border-b-2 py-5">
                <div>
                    <Image src={LogoImg} alt={"logo"} width={160} height={160} />
                </div>
                <div>
                    <i aria-hidden className="fa-solid fa-xmark text-2xl me-2" onClick={handleClick}></i>
                </div>
            </div>


            <div className="offcanvas-body px-3">
                <ul>
                    <li className="cursor-pointer border-b-2 py-3">Mobile</li>
                    <li className="cursor-pointer border-b-2 py-3">Laptop</li>
                    <li className="cursor-pointer border-b-2 py-3">Tablets</li>
                    <li className="cursor-pointer border-b-2 py-3">Smart Watches</li>
                    <li className="cursor-pointer border-b-2 py-3">Accessories</li>
                    <li className="cursor-pointer border-b-2 py-3">Wireless Earbuds</li>
                    <li className="cursor-pointer border-b-2 py-3">Home and Lifestyle</li>
                    <li className="cursor-pointer border-b-2 py-3">Gaming</li>
                </ul>
            </div>


        </div>
    )
}

export default NavSideBar