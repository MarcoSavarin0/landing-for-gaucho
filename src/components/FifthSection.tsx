import Image from "next/image";
import ChartLinear from "./ui/ChartLinear";
const FifthSection = () => {
    return (
        <div>
            <div>
                <h2 className="">
                   <span>Resultados</span> que hablan
                    por si solos
                </h2>
                <Image src={'/capa_1.svg'} alt={''} width={100} height={100} />
            </div>
            <div>
                <ChartLinear />
            </div>
        </div>
    )
}

export default FifthSection