import React from 'react'
import phone1 from '../assets/phone1.png'
import switch1 from '../assets/switch1.png'
import buds1 from '../assets/buds1.png'
import headphone1 from '../assets/headphone1.png'


const Trending = () => {
  return (
    <div className='w-full m-4 overflow-hidden '>
    <div className='header'>
        <h1 className='text-5xl pl-[50px] pt-[60px]'>Trending Products</h1>
    </div>
    <div className='container-section flex gap-7 mt-10 ml-6'>
        <div className=' w-[310px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var((--secondary-color)" }}>
            <div className='' >
                <img src={phone1} alt="" className='h-[311px] w-[311px] object-cover object-center' />
            </div>
            <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                <h6>UltraGlass 2 Treated Screen Protector for iPhone 15 Pro</h6>
                <strong className='text-bold text-[14px]'>$39.99</strong>
            </div>
        </div>
        <div className=' w-[310px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var((--secondary-color)" }}>
            <div className='' >
                <img src={switch1} alt="" className='h-[311px] w-[311px] object-cover object-center' />
            </div>
            <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                <h6>Smart Light Switch with Thread</h6>
                <b className='text-bold text-[14px]'>$49.99</b>
            </div>
        </div>
        <div className=' w-[310px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var((--secondary-color)" }}>
            <div className='' >
                <img src={buds1} alt="" className='h-[311px] w-[311px] object-cover object-center' />
            </div>
            <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                <h6>SoundForm Rise</h6>
                <div>
                <span className='line-through decoration-black text-gray-400 text-[13px]'>$100.00</span>
                <strong className='text-red-500 ml-2 text-[13px]'>$79.99</strong>
                </div>
            </div>
        </div>
        <div className=' w-[310px] h-auto border-2 border-solid rounded-2xl max-lg:hidden' style={{ borderColor: "var((--secondary-color)" }}>
            <div className='' >
                <img src={headphone1} alt="" className='h-[311px] w-[311px] object-cover object-center' />
            </div>
            <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                <h6>Wireless On-Ear HeadPhones for Kids</h6>
                <div>
                <span className='line-through decoration-black  text-gray-400 text-[13px]'>$34.99</span>
                <strong className='text-red-500 ml-2 text-[13px]'>$24.99</strong>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Trending
