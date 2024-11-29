import localFont from "next/font/local";
import Header from "@/components/Header"
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import Footer from "@/components/Footer";   

const stolzlight = localFont({
    src: "./fonts/Stolzl-Light.ttf",
    variable: "--font-stolzlight",
    weight: "100 900",
});
const stolzBold = localFont({
    src: "./fonts/Stolzl-Bold.ttf",
    variable: "--font-stolzBold",
    weight: "100 900",
});
const stolzMedium = localFont({
    src: "./fonts/Stolzl-Medium.ttf",
    variable: "--font-stolzMedium",
    weight: "100 900",
});
const stolzRegular = localFont({
    src: "./fonts/Stolzl-Regular.ttf",
    variable: "--font-stolzRegular",
    weight: "100 900",
});



export default function Home() {
    return (
        <div className={`${stolzlight.variable} ${stolzBold.variable} ${stolzMedium.variable} ${stolzRegular.variable}`}>
            <div className="relative min-h-screen">
                <div className="absolute top-0 z-[-2] h-full w-full bg-[#1D1D1D] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(206,255,32,0.13)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)] lg:bg-[radial-gradient(100%_10%_at_50%_0%,rgba(206,255,32,0.20)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)]"></div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 ">
                    <Header />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id='quehacemos'>
                    <SecondSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="ayudamos">
                    <ThirdSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="comoTrabajamos">
                    <FourthSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96" id="resultados">
                    <FifthSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96">
                    <SixthSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96">
                    <SeventhSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96">
                    <EighthSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-80 mt-40 md:mt-48 lg:mt-72 xl:mt-96">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
