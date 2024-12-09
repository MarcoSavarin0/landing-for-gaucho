import ContactForm from "./ui/ContactForm"
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const EighthSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
    }
    return (
        <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.7 }}
        
        className="w-full p-10 lg:p-24 bg-[#181819] border-2 border-[#242425] rounded-xl" >
            
            <ContactForm  />
            <div ref={ref}></div>
        </motion.div>
    )
}

export default EighthSection