import ButtonG from './ui/ButtonGeneral'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const SecondSection = () => {
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
        transition={{ duration: 0.7 }}
        className='flex flex-col gap-10 lg:flex-row-reverse items-center 2xl:gap-14 justify-center xl:m-auto'  >
            <div className='lg:w-3/4 2xl:pr-12'>
                <h2 className='text-white text-3xl font-stolzMedium mb-3 lg:text-[40px] 2k:text-[50px]' ref={ref}>
                    Lo que hacemos
                </h2>
                <p className='text-white text-[16px] leading-tight font-stolzLight mb-10 2xl:w-3/4 2k:text-[20px]'>
                    Nos enfocamos en estrategias que maximizan tu inversión, ya sea para captar clientes, hacer crecer tu empresa o fortalecer la identidad de tu marca. Cada acción que diseñamos busca generar un impacto relevante y medible.
                </p>
                <div className='relative'>
                    <ButtonG text={'¿A quiénes ayudamos?'} transparent={false} arrowUp={false} notArrow={false} link='#ayudamos' width='w-full lg:w-[296px] h-auto' whatsapp={false}  textSize='' />
                    <Image
                        src={'/corazon.svg'}
                        width={122}
                        height={120}
                        alt='corazon'
                        className='hidden lg:block lg:absolute lg:-top-4 lg:right-0 xl:right-[20%] xl:-top-8 2xl:right-[33%]'
                    />
                </div>
            </div>
            <div className='w-full lg:w-2/4'>
                <Image
                    src={'/img1.png'}
                    width={516}
                    height={350}
                    alt='computadora'
                    className='w-full lg:max-w-[532px] lg:max-h-[366px]'
                />
            </div>
        </motion.section>
    )
}

export default SecondSection