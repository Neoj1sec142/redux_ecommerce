import React, {useState, useEffect, Fragment} from 'react'
import Login from '../components/base/Login'
import Register from '../components/base/Register'
const Authpage = () => {
    const [page, setPage] = useState('')
    const [inEffect, setInEffect] = useState(null)
    useEffect(() => {
        switch(page){
            case 'login':
                setInEffect(<Login setPage={setPage} />)
                break;
            case 'signup':
                setInEffect(<Register setPage={setPage} />)
                break;
            default:
                setInEffect(null)
                break;
        }
    },[page])
    const onClick = e => setPage(e.target.name)
    
    if(!inEffect){
        return (
            <div className='container-fluid'>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border p-2 bg-light'>
                        <p className="fs-2 text-center mt-2">ReduxCommerce</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='row w-75 shadow-sm border p-2 bg-light'>
                        <div className='col w-50'>
                            <button name='login' onClick={e=>onClick(e)} className='btn btn-dark m-1 w-100'>Login</button></div>
                        <div className='col w-50'>
                            <button name='signup' onClick={e=>onClick(e)} className='btn btn-outline-dark m-1 w-100'>Register</button></div>
                    </div>
                </div>
            </div>
        )
    }else{ return (<Fragment>{inEffect}</Fragment>)}
}

export default Authpage