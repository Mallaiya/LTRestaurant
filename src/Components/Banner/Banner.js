import React , {Component} from 'react';

import './Banner.css';


class Banner extends Component {
    render () {
        return (
            <div className="Banner">
                <div className= "hero-image">
                    <div className="container">
                        <div className="banner-content">
                            <h1>Are you hungry?</h1>
                            <h2>Don't Wait!!!</h2>
                            <h2>Let start to order food now!</h2>
                            <button className="text-uppercase">Check out menu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;