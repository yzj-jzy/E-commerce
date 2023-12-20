import React from 'react';
import './hero.styles.scss';

const hero = ()=>{
    return(
        <section className="hero is-large is-info hero-image">
        <div className="hero-body">
            <h1 className="hero-title">
                Bags reimagined for modern life.
            </h1>
            <div className='shop-now-btn'>
                <button className='button is-black'>
                    SHOP NOW
                </button>
            </div>
        </div>
        </section>
    )
}

export default hero;