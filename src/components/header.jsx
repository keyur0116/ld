import React, { Component } from 'react';
import logo from '../assets/images/london-dairy-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-light bg-color pad-zero">
                    <div className="container css-tctv7l pad-t-xxs pad-b-xxs">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="CoolBrand" />
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                        <a href="#" className="nav-item nav-link active nav-item nav-link active text-uppercase">Our Story</a>
                        <a href="#" className="nav-item nav-link text-uppercase">Products</a>
                        <a href="#" className="nav-item nav-link text-uppercase">Recipes</a>
                        <a href="#" className="nav-item nav-link text-uppercase">Flavour Stories</a>
                        <a href="#" className="nav-item nav-link text-uppercase">Contact Us</a>
                        </div>
                        <div className="navbar-nav">
                        <div className="find-button">
                            <a href="#" className="nav-item nav-link text-uppercase">Find Us</a>
                        </div>
                        </div>
                        <div className="navbar-nav">
                        <ul className="more-icons">
                            <li><FontAwesomeIcon icon={faShareAlt} /></li>
                            <li><FontAwesomeIcon icon={faSearch} /></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }

}

export default Header;