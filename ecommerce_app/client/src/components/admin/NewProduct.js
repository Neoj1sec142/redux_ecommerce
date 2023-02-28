import React, { useState } from 'react'
import { delay } from '../../utils/utils';
import { connect } from 'react-redux';
import {upload_product} from '../../store/actions/product'
import { useNavigate } from 'react-router-dom';

const NewProduct = ({ upload_product }) => {
    const navigate = useNavigate()
    const [imageFile, setImageFile] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0.00,
        image: null,
        category: ''
    })
    const {name, description, price, image, category} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onImage = e => setImageFile(e.target.files[0])
    const cancel = e => setFormData({name: '', description: '', price: 0.00, image: null, category: ''})
    const onSubmit = async e => {
        e.preventDefault()
        let form = formData;
        form.image = imageFile;
        upload_product(form);
        await delay(750)
        if(window.confirm("Add another product?")){
            cancel()
        }else{
            navigate('/admin-dash')
        }
    }
    
    return (
        <div className='container-fluid'>
            <form onSubmit={e=>onSubmit(e)}>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='row w-75 shadow-sm mt-2 mb-2'>
                        <div className='form-group'>
                            <label className='form-label'>Name: </label>
                            <input className='form-control' type='text'
                                name='name' value={name} onChange={()=>{}} />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'></label>
                            <input className='form-control' type='text'
                                name='description' value={description} onChange={()=>{}} />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Image:</label>
                            <input className='form-control' type='file'
                                name='image' value={image} onChange={e=>onImage(e)} />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Price: </label>
                            <input className='form-control' type='number'
                                name='price' value={price} onChange={()=>{}} />
                        </div>
                        <div className='form-group mt-2 mb-2'>
                            <select onChange={e=>onChange(e)} className='form-control' name='category'>
                                <option>--Select Category--</option>
                                <option>Electronics</option>
                                <option>Media</option>
                                <option>Games</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly mb-5'>
                    <button type='submit' className='btn btn-sm btn-success w-25'>Submit</button>
                    <button onClick={e=>cancel(e)} className='btn btn-sm btn-danger w-25'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, {upload_product})(NewProduct);