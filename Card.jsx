import React from 'react'

const Card = (i) => {
  return (
    <div>
         <div className='card w-80 h-114  rounded-lg bg-white '>
        <div className='top p-1.5 relative '>
          
          <img className='w-80 h-65 object-cover rounded-lg  ' src={i.imges}
           alt="" />
         
          <div className='p-1.5 font-sans absolute top-4 left-4 flex  text-xs gap-3 text-white font-light backdrop-blur-[9px] rounded-full'>
            <h3>{i.cate}</h3> 
          </div>
          <div className=''>
              <i class="absolute top-4  text-black right-4 text-xs  ri-star-fill"> {i.rate}</i>
            </div>
        </div>
        <div className='center relative'>
          <div className='one  '>
            <h2 className='text-xl  pl-3  font-mono ...'>{i.title}</h2>
            <button className='top-1 px-2  text-sm right-4 absolute  border border-solid rounded-full'>{i.tag}</button>
          </div>
          <div className='two'>
            <h3 className='pl-3 text-xs text-gray-400 mt-2 '>{i.date}.{i.host}</h3>
            <h3 className='pl-3 text-xs text-gray-400 mt-2 '>{i.description}</h3>
          </div>
          </div>
        <div className='buttom relative'>
          <h2 className='pl-3 mt-3 font-bold'>{i.price}/day</h2>
          <button className=' bg-black  absolute right-4 top-1 w-30 h-10 rounded-full  border-2 border-solid  gap-2 text-white'>book now.  <i class="rounded-full text-xl text-black bg-white ri-arrow-right-up-line"></i></button>

          </div>  
        </div>
      
    </div>
  )
}

export default Card
