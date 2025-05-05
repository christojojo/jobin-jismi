import React from 'react'
import Button from '../Button'

const Footer = () => {
  return (
    <footer className='bg-secondary'>
      <div className="container mx-auto">
        <div className='flex items-center justify-between w-full pt-[120px] pb-[63px]'>
          <h6 className='max-w-[567px] text-[56px] font-medium leading-1.2'>Ready to elevate your data quality?</h6>
          <div className='flex items-center gap-x-[32px]'>
            <Button variant='primary'>Contact Us</Button>
            <Button>Book A Demo</Button>
          </div>

        </div>

      </div>
      <div className='max-w-[1296px] mx-auto'>

      </div>
    </footer>
  )
}

export default Footer