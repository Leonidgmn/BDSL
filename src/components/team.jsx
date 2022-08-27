import React from 'react';
import { teamData } from '../data/teamData.js';

const Team = () => {
    return (
        <section id="team">
            <div className="content">
                <h2>Наша команда</h2>
                <div className="team-list">
                    {teamData.map((team) => (
                        <div className='team-item left' key={team.id}>
                            <div><img src={team.photo} alt="" /></div>
                            <div className="team-item-description">
                                <h3>{team.name}</h3>
                                <h4>{team.dance}</h4>
                                <p>{team.description}</p>
                                <span>{team.quote}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;