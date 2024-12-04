import Link from "next/link"
import TopHeader from "./TopHeader"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pb-10">
            <div className="flex justify-between items-center border-b-[1px] border-white pb-5">
                <div>
                    <TopHeader  />
                    <p className="text-sm text-white font-stolzLight mt-6">© Gaucho Digital 2024</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Link href={'https://www.instagram.com/gauchodigital.ok/'} target="_blank" className="text-black bg-white rounded-md p-3">
                        <FaInstagram />
                    </Link>
                    <Link href={'https://www.linkedin.com/company/gaucho-digital/posts/?feedView=all'} target="_blank" className="text-black bg-white rounded-md p-3">
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer