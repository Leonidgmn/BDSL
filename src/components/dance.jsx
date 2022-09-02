import React from 'react';
import {danceData} from '../data/danceData'

const Dance = () => {

    return (
        <section id='dance'>
            <div className="content">
                <h2>В нашій школі Ви можете опанувати саме такі танці:</h2>
                <div className="dance-list">
                    {danceData.map(dances => {
                        return (
                            <div className='dance-items'>
                                <h3>{dances.dance}</h3>
                                <h4>{dances.title}</h4>
                                <div className='dance-inside-item'>
                                    <div><img src={dances.img} alt=""/></div>

                                    <p>{dances.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dance;