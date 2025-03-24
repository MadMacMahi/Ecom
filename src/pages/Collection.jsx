import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
const Collection = () => {

  const { products } = useContext(ShopContext);

  return (
    <div className='felx flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
        
      {/* Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex-center cursor-pointer gap-2' >FILTERS</p>
      </div>

    </div>
  )
}

export default Collection