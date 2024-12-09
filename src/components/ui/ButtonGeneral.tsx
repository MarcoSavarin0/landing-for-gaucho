import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
type PropsButton = {
    text: string;
    transparent: boolean;
    arrowUp: boolean;
    notArrow: boolean;
    link: string;
    width: string;
    whatsapp: boolean;
    textSize: string;
}

const ButtonG = ({ text, transparent, width, whatsapp, notArrow, textSize, link }: PropsButton) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (link.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(link);
    
            if (target) {
                let offset = 0;
    
                const screenHeight = window.innerHeight;
    
                if (link === "#quehacemos") {
                    offset = screenHeight < 768 ? -150 : -300;
                } else if (link === "#ayudamos") {
                    offset = screenHeight < 768 ? -80 : -120;
                } else if (link === "#comoTrabajamos") {
                    offset = screenHeight < 768 ? -50 : -100;
                } else if (link === "#resultados") {
                    offset = screenHeight < 768 ? -50 : -100;
                } else if (link === "#clientes") {
                    offset = screenHeight < 768 ? -100 : -200;
                } else if (link === "#consulta") {
                    offset = screenHeight < 768 ? -100 : -200;
                } else if (link === "#contacto") {
                    offset = screenHeight < 768 ? 30 : -100;
                }
    
                const position =
                    target.getBoundingClientRect().top + window.scrollY + offset;
    
                window.scrollTo({ top: position, behavior: "smooth" });
            }
        }
    };

    return (
        <Link
            href={link}
            target={transparent ? '_blank' : '_self'}
            onClick={handleScroll}
            className={`group block py-3 px-5 text-center ${width} rounded-lg border-2 border-[#CEFF20] border-solid transition-transform duration-300 ` +
                (transparent ? 'bg-transparent hover:bg-[#CEFF20] hover:text-black' : 'bg-[#CEFF20] hover:bg-[#a9dc16] hover:border-[#a9dc16]')}
        >
            <p
                className={`text-lg font-stolzRegular flex items-center justify-center gap-4 text-nowrap transition-all duration-300 ` +
                    (transparent ? 'text-[#CEFF20] group-hover:text-black' : '') +
                    (textSize ? textSize : '')}
            >
                {whatsapp ? (
                    <FaWhatsapp className="sm:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-[#333]" />
                ) : (
                    text
                )}
                {!notArrow && (
                    <span>
                        {transparent ? (
                            <GoArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        ) : (
                            <FaArrowDown className="text-base transition-transform duration-300 group-hover:translate-y-1" />
                        )}
                    </span>
                )}
            </p>
        </Link>
    )
}

export default ButtonG