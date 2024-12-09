"use client"
import CardClientes from "./ui/CardClientes"
import { useState } from "react";
import ButtonG from "./ui/ButtonGeneral"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const SixthSection = () => {
    const [showCharts, setShowCharts] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, y: 0},
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
        >
            <div className="w-full mb-16" ref={ref}>
                <h2 className="text-white text-3xl text-center font-stolzMedium mb-3 lg:text-[40px]">Lo que dicen <span className="text-[#CEFF20]">nuestros clientes</span> de nosotros</h2>
            </div>
            <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:justify-center 2xl:gap-8 w-full">
                {
                    showCharts && (
                        <>
                            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" time={0} />
                            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" time={1} />
                            <CardClientes text="“CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!”" avatar="https://github.com/shadcn.png" name="Lorem Ipsum" subtitle="Lorem Ipsum" time={2} />
                        </>
                    )
                }
            </div>
            <div className="w-full mt-5 flex justify-center">
                <ButtonG text="Agenda tu consulta" transparent={false} width="w-1/2" arrowUp={false} notArrow={false} link='#consulta' whatsapp={false} textSize='' />
            </div>

        </motion.div>
    )
}

export default SixthSection