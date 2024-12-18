"use client"
import { useState } from "react";
import Image from "next/image";
import ChartLinear from "./ui/ChartLinear";
import ChartBars from "./ui/ChartBars";
import ButtonG from "./ui/ButtonGeneral";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const FifthSection = () => {
    const [showCharts, setShowCharts] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
    }
    if (inView && !showCharts) {
        setShowCharts(true)
    }
    return (
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7 }}
            className="xl:m-auto"
        >
            <div className="relative mb-16">
                <h2 className="text-white text-3xl text-center font-stolzMedium mb-3 lg:text-[40px] 2k:text-[48px]">
                    <span className="text-[#CEFF20]">Resultados</span> que hablan
                    por si solos
                </h2>
                <Image src={'/Capa_1.svg'} alt={'flecha hacia abajo'} width={90} height={90} className="absolute top-6 right-0 md:-top-3 md:-right-5 lg:hidden" />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:items-start " ref={ref}>
                {showCharts && (
                    <>
                        <ChartBars />
                        <ChartLinear />
                    </>
                )}
            </div>
            <ButtonG text="Consultanos" transparent={false} width="w-full" arrowUp={false} notArrow={false} link='#consulta' whatsapp={false} textSize='' />
        </motion.div>
    )
}

export default FifthSection