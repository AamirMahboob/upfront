import React from 'react';
import {motion} from 'framer-motion'
const Button = ({ value, isVisible, isWhiteText , }) => {
    // Conditionally apply classes based on props
    const buttonClasses = `w-48 h-10 rounded-md  hidden md:block ${isVisible ? 'block' : 'hidden'} ${isWhiteText ? 'bg-[#03045E] text-white' : 'bg-white text-black'}`;

    return (
        <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          scale: { type: 'spring', stiffness: 100 },
          opacity: { duration: 0.5 },
          ease: 'easeInOut',
        }}
        className={buttonClasses}>
            {value}
        </motion.button>
    );
}

export default Button;
