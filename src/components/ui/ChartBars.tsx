import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "01-24", desktop: 3620 },
    { month: "02-24", desktop: 4000 },
    { month: "03-24", desktop: 4700 },
    { month: "04-24", desktop: 6100 },
    { month: "05-24", desktop: 7000 },
    { month: "06-24", desktop: 8000 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const ChartBars = () => {
    return (
        <div className='w-full '>
            <Card className="w-full lg:h-[320px] xl:h-[350px] 2xl:h-[435px]  bg-[#181819] border-2 border-[#242425] rounded-xl">
                <CardHeader>
                    <CardDescription className='text-[#FF8CF4] font-stolzLight lg:ml-7'>Valor de conversión de compras</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig} className="w-full h-full py-5">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                tickFormatter={(value) => `${value}`}
                                domain={[0, 400]}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="desktop" fill="#ff8cf3a9" radius={0} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="text-center text-white my-6 px-4">
                <h3 className="text-xl font-stolzMedium xl:text-3xl lg:mb-3">Aumento en conversiones</h3>
                <p className="text-[14px] font-stolzRegular text-gray-200 xl:text-[16px]">Ayudamos a [Nombre de Cliente] a aumentar sus conversiones en un X% en solo 3 meses.</p>
            </div>
        </div>
    )
}


export default ChartBars