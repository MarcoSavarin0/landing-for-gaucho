import localFont from "next/font/local";
import Header from "@/components/Header"
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
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
                <div className="absolute top-0 z-[-2] h-full w-full bg-[#1D1D1D] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(206,255,32,0.13)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)] lg:bg-[radial-gradient(70%_60%_at_50%_10%,rgba(206,255,32,0.13)_0,rgba(206,255,32,0)_50%,rgba(206,255,32,0)_100%)]"></div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-60">
                    <Header />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-60 mt-40 md:mt-48 lg:mt-72">
                    <SecondSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-60 mt-40 md:mt-48 lg:mt-72">
                    <ThirdSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-60 mt-40 md:mt-48 lg:mt-72">
                    <FourthSection />
                </div>
                <div className="px-8 md:px-9 lg:px-24 xl:px-40 2xl:px-60 mt-40 md:mt-48 lg:mt-72">
                    <FifthSection />
                </div>
            </div>
        </div>
    );
}
