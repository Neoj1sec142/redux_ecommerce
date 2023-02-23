import React, { useEffect, useState } from 'react'
import {delay, searchByName, filterByCategory } from '../utils/utils'
import {load_browse, handle_page} from '../store/actions/product'
import { add_to_cart, load_cart } from '../store/actions/auth'
import { connect } from 'react-redux'


const BrowsePage = ({
  load_browse, handle_page, add_to_cart, 
  products, previous, next
}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState({
    filter: '',
    query: ''
  })
  const {filter, query} = search;
  const fetchData = async (opt="") => {
    /*  P - Previous | D - Default | N - Next */
    switch(opt){
      case "P":
        handle_page("P", previous)
        await delay(750)
        setLoading(false)
        break;
      case "N":
        handle_page("N", next)
        await delay(750)
        setLoading(false)
        break;
      default:
        load_browse()
        await delay(750)
        setLoading(false)
        break;
    }
    
  }
  console.log(products)
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
  const add = async e => {
    const item = e;
    add_to_cart(item, 1)
    await delay(100)
    load_cart()
  }
  
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
            {(data.length >= 1) ? data.map((item, index) => (
              <div class="col-md-4" key={index}>
                <div class="card mb-2 mt-2 box-shadow">
                    <img class="card-img-top" src={item.image} width="100%" height="225" alt="Card cap"/>
                    <div class="card-body">
                        <p class="card-text"><strong>{item.name}</strong></p>
                        <p class="card-text">Price: ${item.price}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href={`/product/${item.id}`} type="button" class="btn btn-sm btn-outline-secondary">View</a>
                                <button onClick={()=>add(item)} type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                            </div>
                            <small class="text-muted">Reviews: {item.review_count} Stars: {item.avg_stars}</small>
                        </div>
                    </div>
                </div>
              </div>
            )): (products && products.length >= 1 ? products.map((item, index) => (
              <div class="col-md-4" key={index}>
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src={item.image} width="100%" height="225" alt="Card cap"/>
                    <div class="card-body">
                        <p class="card-text"><strong>{item.name}</strong></p>
                        <p class="card-text">Price: ${item.price}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href={`/product/${item.id}`} type="button" class="btn btn-sm btn-outline-secondary">View</a>
                                <button onClick={()=>add(item)} type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                            </div>
                            <small class="text-muted">Reviews: {item.review_count} Stars: {item.avg_stars}</small>
                        </div>
                    </div>
                </div>
              </div>)): <li>No Items</li>)}
          </div>
        </div>
        <div className='d-flex justify-content-evenly mb-5'>
          <button className='btn btn-sm btn-outline-secondary w-25' onClick={()=>fetchData("P")}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
          <button className='btn btn-sm btn-outline-secondary w-25' onClick={()=>fetchData("N")}><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
    )
  }else{ return( <div>Loading....</div> ) }
}

const mapStateToProps = state => ({
  products: state.product.products,
  previous: state.product.previous,
  next: state.product.next
})

export default connect(mapStateToProps, {load_browse, handle_page, add_to_cart})(BrowsePage)