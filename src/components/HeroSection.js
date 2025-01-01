import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-[url('/lines-bg.png')] bg-contain bg-no-repeat bg-center h-screen w-full">
      <div className="grid grid-cols-2 grid-rows-1 gap-5 container mx-auto">
        <div className='bg-red-500'>
            1
        </div>
        <div className='bg-secondary'>2</div>
      </div>
    </section>
  );
}

export default HeroSection
