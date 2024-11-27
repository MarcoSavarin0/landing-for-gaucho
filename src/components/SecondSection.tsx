import Button from './ui/Button'
import Image from 'next/image'
const SecondSection = () => {
    return (
        <section className='flex flex-col gap-10 lg:flex-row-reverse items-center 2xl:gap-14 justify-center'>
            <div className='lg:w-3/4 2xl:pr-12'>
                <h2 className='text-white text-3xl font-stolzMedium mb-3 lg:text-[40px]'>
                    Lo que hacemos
                </h2>
                <p className='text-white text-[16px] leading-tight font-stolzLight mb-10 2xl:w-3/4'>
                    Nos enfocamos en estrategias que maximizan tu inversión, ya sea para captar clientes, hacer crecer tu empresa o fortalecer la identidad de tu marca. Cada acción que diseñamos busca generar un impacto relevante y medible.
                </p>
                <div className='relative'>
                    <Button text={'¿A quiénes ayudamos?'} transparent={false} arrowUp={false} notArrow={false} link='' width='w-full lg:w-[296px] h-auto' />
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
        </section>
    )
}

export default SecondSection