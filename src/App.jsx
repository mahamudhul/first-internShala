// import "./styles.css";
import React from "react";
import './App.css'
import img from '../src/assets/butterfly (1).png'
import avature from '../src/assets/illustration-user-avatar-icon_53876-5907.avif'
import { BsSearch } from 'react-icons/bs';
import { BsCardList } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { FiLogOut } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";





function App() {

  const data = [
    {
      name: "20",
      'Employer: K73,500': 20,
      "Employer: K52,500": 20,
      "Employer: K244,500": 30
    },
    {
      name: "25",
      'Employer: K73,500': 30,
      "Employer: K52,500": 30,
      "Employer: K244,500": 40
    },
    {
      name: "30",
      'Employer: K73,500': 40,
      "Employer: K52,500": 40,
      "Employer: K244,500": 40
    },
    {
      name: "35",
      'Employer: K73,500': 60,
      "Employer: K52,500": 60,
      "Employer: K244,500": 60
    },
    {
      name: "40",
      'Employer: K73,500': 70,
      "Employer: K52,500": 70,
      "Employer: K244,500": 70
    },
    {
      name: "60",
      'Employer: K73,500': 80,
      "Employer: K52,500": 80,
      "Employer: K244,500": 80
    },
    {
      name: "65",
      'Employer: K73,500': 90,
      "Employer: K52,500": 90,
      "Employer: K244,500": 90
    }
  ];


  return (
    <>
      <nav className='absolute top-0 bottom-0 left-0 p-2 h-full w-12 bg-slate-500'>
        <ul>
          <li>
            <a href="#">
              <img className='h-8' src={img} alt="" />
            </a>
          </li>
          <li><a href="#"><BsSearch className='text-2xl mt-3'></BsSearch></a></li>

          <div className='absolute top-32 sm:bottom-0 '>
            <li className=''><a href="#"><BiHome className='text-2xl mt-3'></BiHome></a></li>
            <li><a href="#"><FaRegNewspaper className='text-2xl mt-3'></FaRegNewspaper></a></li>
            <li><a href="#"><BsCardList className='text-2xl mt-3'></BsCardList></a></li>
            <li><a href="#"><BsPerson className='text-2xl mt-3'></BsPerson></a></li>
          </div>

          <div className='absolute bottom-5'>
            <li className='mb-3'><a href="#"><GrNotification className='text-2xl'></GrNotification></a></li>
            <li ><a href="#"><FiLogOut className='text-2xl'></FiLogOut></a></li>
          </div>
        </ul>
      </nav>

      {/* <nav className='md:hidden lg:hidden '>
        <div className='flex  fixed left-16 bottom-10 gap-8 bg-slate-400 p-2'>
         <a href="#"><BiHome className='text-2xl mt-3'></BiHome></a>
          <a href="#"><FaRegNewspaper className='text-2xl mt-3'></FaRegNewspaper></a>
         <a href="#"><BsCardList className='text-2xl mt-3'></BsCardList></a>
          <a href="#"><BsPerson className='text-2xl mt-3'></BsPerson></a>
         <a href="#"><BsSearch className='text-2xl mt-3'></BsSearch></a>
        </div>
      </nav> */}

      {/* <h1 className='text-2xl text-red-600'>helooo world</h1> */}

      <section className='grid lg:grid-cols-10 sm:grid-cols-1 ms-14'>

        {/* profile */}
        <section className='col-span-3'>
          <div className='flex'>
            <img className='h-16 rounded-lg' src={avature} alt="" />
            <div>
              <p className='text-xl font-bold'>Hi, Mike</p>
              <p>welcome back</p>
            </div>
          </div>

          <div className='mt-5'>
            <h2>Today</h2>

            <p className='text-3xl font-bold mt-4'>$19,882</p>
            <small className='text-gray-400'>Account Balance</small>

            <p className='text-xl font-bold mt-4'>$4,000</p>
            <small className='text-gray-400'>Year-to-date Contributions</small>

            <p className='text-xl font-bold mt-4'>$1,000</p>
            <small className='text-gray-400'>Total Interest</small>

          </div>
          <button className='bg-blue-800 px-4 py-2 mt-5 text-xl rounded-lg'>I want to</button>

          <p className='text-2xl font-bold mt-8 mb-4'>Recent Transactions</p>
          <div className='my-3'>
            <small className='text-gray-400'>2020-08-07</small>
            <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
          </div>

          <hr />

          <div className='my-3'>
            <small className='text-gray-400'>2020-08-07</small>
            <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
          </div>

          <hr />
          <div className='my-3'>
            <small className='text-gray-400'>2020-08-07</small>
            <p className='font-bold'>Withdrawal Transfer to Bank-XXX11</p>
          </div>
        </section>



        {/* income */}
        <section className='col-span-4 mx-7 mt-5'>
          <div>
            <h2 className='text-blue-600 font-bold'>Retirement Income</h2>
            <p className='text-xl font-bold'>Starting Year 2056</p>
          </div>

          <div className='mt-10 flex justify-between'>
            <div>
              <p className='text-3xl font-bold'>$300,000</p>
              <p className='text-gray-400 mb-3'>My Goal</p>
              <hr />
            </div>
            <div>
              <p className='text-3xl font-bold'>$300,000</p>
              <p className='text-gray-400 mb-3'>My Goal</p>
              <hr />
            </div>
            <div>
              <p className='text-3xl font-bold'>$300,000</p>
              <p className='text-gray-400 mb-3'>My Goal</p>
              <hr />
            </div>
          </div>

          {/* Chart */}
          <div className='mt-16'>
            <p className='text-xl font-bold'>Contributions Overtime</p>
            <p className="bg-blue-700"></p>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Bar dataKey="Employer: K73,500" stackId="a" fill="#8884d8" />
              <Bar dataKey="Employer: K52,500" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Employer: K244,500" stackId="a" fill="#82ca9" />
            </BarChart>
          </div>

          <div className="mt-7">
            <p className="font-bold text-xl">How do i compare to my peers</p>
            <small className="text-gray-400">These number represent current goal achivement</small>
          </div>

          <div className="grid grid-cols-2 mt-7">
            <div>
              <p className="mb-2"><span className="font-bold">Age</span>: Under 30</p>
              <hr />
              <p className="my-2"><span className="font-bold">Salary</span>: k20-k30</p>
              <hr />
              <p className="mt-2"><span className="font-bold">Gender</span>: Male</p>
            </div>

            <div className="flex">
              <div>
                <div className="radial-progress  text-success border-4 " style={{ "--value": 78 }}> <span className="text-black font-bold">78%</span></div>
                <p className="text-center font-bold">Avarege</p>
              </div>
              <div>
                <div className="radial-progress  text-success border-4 " style={{ "--value": 95 }}> <span className="text-black font-bold">95%</span></div>
                <p className="text-center font-bold">Top</p>
              </div>
              <div>
                <div className="radial-progress  text-success border-4 " style={{ "--value": 59 }}> <span className="text-black font-bold">59%</span></div>
                <p className="text-center font-bold">Me</p>
              </div>

            </div>
          </div>
        </section>



        {/* strategy */}
        <section className='col-span-3 mt-10 ms-10'>
          <div className="w-64
           bg-slate-400 bg-opacity-50 p-5 rounded-lg">
            <p className="text-3xl font-bold mb-10">Retirement Strategy</p>

            <p className="text-xl font-bold">Employee Contribution</p>
            <div className="flex gap-4 mt-5 mb-7">
              <input type="range" min={0} max="100" value="40" className="range range-secondary w-44" />
              <p className="font-bold">12%</p>
            </div>

            <p className="text-xl font-bold">Retirement Age</p>
            <div className="flex gap-4 my-5">
              <input type="range" min={0} max="100" value="80" className="range range-secondary w-44" />
              <p className="font-bold">84%</p>
            </div>
            <hr />

            <div className="flex gap-3 mt-3">
              <p className="text-xl font-bold">Employer Contribution</p>
              <p className="font-bold">8.4%</p>
            </div>

            <div className="flex gap-3 mt-3">
              <p className="text-xl font-bold">Interest Rate</p>
              <p className="font-bold">5%</p>
            </div>

            <button className="btn btn-primary w-full my-10">Update</button>

            <p className="text-center"><a href="#" className=" text-blue-600 font-bold">View Help Docs ></a></p>
          </div>

          <div className="mt-5 border-l-4 border-black ps-3">
            <p>Are you considering a <br />  <span className="font-bold">Housing Advice</span></p>
            <p className="text-gray-400">Limited time reduce interest</p>
            <p className="text-blue-500 font-bold"><a href="#">Learn more > </a></p>
          </div>
        </section>
      </section>
    </>
  )
}


export default App
