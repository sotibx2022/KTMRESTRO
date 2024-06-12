import Link from 'next/link'
import React from 'react'
import '../restaurentHeader/restaurantheader.css'

const RestaurantHeader = () => {
  return (
    <div className=' menu_wrapper'>
      <div className='container flex_item_between'>
        <div className='logoarea'>
          <h1>KTM Food Delivery </h1>
        </div>
      <div className='menuarea '>
        <ul className='flex_item_center'  >
          <li className='list_item'><Link href="#">Home</Link></li>
          <li className='list_item'><Link href="#">Restaurants</Link></li>
          <li className='list_item'><Link href="#">Locations</Link></li>
          <li className='list_item'><Link href="#">About</Link></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default RestaurantHeader