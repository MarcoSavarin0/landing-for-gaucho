

const Calendar = () => {
    return (
        <div className="flex w-full max-w-lg mx-auto bg-[#2A2A2C] text-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center w-1/2 p-4">
                <div className="flex items-center justify-center w-12 h-12 bg-lime-500 rounded-full">
                    <span className="text-black font-bold text-lg">g</span>
                </div>
                <p className="text-sm mt-2 text-gray-300">Consulta online</p>
                <h2 className="text-lg font-semibold">Gaucho Digital</h2>
            </div>
            <div className="w-px bg-gray-600"></div>
            <div className="flex flex-col w-1/2 p-4">
                <h3 className="text-center text-gray-400 text-sm mb-4">Noviembre 2024</h3>
                <div className="grid grid-cols-7 gap-1 text-center text-gray-400 text-xs">
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day) => (
                        <span key={day}>{day}</span>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => (
                        <div
                            key={i + 1}
                            className={`p-2 rounded-full ${i + 1 === 21 ? 'bg-lime-500 text-black' : ''
                                }`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar