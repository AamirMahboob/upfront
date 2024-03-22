import React from 'react'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import Button from '../resusable/Button'

const Hero = ({title,content,buttonTitle,img}) => {
  return (
    <div style={{ background: 'linear-gradient(180deg, rgba(0, 180, 216, 0.15) 0%, rgba(255, 255, 255, 0.3) 64.06%)' }} className=" relative flex flex-row w-screen h-[40.625rem]  ">
                <div className='w-[50%] flex flex-col p-10'>
                    <div style={{
                        backgroundImage: `url(${b1})`, // Corrected usage of backgroundImage
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }} className="w-[30%] h-[90%] absolute top-[5%]  left-[5%] gap-0   ">

                    </div>
                    <div className='z-10 flex justify-center items-center mt-3 p-20 flex-col gap-4 '>
                        <h1 class="font-heading text-[2.83rem]  text-[#03045E]  font-bold ml-[-20%]  ">
                            {title}
                        </h1>
                        <p className="font-body text-[#03031D] text-base font-normal leading-[1.5625rem] "> {content}</p>
                        <Button isVisible={true} isWhiteText={true} value={buttonTitle} />
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center'>

                    <div style={{

                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover', // Changed 'object' to 'cover'

                        // Changed 'background-repeat' to 'backgroundRepeat'
                        backgroundPosition: 'center',
                    }}
                        className="w-[35%]    absolute top-[20%] right-[10%] border border-gray-50 bg-[#B3DFEB] rounded-[50%] gap-0   "
                    >
                        <img src={b3} className=' ml-[-10%] h-[100%]' alt="" style={{
                            transform: 'rotateY(180deg)',
                        }} />
                    </div>
                </div>
            </div>
  )
}

export default Hero