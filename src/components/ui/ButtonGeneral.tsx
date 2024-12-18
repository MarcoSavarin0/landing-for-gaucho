import { useEffect } from "react";
import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

type PropsButton = {
    text: string;
    transparent: boolean;
    arrowUp: boolean;
    notArrow: boolean;
    link: string;
    width: string;
    whatsapp: boolean;
    textSize: string;
};

const ButtonG = ({
    text,
    transparent,
    width,
    whatsapp,
    notArrow,
    textSize,
    link,
}: PropsButton) => {
    const { ref: sectionRef, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (link.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(link);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        const handleScrollOrKey = (event: KeyboardEvent) => {
            if (
                link.startsWith("#") &&
                inView &&
                (
                    (event instanceof KeyboardEvent && event.key === "Enter"))
            ) {
                const target = document.querySelector(link);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        window.addEventListener("keydown", handleScrollOrKey);

        return () => {
            window.removeEventListener("keydown", handleScrollOrKey);
        };
    }, [link, inView]);

    return (

        <Link
            href={link}
            target={transparent ? "_blank" : "_self"}
            onClick={handleScroll}
            ref={sectionRef}
            className={`group block py-3 px-5 text-center ${width} rounded-lg border-2 border-[#CEFF20] border-solid transition-transform duration-300 ` +
                (transparent
                    ? "bg-transparent hover:bg-[#CEFF20] hover:text-black"
                    : "bg-[#CEFF20] hover:bg-[#a9dc16] hover:border-[#a9dc16]")}
        >
            <p
                className={`text-lg font-stolzRegular flex items-center justify-center gap-4 text-nowrap transition-all duration-300 ` +
                    (transparent ? "text-[#CEFF20] group-hover:text-black" : "") +
                    (textSize ? textSize : "")}
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
    );
};

export default ButtonG;
