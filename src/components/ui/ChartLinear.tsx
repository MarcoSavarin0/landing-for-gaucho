import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [

    { month: "April", desktop: 48 },
    { month: "May", desktop: 98 },
    { month: "June", desktop: 75 },
    { month: "July", desktop: 180 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#ffff",
    },
} satisfies ChartConfig

const ChartLinear = () => {
    return (
        
        <div className='w-full '>
            <Card className="w-full lg:h-[320px] xl:h-[350px] 2xl:h-[435px]  bg-[#181819] border-2 border-[#242425] rounded-xl">
                <CardContent className="xl:pt-5">
                    <ChartContainer config={chartConfig} className="pr-6 h-full lg:h-max-[294px] ">
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                top: 40,
                            }}
                        >
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                tickFormatter={(value) => `${value}`}
                                domain={[0, 200]}
                            />
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={9}
                                tickFormatter={(value) => value.slice(0, 3)}
                                orientation="top"
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" hideLabel />}
                            />
                            <Area
                                dataKey="desktop"
                                type="linear"
                                fill="#b67af295"
                                fillOpacity={0.4}
                                stroke="#B57AF2"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="w-full text-sm flex justify-center">
                        <p className="text-center text-white flex items-center gap-2"><span className="w-3 h-3 bg-[#B57AF2] "></span>Compras en el sitio web</p>
                    </div>
                </CardFooter>
            </Card>
            <div className="text-center text-white my-6 px-4">
                <h3 className="text-xl font-stolzMedium xl:text-3xl lg:mb-3">Reducción de costos</h3>
                <p className="text-[14px] font-stolzRegular text-gray-200 xl:text-[16px]">En solo 3 meses, logramos que María Magdalena, marca de cosmética, aumentara su ROAS de 4.34% a 22.39%</p>
            </div>
        </div>
    );
};

export default ChartLinear;
