import React from 'react'
import CustomerHeader from './_components/customerHeader/CustomerHeader'
import Footer from './_components/footer/Footer'
import Banner from './_components/banner/Banner'

const HomePage = () => {
  return (
    <div>
      <CustomerHeader/>
      <Banner/>
      <h1>Home Page</h1>
      <Footer/>
    </div>
  )
}

export default HomePage