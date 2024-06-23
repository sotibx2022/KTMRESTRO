"use client"
import Link from 'next/link'

import '../restaurentHeader/restaurantheader.css';
const CustomerHeader = () => {



    return (
        <div className='menu_wrapper'>
            <div className='container flex_item_between'>
                <div className='logoarea'>
                    <h1>KTM Food Delivery </h1>
                </div>
                <div className='menuarea '>
                    <ul className='flex_item_center'  >
                        <li className='list_item'><Link href="#">Home</Link></li>
                        <li className='list_item'><Link href="#">Restaurants</Link></li>
                        <li className='list_item'><Link href="#">Locations</Link></li>
                        <li className='list_item'><Link href="#">Foods</Link></li>
                        <li className='list_item'><Link href="#">SignIn</Link></li>
                        <li className='list_item'><Link href="#">Register</Link></li>
                        <li className='list_item'><Link href="#">Cart (0)</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CustomerHeader