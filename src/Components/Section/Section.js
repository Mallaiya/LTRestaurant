import React , {Component} from 'react';

import './Section.css';

import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';

class Section extends Component {
    render () {
        return (
            <div className="Section">
                <div className="section-content">
                    <div className="container">
                        <div className="section-head">
                            <h2 className="text-uppercase text-center">favorite food</h2>
                        </div>
                        <div className="food-list">
                            <div className="container">
                                <div className="row list-row">
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <img src={food1} alt="food-1"/>
                                            <p className= "amount">
                                                <span>30,00 &euro;</span> each
                                            </p>
                                            <p className="type">
                                                Dish 6
                                            </p>
                                            <button className="text-uppercase">add to card</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <img src={food2} alt="food-1"/>
                                            <p className= "amount">
                                                <span>37,00 &euro;</span> each
                                            </p>
                                            <p className="type">
                                                Food 6
                                            </p>
                                            <button className="text-uppercase">add to card</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box">
                                            <img src={food3} alt="food-1"/>
                                            <p className= "amount">
                                                <span>58,00 &euro;</span> each
                                            </p>
                                            <p className="type">
                                                Special 6
                                            </p>
                                            <button className="text-uppercase">add to card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Section;