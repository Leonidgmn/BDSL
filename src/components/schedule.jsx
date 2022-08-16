import React from 'react';
import classes from './schedule.css'

const Schedule = () => {
    return (
        <>
            <section id="schedule">
                <div className="content">
                    <div className="select-address">
                        <h3 className='title-select'>Виберіть зал для занять</h3>
                        <div className="address-items">
                            <a href="#" className='address-item active first'>
                                <span className='text-address-item'>Львів, Лемківська 15</span>
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>
                            </a>
                            <a href="#" className='address-item second'>
                                <span className='text-address-item'>Львів, Наукова 7а</span>
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>
                            </a>
                            <a href="#" className='address-item third'>
                                <span className='text-address-item'>Львів, Театральна 15</span>
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="content">
                    <div className='select-dance'>
                        <h3 className='title-select'>Вибери категорію танців</h3>
                        <div className='select-dance-items'>
                            <ul className='all-dance'>
                                <li className="select-dance-item">
                                    <span>ZOUK</span>
                                </li>
                                <li className="select-dance-item">
                                    <span>BACHATA</span>
                                </li>
                                <li className="select-dance-item">
                                    <span>YOGA</span>
                                </li>
                                <li className="select-dance-item">
                                    <span>ZUMBA</span>
                                </li>
                                <li className="select-dance-item">
                                    <span>KIZOMBA</span>
                                </li>
                                <li className="select-dance-item">
                                    <span>SALSA</span>
                                </li>
                            </ul>
                            <ul className='all-dance'>
                                <li className="select-dance-item"><span>ВСІ ТАНЦІ</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="content-schedule">
                    <div className="schedule-background"></div>
                    <div className='schedule content'>
                        <h2 className="schedule-title">Львів, Лемківська 15</h2>
                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>ZOUK</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>BACHATA</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>YOGA</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>ZUMBA</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>KIZOMBA</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                        <div className="schedule-item">
                            <div className="hour-day-schedule">
                                <p className="day-schedule">CEРЕДА</p>
                                <p className="hour-schedule">19:00</p>
                                <p className="day-schedule">СУБОТА</p>
                                <p className="hour-schedule">21:00</p>
                            </div>
                            <div className="photo-schedule"></div>
                            <div className="name-schedule">
                                <h3 className='name-dance-schedule'>SALSA</h3>
                                <p className='teacher-schedule'>Олег & Оля</p>
                                <p className='number-room-schedule'>Зал №1</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    );
};

export default Schedule;