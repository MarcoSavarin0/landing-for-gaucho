import Image from "next/image";
import ChartLinear from "./ui/ChartLinear";
import ChartBars from "./ui/ChartBars";
const FifthSection = () => {
    return (
        <>
            <div className="relative mb-16">
                <h2 className="text-white text-3xl text-center font-stolzMedium mb-3 lg:text-[40px]">
                    <span className="text-[#CEFF20]">Resultados</span> que hablan
                    por si solos
                </h2>
                <Image src={'/Capa_1.svg'} alt={'flecha hacia abajo'} width={90} height={90} className="absolute top-6 right-0 md:-top-3 md:-right-5 lg:hidden"/>
            </div> 
            <div className="flex flex-col lg:flex-row gap-6 lg:items-start ">
                <ChartBars />
                <ChartLinear />
            </div>
        </>
    )
}

export default FifthSection