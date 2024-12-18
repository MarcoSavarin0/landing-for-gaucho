"use client";
import { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const sectionIds = ["header", "quehacemos", "ayudamos", "comoTrabajamos", "resultados", "consulta", "contacto"];

export const UpButton = () => {
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const [previousSection, setPreviousSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            let current: string | null = null;

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                        current = id;
                    }
                }
            });

            if (current && current !== currentSection) {
                const indexSection = sectionIds.indexOf(current);
                setPreviousSection(sectionIds[indexSection - 1] || null);
                console.log(indexSection);
                setCurrentSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentSection]);

    const handleGoBack = useCallback(() => {
        if (previousSection) {
            const prevElement = document.getElementById(previousSection);
            if (prevElement) {
                let offset = 0;
                const screenHeight = window.innerHeight;
                if (previousSection === "header") offset = screenHeight < 768 ? 0 : 0;
                window.scrollTo({
                    top: prevElement.offsetTop + offset,
                    behavior: "smooth",
                });
            }
        }
    }, [previousSection]);
    // const handleScrollOrWheel = useCallback((event: WheelEvent) => {
    //     if (event instanceof WheelEvent && event.deltaY < 0) {
    //         handleGoBack();
    //     }
    // }, [handleGoBack]);

    // useEffect(() => {
    //     window.addEventListener("wheel", handleScrollOrWheel);
    
    //     return () => {
    //         window.removeEventListener("wheel", handleScrollOrWheel);
    //     };
    // }, [handleScrollOrWheel]);



    return (
        <div className="hidden xl:block fixed bottom-4 right-4 z-50">
            <button
                onClick={handleGoBack}
                className={` p-4 bg-[#CEFF20] hover:bg-[#a9dc16]  rounded-full  ${previousSection ? "opacity-100" : "opacity-50 cursor-not-allowed"
                    }`}
                disabled={currentSection === 'header'}
            >
                <p>
                    <FaArrowUp />

                </p>
            </button>

        </div>
    );
};
