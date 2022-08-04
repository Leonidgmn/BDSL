import React from 'react';
import kizombaTeam from "../img/Ihor&Olesia1.jpg";
import bachateTeam from "../img/Halia&Taras.jpg";
import lSalsaTeam from "../img/Misha&Zenia.jpg";
import kSalsaTeam from "../img/Myko&Zenia.jpg";

const Team = () => {
    return (
        <section id="team">
            <div className="content">
                <h2>Наша команда</h2>
                <div className="team-list">
                    <div className='team-item left'>
                        <div><img src={kizombaTeam} alt=""/></div>

                        <div className="team-item-description">
                            <h3>Інінціали</h3>
                            <h4>напрямок танцю</h4>
                            <p>якийсь опис авіпдваол повалд влді лділд овалдіпо лділдвао лдвіалдвіо аівадалдіполд пілдоп
                                і валд</p>
                            <span>якась розумна цитата викладача</span>
                        </div>
                    </div>
                    <div className='team-item right'>
                        <div><img src={bachateTeam} alt=""/></div>

                        <div className="team-item-description">
                            <h3>Інінціали</h3>
                            <h4>напрямок танцю</h4>
                            <p>якийсь опис авіпдваол повалд влді лділд овалдіпо лділдвао лдвіалдвіо аівадл идсчмо
                                лдвіадлолдчивіа іваолдіоімибьлдаовлтчсмбь тлдваолдолдваіо лд павлопавлді павлпо вадлдо
                                лдіполд пілдоп і валд</p>
                            <span>якась розумна цитата викладача</span>
                        </div>

                    </div>
                    <div className='team-item left'>
                        <div><img src={lSalsaTeam} alt=""/></div>

                        <div className="team-item-description">
                            <h3>Інінціали</h3>
                            <h4>напрямок танцю</h4>
                            <p>якийсь опис авіпдваол повалд влді лділд овалдіпо лділдвао дваіо лд павлопавлді павлпо
                                вадлдо лділда оплд овлдіао лавіолдп валдіполд пілдоп і валд</p>
                            <span>якась розумна цитата викладача</span>
                        </div>
                    </div>
                    <div className='team-item right'>
                        <div><img src={kSalsaTeam} alt=""/></div>

                        <div className="team-item-description">
                            <h3>Інінціали</h3>
                            <h4>напрямок танцю</h4>
                            <p>якийсь опис авіпдваол повалд влді лділд овалдіпо лділдвао лдвіалдвіо аівадл идсчмо
                                лдвіадлолдчивіа іваолдіоімибьлдаовлтчсмбь тлдваолдолдваіо лд павлопавлді павлпо вадлдо
                                лділда оплд овлдіао лавіолдп валдіполд пілдоп і валд</p>
                            <span> якась розумна цитата викладача</span>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;