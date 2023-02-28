import React, { useState } from 'react'
import { connect } from 'react-redux';
import { delay, years, months } from '../../utils/utils';
import {upload_payment_method} from '../../store/actions/paymentMethod'

const NewPaymentMethod = ({upload_payment_method, current_user, setSelected}) => {
    const [formData, setFormData] = useState({
        card_owner: null,
        description: '',
        is_credit_card: false,
        cardholder_name: '',
        card_number: '',
        expiration_mon: '',
        expiration_year: '',
        cvv: ''
    })
    const {card_owner, description, 
        is_credit_card, cardholder_name, 
        card_number, expiration_mon, expiration_year, cvv} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    
    const onSubmit = async e => {
        e.preventDefault()
        let form = formData;
        form.card_owner = current_user.id;
        upload_payment_method(form);
        await delay(750)
        setSelected('')
    }
    return (
        <div className='conatiner-fluid'>
            <p className='fs-3 text-center p-1 mt-3'>New Payment Method</p>
            <form onSubmit={e=>onSubmit(e)}>
                <div className='d-flex justify-content-center mt-2 mb-2'>
                    <div className='row w-75 shadow-sm mt-2 mb-2 p-1'>
                        <div className='form-group'>
                            <input name='card_owner' hidden
                                value={card_owner} />
                        </div>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='#description'></label>
                            <select className='form-control' name='description' onChange={e=>onChange(e)} id='description'>
                                <option>--Select--</option>
                                <option>Mastercard</option>
                                <option>Visa</option>
                                <option>??</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='#is_credit_card'>Credit Card?</label>
                            <input className='form-radio' 
                                type='radio' name='is_active' id="is_credit_card"
                                value={is_credit_card} checked={is_credit_card}
                                onChange={is_credit_card=>setFormData({...formData, is_credit_card: !is_credit_card})} />
                        </div>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='#cardholder_name'>Cardholder's Name</label>
                            <input className='form-control' 
                                type='text' name='cardholder_name' 
                                placeholder='Name on Card' id='cardholder_name'
                                value={cardholder_name} required
                                onChange={e=>onChange(e)} />
                        </div>
                        <div className='form-group'>
                            
                            <label htmlFor="#card_number">Credit Card Number:</label>
                            <input id="card_number" 
                                type="tel" inputmode="numeric" 
                                pattern="[0-9\s]{13,19}" 
                                autocomplete="cc-number" 
                                maxlength="19" name='card_number' 
                                placeholder="xxxx xxxx xxxx xxxx"
                                value={card_number} required
                                onChange={e=>onChange(e)} />
                                
                        </div>
                        
                        <div className='d-flex justify-content-evenly'>
                            <div className='form-group w-25'>
                                <label className='form-label' htmlFor='#expMon'>Exp Month</label>
                                <select onChange={e=>onChange(e)} id='expMon' name='expiration_mon' className='form-control'>
                                    {months.map((item, index) => (
                                    <option key={index}>{item}</option>))}
                                </select>
                            </div>
                            <div className='form-group w-25'>
                                <label className='form-label' htmlFor='#expYr'>Exp Yr</label>
                                <select onChange={e=>onChange(e)} id='expYr' name='expiration_year' className='form-control'>
                                    {years.map((item, index) => (
                                    <option key={index}>{item}</option>))}
                                </select>
                            </div>
                        </div>
                        
                        
                        <div className='form-group mb-2'>
                            <label className='form-label' htmlFor='#cvv'>cvv</label>
                            <input className='form-control' 
                                type='number' name='cvv' 
                                placeholder='***' 
                                maxLength={3}
                                value={cvv} required
                                onChange={e=>onChange(e)} />
                        </div>
                        <div className='d-flex justify-content-evenly mt-1 mb-5'>
                            <button type='submit' className='btn btn-sm btn-success w-25 mt-1 mb-3'>Submit</button>
                            <button className='btn btn-sm btn-danger w-25 mt-1 mb-3'>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {upload_payment_method})(NewPaymentMethod);