import React , {Component} from 'react';

import './Header.css';

import logo from './images/logo.png';

class Header extends Component {
    state = {

        navbarToggler : false,

        navlink : [
            {
                name : "Home" , src : "#/"
            },
            {
                name : "Pages" , src : "#/"
            },
            {
                name : "Portofolio" , src : "#/"
            },
            {
                name : "Blog" , src : "#/"
            },
            {
                name : "post formats" , src : "#/" 
            },
            {
                name : "joomla!" , src : "#/"
            },
            {
                name : "k2 blog" , src : "#/"
            },
            {
                name : "menu" , src : "#/"
            },
            {
                src : "#/"
            }
        ],

        angleDown : <i className="fa fa-angle-down" aria-hidden="true"></i>

    }

    navbarToggleHandler = () => {
        this.setState({
            navbarToggler : !this.state.navbarToggler
        })
    }

    render () {
        const toggleNavbarIcon = this.state.navbarToggler?"fas fa-times":"fa fa-bars";
         return (
            <div className="Header">
                <nav className="navbar navbar-expand-lg static-top">
                    <div className="container">
                        <a className="navbar-brand" href="./">
                            <img src={logo} alt="LT Restaurant" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={this.navbarToggleHandler}>
                            <span><i className={toggleNavbarIcon}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto text-uppercase">
                                <li className="nav-item active">
                                    <a className="nav-link" href={this.state.navlink[0].src}>{this.state.navlink[0].name}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[1].src}>{this.state.navlink[1].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[2].src}>{this.state.navlink[2].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[3].src}>{this.state.navlink[3].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[4].src}>{this.state.navlink[4].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[5].src}>{this.state.navlink[5].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[6].src}>{this.state.navlink[6].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={this.state.navlink[7].src}>{this.state.navlink[7].name}&nbsp;{this.state.angleDown}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/"><i className = "fa fa-bars"></i></a>              
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;