"use client";
import React, { useEffect, useState } from 'react';
import CustomerHeader from './_components/customerHeader/CustomerHeader';
import Footer from './_components/footer/Footer';
import Banner from './_components/banner/Banner';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const router = useRouter()

  useEffect(() => {
    loadRestaurants();
    loadLocations();
  }, [location, restaurant]); // Ensure this dependency array to reload when location or restaurant changes

  const loadRestaurants = async () => {
    let url = `http://localhost:3000/api/customers`;

    if (location && location.length > 0) {
      url = `${url}?location=${location}`;
    } else if (restaurant && restaurant.length > 0) {
      url = `${url}?name=${restaurant}`;
    }

    try {
      const response = await fetch(url);
      const result = await response.json();
      setRestaurants(result);
    } catch (error) {
      console.error("Failed to load restaurants:", error);
    }
  };

  const loadLocations = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/customers/locations");
      const result = await response.json();
      setLocations(result.uniqueCities);
    } catch (error) {
      console.error("Failed to load locations:", error);
    }
  };

  const handleSetLocation = (location) => {
    setLocation(location);
    setShowLocations(false);
  };

  return (
    <div>
      <CustomerHeader />
      <div className='banner_Wrapper'>
        <div className='search_inputs container'>
          <div className='form_field'>
            <input
              type='text'
              placeholder='Select the Cities'
              value={location}
              onClick={() => setShowLocations(true)}
              readOnly
            />
            {showLocations && (
              <ul className='locations_wrapper'>
                {locations.map((location, index) => (
                  <li key={index} onClick={() => handleSetLocation(location)}>
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className='form_field'>
            <input
              type='text'
              placeholder='Enter Food or Restaurant'
              value={restaurant}
              onChange={(e) => setRestaurant(e.target.value)}
            />
          </div>
          <button onClick={loadRestaurants}>Search</button>
        </div>
      </div>
      <div className='details'>
        {restaurants.map((restaurant, index) => (
          <div className='restaurant_Wrapper' key={index} onClick={()=>router.push(`/explore/${restaurant.restaurantName}/?id=${restaurant._id}`)}>
            <p><span className='label'>City:</span> {restaurant.city}</p>
            <p><span className='label'>Contact Number:</span> {restaurant.contactNumber}</p>
            <p><span className='label'>Email:</span> {restaurant.email}</p>
            <p><span className='label'>Full Address:</span> {restaurant.address}</p>
            <p><span className='label'>Restaurant Name:</span> {restaurant.restaurantName}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
