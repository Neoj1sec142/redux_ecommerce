const stateData = require('./stateData.json')

const [location, setLocation] = useState({
    state: '',
    city: '',
    address: '',
    zip: null
  })
const {state, city, address, zip} = location;
const onLocChange = e => setLocation({...location, [e.target.name]: e.target.value})
formData.location = getLocation(location)


<div className='form-group m-3'>
              <select name="state" onChange={e=>onLocChange(e)}>
                {stateData.map((item, index) => (
                <option key={index}>{item}</option>))}
              </select>
            </div>
            <div className='form-group m-3'>
              <input className='form-control'
                placeholder='City*'
                maxLength={30}
                name='city'
                type='city'
                value={city}
                onChange={e=>onLocChange(e)}
                required />
            </div>
            <div className='form-group m-3'>
              <input className='form-control'
                placeholder='Address*'
                maxLength={125}
                name='address'
                type='address'
                value={address}
                onChange={e=>onLocChange(e)}
                required />
            </div>
            <div className='form-group m-3'>
              <input className='form-control'
                placeholder='Zipcode*'
                maxLength={10}
                name='zip'
                type='number'
                value={zip}
                onChange={e=>onLocChange(e)}
                required />
            </div>