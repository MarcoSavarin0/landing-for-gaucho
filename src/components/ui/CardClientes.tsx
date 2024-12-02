import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
type Props = {
    text: string;
    avatar: string;
    name: string;
    subtitle: string;
    time: number;
}
import { motion } from 'framer-motion';

const CardClientes = ({ text, avatar, name, subtitle, time }: Props) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.6, // Extiende la duración
                delay: time * 0.1, // Mantén o ajusta el delay si es necesario
                ease: [0.17, 0.67, 0.83, 0.67] // Curva de easing suave tipo cubic-bezier
            }}
        >
            <Card className="w-full lg:max-w-[400px]  bg-[#181819] border-[1px] border-[#242425] rounded-2xl">
                <CardContent className="px-5 py-10 2xl:pb-24 2xl:pt-12">
                    <p className="text-white text-base leading-tight font-stolzLight mb-5">{text}</p>
                </CardContent>
                <CardFooter className="2xl:pb-8">
                    <Avatar>
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 flex flex-col gap-0">
                        <p className="text-white text-base leading-tight font-stolzRegular">{name}</p>
                        <p className="text-[#FFFFFF80] text-sm leading-tight font-stolzRegular">{subtitle}</p>
                    </div>
                </ CardFooter>
            </Card>
        </motion.div>
    )
}

export default CardClientes