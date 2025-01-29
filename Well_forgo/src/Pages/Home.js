import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

   
    <div className='border-4 '>
     <Link to="/sign">
          <div className='bg-red-600 border-b-4  border-b-yellow-400  items-center text-white flex justify-between py-5' >
              <div className='pl-20'>
                <h1 className='text-2xl font-bold'>WELLS FARGO</h1>
              </div>
              <div className='flex items-center   pr-10' >
                <ul className='flex items-center justify-between px-32 gap-4'>
                  <li>ATMs/Locations</li>
                  <li> Help</li>
                  <li>About Us</li>
                  <li>Espanol</li>
                  <button className=' bg-white text-black px-4 py-2 rounded-full'>Sign On</button>
                </ul>
              </div>

         </div>
              <div className='flex gap-5 items-center list-none  py-4 bg-slate-100 ml-16 pl-4'>
                  <li className='border-b-4 border-b-red-600 font-medium'>Personal</li>
                  <li>Investing & Wealth Management</li>
                  <li>Small Business</li>
                  <li>Commercial Banking</li>
                  <li>Corporate & Investment Banking</li>
              </div>
              <div className='flex list-none items-center py-4 pl-20 gap-2'>
                <li>Personal </li>
                <li>&gt;</li>
                <li>Mobile and online banking with Wells Fargo</li>
                <li>&gt;</li>
                <li className='text-black font-medium'> The Wells Fargo Mobile® app</li>
              </div>
              <div className='pl-20'>
                <h1 className='text-3xl'>The Wells Fargo Mobile® app</h1>
              </div>
              <div className='flex justify-center items-center py-10 bg-orange-50'>
                <div className='flex justify-center flex-col items-center gap-5  '>
                  <h1 className='text-4xl  '>Three ways to get the app</h1>
                  <h2 className='text-2xl'>Send money, pay your bills, deposit a check1 — all without missing a beat.</h2>
                </div>
                
              </div>
     </Link>
    </div>


    </div>
  );
};

export default Home;
