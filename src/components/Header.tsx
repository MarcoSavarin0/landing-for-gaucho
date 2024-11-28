import TopHeader from './TopHeader'
import Button from './ui/ButtonGeneral'
import Image from 'next/image'
const Header = () => {
    return (
        <>
            <div>
                <TopHeader />
            </div>
            <section className='mt-24 md:mt-36 md:relative md:w-[65%] lg:w-[70%]'>
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
                    className='hidden md:block md:absolute md:top-2 md:-right-12 lg:-right-2 xl:-right-24 2xl:right-12'
                />
                <p className='text-white font-stolzLight text-base leading-tight 2xl:w-[90%] 2xl:text-[20px] 2xl:leading-tight 2xl:pr-20'>
                    Desde hace años, nos asociamos con empresas que buscan crecer y destacarse. Convertimos tus ideas y objetivos en estrategias digitales que generan resultados de verdad.
                </p>
                <div className='mt-7 relative md:mt-10'>
                    <Button text={'¿Que hace Gaucho?'} transparent={false} arrowUp={false} notArrow={false} link='' width='w-[256px]'  whatsapp={false} textSize=''/>
                    <Image
                        src={'/Capa_1.svg'}
                        alt=''
                        width={100}
                        height={100}
                        className='absolute -top-4 right-0 rotate-3 md:right-20 md:rotate-0 lg:right-[23%] lg:-top-12 lg:-rotate-6 lg:w-44 xl:right-[35%] 2xl:right-[50%]'
                    />
                </div>
            </section>
        </>
    )
}

export default Header