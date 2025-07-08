import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const ExtraCard = () => {
    const staggerContainer = {
    animate: {
        transition: {
        staggerChildren: 0.1
        }
    }
    };

    const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
    };
    return (
        <motion.ul 
            className="relative flex flex-col lg:flex-row gap-4 lg:gap-4 items-center justify-between"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            >
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,at_center,#22c55e_60%,white_100%)]"></div>

            <motion.li 
                className="relative p-4 border border-gray-200 rounded-2xl overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                >
                    <div className="flex gap-4 items-center">
                        <Check className="text-green-600 w-16" />
                        <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                            The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                        </p>
                    </div>
                    <div className="absolute -z-10 top-0 lg:-top-[100%] -right-[45%] lg:-right-[25%] transform rotate-45 lg:rotate-15 blur-xl opacity-60 w-[65%] aspect-square bg-radial-[at_50%_55%] from-white from-5% to-[#8E44AD] to-60% bg-[radial-gradient(circle,at_center,_60%,white_100%)]"></div>

            </motion.li>

            <motion.li 
                className="relative p-4 border border-gray-200 rounded-2xl overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                >
                    <div className="flex gap-4 items-center">
                        <Check className="text-green-600 w-16" />
                        <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                            The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                        </p>
                    </div>
                    <div className="absolute -z-10 -bottom-25 lg:-bottom-[8%] -right-[35%] lg:-right-[25%] lg:rounded-full transform rotate-45 lg:rotate-75 opacity-60 blur-xl w-[250px] lg:w-[450px] aspect-square bg-radial-[at_60%_53%] from-white from-5% to-[#8E44AD] to-60% bg-[radial-gradient(circle,at_center,_60%,white_100%)]"></div>

            </motion.li>

            <motion.li 
                className="relative p-4 border border-gray-200 rounded-2xl overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                >
                    <div className="flex gap-4 items-center">
                        <Check className="text-green-600 w-16" />
                        <p className="text-[1.13rem] lg:text-lg leading-tight font-medium">
                            The #1 reason why sales reps fail to close consistently and how you can fix it in days.
                        </p>
                    </div>
                    <div className="absolute -z-10  -top-[170%] left-[73%] lg:-left-[45%] transform -rotate-45 lg:-rotate-25 blur-xl opacity-60 w-[90%] aspect-square bg-radial-[at_50%_65%] from-white from-5% to-[#8E44AD] to-60% bg-[radial-gradient(circle,at_center,_60%,white_100%)]"></div>

                </motion.li>

        </motion.ul>
    )
}