"use client"
import { useState } from "react"
import Calendar  from "@/components/ui/calendar"
import Image from "next/image"
const Calendario = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div className="hidden lg:flex items-center justify-center gap-20 bg-[#2F2F2F] rounded-xl p-3">
            <div className="ml-3">
                <Image
                    src='/GauchoDigital_Iso.webp'
                    alt='GauchoDigital_Iso'
                    width={50}
                    height={50}
                />
                <div className="mt-3">
                    <p className="text-gray-300 text-sm font-stolzLight">Consultas online</p>
                    <p className="text-white text-xl font-stolzLight">Gaucho Digital</p>
                </div>
            </div>
            <div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                />
            </div>
        </div>
    )
}

export default Calendario