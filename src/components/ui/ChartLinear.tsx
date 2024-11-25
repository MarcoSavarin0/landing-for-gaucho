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
    { month: "June", desktop: 75},
    { month: "July", desktop: 150 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#ffff",
    },
} satisfies ChartConfig

const ChartLinear = () => {
    return (
        <Card className="w-full lg:w-1/2 bg-[#181819] border-2 border-[#242425] rounded-xl">
            <CardContent>
                <ChartContainer config={chartConfig} className="pr-6 py-3">
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
                        />
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
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
                <div className="w-full text-sm">
                        <p className="text-center">Compras en el sitio web</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ChartLinear;
