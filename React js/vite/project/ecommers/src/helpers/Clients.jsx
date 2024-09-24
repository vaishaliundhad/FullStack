import React from 'react'
import { GoStarFill } from "react-icons/go";


const Clients = ({heading , text , name , meta , image , title , price}) => {
    return (
            <div className=''>
                <div className='bg-white w-[435px] h-[396px] pt-11 pr-9 pb-6 pl-9 rounded-lg border'>
                    <div className='flex gap-2 mb-4'>
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                    </div>
                    <div className='mb-2 text-xl font-semibold mb-2'> 
                        {heading}
                    </div>
                    <div className='text-[18px] mb-6'>
                        {text}
                    </div>
                    <div className='mb-8'>
                        <div className='font-semibold'>{name}</div>
                        <div className='text-gray-500'>{meta}</div>
                    </div>
                    <hr />
                    <div className='pt-6 relative flex items-center'>
                        <div><img src={image} alt="" className='h-16 max-w-16' /></div>
                        <div className='pl-6 pr-5'>
                            <p className='mb-1.5'>{title}</p>
                            <div className='font-semibold'>{price}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Clients