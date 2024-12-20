import Image from "next/image"
import ButtonG from "./ui/ButtonGeneral"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const ThirdSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    }
    return (
        <motion.section
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7 }} className="flex flex-col lg:flex-row lg:gap-9 m-auto ">
            <div className="lg:w-[50%]">
                <h2 className="text-white text-3xl font-stolzMedium mb-3 2xl:text-[40px] 2k:text-[48px]">
                    ¿Qué obstáculos frenan el crecimiento de las empresas?
                </h2>
                <div className="flex flex-col gap-5 items-center mb-10 mt-6">
                    <div className="flex flex-row gap-4 items-center">
                        <div
                            className="bg-[#181819] rounded-full flex items-center justify-center p-6 w-10 h-10 border-2 border-solid border-[#242425] bg-[url('/signoPeso.svg')] bg-no-repeat bg-center bg-[length:30%] 2k:w-14 2k:h-14"
                        ></div>
                        <div>
                            <p className="text-white text-[14px] leading-tight sm:text-[16px] font-stolzLight 2k:text-[20px]">
                                <span className="font-stolzMedium">Inversión sin retorno:</span> Empresas que invierten en marketing sin ver crecimiento en ventas o clientes, perdiendo la oportunidad de escalar.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center" ref={ref}>
                        <div
                            className="bg-[#181819] rounded-full flex items-center justify-center p-6 w-10 h-10 border-2 border-solid border-[#242425] bg-[url('/world.svg')] bg-no-repeat bg-center bg-[length:50%] 2k:w-14 2k:h-14"
                        ></div>
                        <div>
                            <p className="text-white text-[14px] leading-tight sm:text-[16px] font-stolzLight 2k:text-[20px]">
                                <span className="font-stolzMedium">Falta de presencia de marca:</span> Marcas que no logran conectar con su audiencia ni construir una imagen memorable
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <div
                            className="bg-[#181819] rounded-full flex items-center justify-center p-6 w-10 h-10 border-2 border-solid border-[#242425] bg-[url('/downArrow.svg')] bg-no-repeat bg-center bg-[length:55%] 2k:w-14 2k:h-14"
                        ></div>
                        <div>
                            <p className="text-white text-[14px] leading-tight sm:text-[16px] font-stolzLight 2k:text-[20px]">
                                <span className="font-stolzMedium">Leads sin potencial: </span> Tener tráfico no siempre significa atraer a los clientes que impulsan el crecimiento de la empresa.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <div
                            className="bg-[#181819] rounded-full flex items-center justify-center p-6 w-10 h-10 border-2 border-solid border-[#242425] bg-[url('/accuracy.svg')] bg-no-repeat bg-center bg-[length:50%] 2k:w-14 2k:h-14"
                        ></div>
                        <div>
                            <p className="text-white text-[14px] leading-tight sm:text-[16px] font-stolzLight 2k:text-[20px]">
                                <span className="font-stolzMedium">Estrategias sin estructura: </span> Campañas sin una metodología clara, sin una visión de futuro ni capacidad de escalar, que se quedan cortas en resultados tangibles.
                            </p>
                        </div>
                    </div>
                </div>
                <ButtonG text={'¿Cómo trabajamos?'} transparent={false} arrowUp={false} notArrow={false} link='#comoTrabajamos' width='w-full lg:w-[296px] h-auto' whatsapp={false} textSize='' />
            </div>
            <div className="mt-10 lg:w-[50%] lg:bg-[url('/img2.png')] lg:bg-no-repeat lg:bg-center lg:bg-cover lg:mt-0 2xl:w-[40%]">
                <Image
                    src={'/img2.png'}
                    width={516}
                    height={350}
                    alt='computadora'
                    className='w-full lg:hidden'
                />
            </div>
        </motion.section>
    )
}

export default ThirdSection