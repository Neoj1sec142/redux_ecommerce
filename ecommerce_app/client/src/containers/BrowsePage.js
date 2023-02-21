import React, { useEffect, useState } from 'react'
import {delay, searchByName, filterByCategory } from '../utils/utils'
import {load_browse} from '../store/actions/product'
import { connect } from 'react-redux'
const BrowsePage = ({load_browse, products}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState({
    filter: '',
    query: ''
  })
  const {filter, query} = search;
  const fetchData = async () => {
    load_browse()
    await delay(750)
    setLoading(false)
  }
  
  useEffect(() => {if(loading) fetchData()},[])
  const onChange = e => setSearch({...search, [e.target.name]: e.target.value})
  const filterData = (searchObj) => {
    const { filter, query } = searchObj;
    if (filter) {
      setData(filterByCategory(products, filter));
    } else if (query) {
      setData(searchByName(products, query));
    } else {
      setData(products);
    }
  }
  const goBack = (e) => {
    e.preventDefault()
    setData([])
    setSearch({filter: '', query: ''})
  }

  console.log()
  console.log(data, "DTA")
  if(!loading){
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5'>
          <div className='row w-75 shadow-sm'>
            <input className='form-control w-75'
              name='query'
              value={query}
              onChange={e=>onChange(e)}
              placeholder='Search by Name'/>
             {data.length === 0 ? <button className='btn btn-success w-25' onClick={()=>filterData(search)}>Search</button>
              : <button className='btn btn-danger w-25' onClick={e=>goBack(e)}>Back</button>}
            <select name="filter" onChange={e=>onChange(e)} className='form-control text-center mt-2'>
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
              {/* (filter === '' && search === '' && products && products.length >= 1) */}
                {(data.length >= 1) ? data.map((item, index) => (
                <li key={index} className='list-group-item mt-1'>
                  {/* <img src={item.image} /> */}
                  <p><a href={`/product/${item.id}`}>{item.name} Price:{item.price} Reviews: {item.review_count}</a> Stars: {item.avg_stars}</p>
                </li>)): (products && products.length >= 1 ? products.map((item, index) => (
                <li key={index} className='list-group-item mt-1'>
                {/* <img src={item.image} /> */}
                <p><a href={`/product/${item.id}`}>{item.name} Price:{item.price} Reviews: {item.review_count}</a> Stars: {item.avg_stars}</p>
                </li>)): <li>No Items</li>)}
              </ul>
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  products: state.product.products
})

export default connect(mapStateToProps, {load_browse})(BrowsePage)