'use client'
import Footer from "./Footer"
import EighthSection from "./EighthSection"
import FifthSection from "./FifthSection"
import FourthSection from "./FourthSection"
import Header from "./Header"
import SecondSection from "./SecondSection"
import SeventhSection from "./SeventhSection"
// import SixthSection from "./SixthSection"
import ThirdSection from "./ThirdSection"
import { useEffect, useState } from 'react';
import { useScroll } from "@/context/ScrollContext"
import AlertScroll from "./ui/AlertScroll"

const HomeWrap = () => {
    const [hasScroll, setHasScroll] = useState(false);
    const { hasScrolled, resetScroll  } = useScroll();

    useEffect(() => {
        const consultaSection = document.getElementById('resultados');
        if (consultaSection) {
            const checkScroll = () => {
                const isScrollable =
                    consultaSection.scrollHeight > consultaSection.clientHeight;
                setHasScroll(isScrollable);
            };

            checkScroll();

            const resizeObserver = new ResizeObserver(checkScroll);
            resizeObserver.observe(consultaSection);

            return () => resizeObserver.disconnect();
        }
    }, []);
    if (hasScrolled){
        setTimeout(() =>{
            resetScroll();
        },3800)
    }
    return (
        <div className="relative min-h-screen">
            <div className="absolute top-0 z-[-2] h-full w-full bg-[#1D1D1D] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(206,255,32,0.13)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)] lg:bg-[radial-gradient(100%_10%_at_50%_0%,rgba(206,255,32,0.20)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)] " ></div>
            <div id="header"></div>
            {
                hasScrolled && (<div className="hidden lg:block lg:fixed lg:top-4 lg:right-5">
                    <AlertScroll title="Aprieta el boton" description="no se puede utilizar el scroll" />
                </div>)
            }

            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 lg:h-[100vh] 2k:px-[500px]">
                <Header />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 xl:flex  lg:h-[100vh] 2k:px-[500px]" id='quehacemos'>
                <SecondSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 xl:flex  lg:h-[100vh] 2k:px-[500px]" id="ayudamos">
                <ThirdSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 xl:flex lg:h-[100vh] 2k:px-[500px]" id="comoTrabajamos">
                <FourthSection />
            </div>
            <div className={`px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 xl:overflow-y-auto xl:flex xl:h-screen lg:h-[100vh] 2k:px-[560px] ${hasScroll ? 'pb-20' : ''}`} id="resultados">
                <FifthSection />
            </div>
            {/* <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 xl:flex  lg:mt-72 xl:mt-96" id="clientes">
                <SixthSection />
            </div> */}
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:flex  xl:mt-96 lg:h-[100vh] 2k:px-[500px]" id="consulta">
                <SeventhSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 xl:flex lg:h-[100vh] 2k:px-[500px]" id="contacto">
                <EighthSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 lg:h-[100vh] 2k:px-[500px]" id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomeWrap