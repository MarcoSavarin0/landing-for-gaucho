import localFont from "next/font/local";
import HomeWrap from "@/components/HomeWrap";
import { UpButton } from "@/components/UpButton";
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
        <div className={`${stolzlight.variable} ${stolzBold.variable} ${stolzMedium.variable} ${stolzRegular.variable} `}>
            
            <UpButton></UpButton>
            <HomeWrap />
        </div>
    );
}
