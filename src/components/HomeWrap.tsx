
import Footer from "./Footer"
import EighthSection from "./EighthSection"
import FifthSection from "./FifthSection"
import FourthSection from "./FourthSection"
import Header from "./Header"
import SecondSection from "./SecondSection"
import SeventhSection from "./SeventhSection"
// import SixthSection from "./SixthSection"
import ThirdSection from "./ThirdSection"


const HomeWrap = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute top-0 z-[-2] h-full w-full bg-[#1D1D1D] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(206,255,32,0.13)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)] lg:bg-[radial-gradient(100%_10%_at_50%_0%,rgba(206,255,32,0.20)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)]"></div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 ">
                <Header />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id='quehacemos'>
                <SecondSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96 " id="ayudamos">
                <ThirdSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="comoTrabajamos">
                <FourthSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="resultados">
                <FifthSection />
            </div>
            {/* <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="clientes">
                <SixthSection />
            </div> */}
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="consulta">
                <SeventhSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="contacto">
                <EighthSection />
            </div>
            <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96">
                <Footer />
            </div>
        </div>
    )
}

export default HomeWrap