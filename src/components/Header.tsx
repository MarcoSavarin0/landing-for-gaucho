import TopHeader from './TopHeader'
import ButtonG from './ui/ButtonGeneral'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Header = () => {
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
        >
            <div>
                <TopHeader />
            </div>
            <section className='mt-24 lg:mt-16  xl:mt-36 md:relative md:w-[65%] lg:w-[70%]' ref={ref}>
                <h1 className='text-white font-stolzRegular text-4xl leading-tight mb-4 lg:text-5xl lg:mb-5 xl:text-6xl 2xl:pr-40'>
                    Transformando
                    ideas en
                    resultados
                </h1>
                <Image
                    src={'/avioncito.svg'}
                    alt=''
                    width={100}
                    height={100}
                    className='hidden md:block md:absolute md:top-2 md:-right-12 lg:-right-10 xl:-right-24 2xl:right-12'
                />
                <p className='text-white font-stolzLight text-base leading-tight 2xl:w-[90%] 2xl:text-[20px] 2xl:leading-tight 2xl:pr-20'>
                    Desde hace años, nos asociamos con empresas que buscan crecer y destacarse. Convertimos tus ideas y objetivos en estrategias digitales que generan resultados de verdad.
                </p>
                <div className='mt-7 relative md:mt-10'>
                    <ButtonG text={'¿Que hace Gaucho?'} transparent={false} arrowUp={false} notArrow={false} link='#quehacemos' width='w-[256px]'  whatsapp={false} textSize=''/>
                    <Image
                        src={'/Capa_1.svg'}
                        alt=''
                        width={100}
                        height={100}
                        className='absolute -top-4 right-0 rotate-3 md:right-20 md:rotate-0 lg:right-[23%] lg:-top-12 lg:-rotate-6 lg:w-44 xl:right-[35%] 2xl:right-[50%]'
                    />
                </div>
            </section>
        </motion.div>
    )
}

export default Header