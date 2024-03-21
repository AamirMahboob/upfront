import React from 'react';

const Button = ({value}) => {
    return (
        <button
            className="w-48 h-10 rounded-md hidden md:block  bg-[#03045E] text-white "
        >
            {value}
        </button>
    );
}

export default  Button;
