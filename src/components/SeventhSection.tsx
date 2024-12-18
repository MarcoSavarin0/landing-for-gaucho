import ButtonG from './ui/ButtonGeneral'
// import Calendario from './ui/CalendarioGaucho'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const SeventhSection = () => {
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
            className='flex justify-between items-center bg-[#181819] border-2 border-[#242425] rounded-xl p-9 lg:w-[40%] lg:mx-auto xl:m-auto '>
            <div className='mx-auto'>
                <div ref={ref}>
                    <h2 className="text-white text-2xl lg:text-3xl font-stolzMedium mb-2 2k:text-[38px]">¿Listo para
                        comenzar?</h2>
                    <p className='pr-9 lg:pr-0 text-base text-white font-stolzLight 2k:text-[20px]'>Hablemos sobre cómo llevar tu negocio al siguiente nivel</p>
                </div>
                <div className='flex gap-1 mt-5'>
                    <ButtonG text="Agendá tu consulta" transparent={false} arrowUp={false} notArrow={true} link='#contacto' width=' sm:w-full h-auto' whatsapp={false} textSize='text-sm sm:text-base md:text-lg' />
                    <ButtonG text="" transparent={true} arrowUp={false} notArrow={true} link='https://wa.link/cf3is0' width='w-[33%] h-auto' whatsapp={true} textSize='' />
                </div>
            </div>
            {/* <div className='hidden lg:block'>
                <Calendario />
            </div> */}
        </motion.div>
    )
}

export default SeventhSection