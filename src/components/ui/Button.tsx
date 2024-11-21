import { FaArrowDown } from "react-icons/fa";

type PropsButton = {
    text: string;
    transparent: boolean;
    arrowUp: boolean;
    notArrow: boolean;
    link: string;
}

const Button = ({ text, transparent, arrowUp, notArrow, link }: PropsButton) => {
    return (
        <div className='bg-[#CEFF20] py-3 px-5 text-center w-[256px] rounded-lg'>
            <p className='text-lg font-stolzRegular flex items-center gap-4 text-nowrap'>
                {text}
                <span>
                    <FaArrowDown className="text-base"/>
                </span>
            </p>
        </div>
    )
}

export default Button