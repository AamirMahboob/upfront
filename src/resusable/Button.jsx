import React from 'react';

const Button = ({ value, isVisible, isWhiteText , }) => {
    // Conditionally apply classes based on props
    const buttonClasses = `w-48 h-10 rounded-md  hidden md:block ${isVisible ? 'block' : 'hidden'} ${isWhiteText ? 'bg-[#03045E] text-white' : 'bg-white text-black'}`;

    return (
        <button className={buttonClasses}>
            {value}
        </button>
    );
}

export default Button;
