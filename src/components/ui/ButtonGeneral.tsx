import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

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

const ButtonG = ({ text, transparent, width, whatsapp, notArrow, textSize }: PropsButton) => {
    return (
        <div className={`py-3 px-5 text-center ${width} rounded-lg border-2 border-[#CEFF20] border-solid ` + (transparent ? 'bg-transparent' : 'bg-[#CEFF20]')}>
            <p className={'text-lg font-stolzRegular flex items-center justify-center gap-4 text-nowrap ' + (transparent ? 'text-[#CEFF20] ' : ' ') + (textSize ? textSize : '')}>
                {whatsapp ? <FaWhatsapp className="sm:text-3xl" /> : text}
                {!notArrow && (
                    <span>
                        {transparent ? (
                            <GoArrowUpRight className="text-xl" />
                        ) : (
                            <FaArrowDown className="text-base" />
                        )}
                    </span>
                )}
            </p>
        </div>
    )
}

export default ButtonG