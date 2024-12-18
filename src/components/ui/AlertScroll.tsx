'use client'
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { GoAlertFill } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
    title: string;
    description: string;
}

const AlertScroll = ({ title, description }: Props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false); 
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: 100 }} 
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Alert>
                            <GoAlertFill className="h-10 w-5" />
                            <AlertTitle>{title}</AlertTitle>
                            <AlertDescription>{description}</AlertDescription>
                        </Alert>
                    </motion.div>
                )}
            </AnimatePresence>
         
        </>
    );
};

export default AlertScroll