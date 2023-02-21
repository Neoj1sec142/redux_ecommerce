import React, { useEffect, useState } from 'react'
import {delay} from '../utils/utils'
import { productData } from './dummy.js'

const BrowsePage = () => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    
    setData(productData)
    await delay(750)
    setLoading(false)
  }
  useEffect(() => {if(loading) fetchData()},[])

  console.log(data)
  if(!loading){
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='row w-75 shadow-sm'>
            <input className='form-control w-75'
              placeholder='Search by Name'/>
            <button className='btn btn-success w-25'>Search</button>
            <select className='form-control text-center mt-2'>
              <option>Select a Filter</option>
              <option>Electronics</option>
              <option>Media</option>
              <option>Games</option>
            </select>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <div className='row w-75 shadow-sm'>
              <ul className='list-group'>
                {data.map((item, index) => (
                <li key={index} className='list-group-item mt-1'>{item.name} {item.price} Reviews: {item.reviews}</li>))}
              </ul>
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading....</div> ) }
}

export default BrowsePage