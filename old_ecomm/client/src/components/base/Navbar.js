import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import Alert from '../../utils/Alert'

const Navbar = ({isAuthenticated}) => {

    let authBar;
    if(isAuthenticated){
        authBar = (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Ecommerce</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">Profile</a>
                                </li>
                                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">Action</a></li>
                                    <li><a className="dropdown-item" href="#!">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                </ul>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/logout" tabIndex="-1">Logout</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <li className="nav-item">
                                <input type='radio' className='form-radio p-2 me-1' />
                            </li>
                        </div>
                    </div>
                </nav>
                <Alert />
            </Fragment>
        )
    }
    const publicBar = (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Ecommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Login / Register</a>
                        </li>
                        <li className="nav-item">
                            <input type='radio' className='form-radio p-2 me-1' />
                        </li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Action</a></li>
                            <li><a className="dropdown-item" href="#!">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#!">Something else here</a></li>
                        </ul>
                        </li> */}
                        {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#!" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
            <Alert />
        </Fragment>
    )

    return (
        <>{isAuthenticated ? authBar : publicBar}</>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(Navbar)