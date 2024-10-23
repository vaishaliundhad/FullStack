import React from 'react'
import galleryImg1 from '../assets/gallery-1.jpg'
import galleryImg2 from '../assets/gallery-2.jpg'
import galleryImg3 from '../assets/gallery-3.jpg'
import galleryImg4 from '../assets/gallery-4.jpg'
import galleryImg5 from '../assets/gallery-5.jpg'

const AboutShopGram = () => {
  return (
    <div className='containerSection'>
        <div className='text-center'>
            <h1 className='text-4xl mb-4'>Shop Gram</h1>
            <p className='tracking-wider'>Inspire and let yourself be inspired, from one unique fashion to another.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-10'>
            <div className='aboutShopGram rounded-xl overflow-hidden relative group'>
                <img src={galleryImg1} alt="" className='aboutShopGramImg group-hover:scale-110 duration-[3s]' />
            </div>
            <div className='aboutShopGram rounded-xl overflow-hidden relative group'>
                <img src={galleryImg2} alt="" className='aboutShopGramImg group-hover:scale-110 duration-[3s]' />
            </div>
            <div className='aboutShopGram rounded-xl overflow-hidden relative group'>
                <img src={galleryImg3} alt="" className='aboutShopGramImg group-hover:scale-110 duration-[3s]' />
            </div>
            <div className='aboutShopGram rounded-xl overflow-hidden relative group'>
                <img src={galleryImg4} alt="" className='aboutShopGramImg group-hover:scale-110 duration-[3s]' />
            </div>
            <div className='aboutShopGram rounded-xl overflow-hidden relative group'>
                <img src={galleryImg5} alt="" className='aboutShopGramImg group-hover:scale-110 duration-[3s]' />
            </div>
        </div>
    </div>
    
  )
}

export default AboutShopGram