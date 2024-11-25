import Button from "./ui/Button"

const FourthSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div>
                <h2 className="text-white  text-3xl font-stolzMedium mb-3 lg:text-[40px] text-nowrap 2xl:text-[48px] lg:mb-7">Nuestra <span className="text-[#CEFF20]">metodología</span></h2>
                <p className="text-white font-stolzLight leading-tight text-[16px]">Ofrecemos una estrategia digital personalizada que no solo se adapta a tus necesidades, sino que está diseñada para generar impacto. Combinamos creatividad y datos para que cada acción tenga resultados reales y medibles.</p>
            </div>
            <div className="flex flex-col gap-5 items-center w-full">
                <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-stretch w-full">
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px]">Diagnóstico
                            personalizado</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px]">Estrategia enfocada
                            en resultados</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-stretch w-full">
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px]">Implementación con
                            seguimiento constante</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                    <div className="bg-[#181819] border-2 border-solid border-[#242425] rounded-2xl p-8 xl:w-1/2 2xl:py-11">
                        <h3 className="text-white text-xl font-stolzMedium xl:text-[24px]">Análisis de resultados
                            y optimización continua</h3>
                        <p className="text-white font-stolzLight leading-tight text-[16px] mt-3">Analizamos en profundidad tus objetivos y la situación
                            de tu negocio.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-center lg:flex-row lg:items-center lg:mt-6">
                <Button text="Resultados clientes Gaucho" transparent={false} width="w-full md:w-fit md:w-auto lg:w-1/2" arrowUp={false} notArrow={false} link='' />
                <Button text="Conocé nuestro portfolio" transparent={true} width="w-full md:w-fit md:w-auto lg:w-1/2" arrowUp={false} notArrow={false} link='' />
            </div>
        </div>
    )
}

export default FourthSection