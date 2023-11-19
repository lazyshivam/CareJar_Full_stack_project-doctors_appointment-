import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useGetDoctorsCategoryQuery } from '../services/Faker_Services';

const Home=({handleCategoryClick})=> {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
 
  
  // fecthing categories of all doctors here using useEffect hook

  // useEffect(() => {
  //   // Fetch categories
  //   axios.get('http://localhost:8000/categories')
  //     .then(response => {
  //       setCategories(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching categories:', error);
  //     });
  // }, []);

  // fecthing categories of all doctors here using reduc queries

  const {data,error ,isLoading} =useGetDoctorsCategoryQuery();

  useEffect(() => {
    
   setCategories(data);
    
  }, [data,error,isLoading])

  //  if data is still loading then we return here laoding..
  
   if(isLoading) return <div className="text-center text-2xl ">Loading...</div>

   

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Doctor Categories</h1>
    <div className="flex max-lg:flex-col max-lg:space-y-4 ">
      {categories?.map(category => (
        <Link
          key={category.name}
          to={`/doctors/${category.name}`}
          className={`p-4 shadow-md m-2 transition delay-0 ease-out hover:scale-105 hover:shadow-slate-300 border-gray-300 ${selectedCategory === category.name ? 'bg-blue-200' : ''}`}
          
       >
          <img src={category.image} alt={category.name} className="w-16 h-16 rounded-full mb-2" />
          <p className="font-bold">{category.name}</p>
          <p className="text-sm text-gray-600">{category.description}</p>
        </Link>
      ))}
    </div>

  </div>
  );
}

export default Home;
