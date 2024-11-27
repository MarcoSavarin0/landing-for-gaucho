import Button from './ui/Button'
import Calendar from './ui/Calendar'
const SeventhSection = () => {
    return (
        <div className='flex justify-between items-center bg-[#181819] border-2 border-[#242425] rounded-xl p-9'>
            <div className='lg:w-[25%]'>
                <div>
                    <h2 className="text-white text-2xl lg:text-3xl font-stolzMedium mb-2 ">¿Listo para
                        comenzar?</h2>
                    <p className='pr-9 lg:pr-0 text-base text-white font-stolzLight'>Hablemos sobre cómo llevar tu negocio al siguiente nivel</p>
                </div>
                <div className='flex gap-1 mt-5'>
                    <Button text="Agendá tu consulta" transparent={false} arrowUp={false} notArrow={true} link='' width='w-full h-auto' />
                    <Button text="a" transparent={true} arrowUp={false} notArrow={false} link='' width='w-[33%] h-auto' />
                </div>
            </div>
            <div className='hidden lg:block'>
                <Calendar />          
            </div>
        </div>
    )
}

export default SeventhSection