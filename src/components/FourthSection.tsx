import ButtonG from "./ui/ButtonGeneral"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const FourthSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
    }
    return (
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center gap-6 2xl:gap-10 xl:m-auto">
            <div>
                <h2 className="text-white  text-3xl font-stolzMedium mb-3 lg:text-[40px] text-nowrap 2xl:text-[48px] lg:mb-7 2k:text-[55px]">Nuestra <span className="text-[#CEFF20]">metodología</span></h2>
                <p className="text-white font-stolzLight leading-tight text-[16px] 2k:text-[24px]">Ofrecemos una estrategia digital personalizada que no solo se adapta a tus necesidades, sino que está diseñada para generar impacto. Combinamos creatividad y datos para que cada acción tenga resultados reales y medibles.</p>
            </div>
            <div className="flex flex-col gap-2 2xl:gap-5 items-center w-full" ref={ref}>
                <div className="flex flex-col gap-3 2xl:gap-5 items-center lg:flex-row lg:items-stretch w-full">
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px] 2k:text-[32px]">Diagnóstico
                            personalizado</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3 2k:text-[20px]">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px] 2k:text-[32px]">Estrategia enfocada
                            en resultados</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3  2k:text-[20px]">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 2xl:gap-5 items-center lg:flex-row lg:items-stretch w-full">
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px] 2k:text-[32px]">Implementación con
                            seguimiento constante</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3  2k:text-[20px]">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px] 2k:text-[32px]">Análisis de resultados
                            y optimización continua</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3  2k:text-[20px]">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-center lg:flex-row lg:items-center 2xl:mt-6">
                <ButtonG text="Resultados clientes Gaucho" transparent={false} width="w-full md:w-fit md:w-auto lg:w-1/2" arrowUp={false} notArrow={false} link='#resultados' whatsapp={false} textSize='' />
                <ButtonG text="Conocé nuestro portfolio" transparent={true} width="w-full md:w-fit md:w-auto lg:w-1/2" arrowUp={false} notArrow={false} link='https://docs.google.com/presentation/d/e/2PACX-1vTTFg-h_EAn5UEMON7U_LEGzaj33iMKoNvWK0e-AMuRB7SXQ_aHU-icf6y1PvKw73kLoR_MOZEc__Z4/pub?start=false&loop=false&delayms=15000' whatsapp={false} textSize='' />
            </div>
        </motion.div>
    )
}

export default FourthSection