import React, {useState} from "react";
import classes from "./schedule.css";
import {scheduleData, locations, locationAndDance} from "../../data/scheduleData";
import AddressItem from "./addressItem";
import DanceItem from "./danceItem";
import ScheduleItem from "./scheduleItem";

const Schedule = (props) => {


    const [activeAdress, setActiveAdress] = useState('Львів, Лемківська 15');

    const [activeDay, setActiveDay] = useState('ПОНЕДІЛОК');

    const filteredByAdresss = scheduleData.filter((obj) => activeAdress.includes(obj.adress));
    const newAllDanceArr = [...new Set(filteredByAdresss.map((a) => a.dance))];
    const sotrNewAllDanceArr = newAllDanceArr.sort();
    const [activeDance, setActiveDance] = useState(sotrNewAllDanceArr[0])


    let allDanceTime = filteredByAdresss.filter((obj) => activeDance.includes(obj.dance));


    let duplicateDay = allDanceTime.filter((obj) => activeDay.includes(obj.day));

    console.log('filteredByAdresss: ', filteredByAdresss);
    console.log('allDanceTime: ', allDanceTime);
    console.log('duplicateDay: ', duplicateDay);


    return (
        <>
            <section id="schedule">
                <div className="content">
                    <div className="select-address">
                        <h3 className="title-select">Виберіть зал для занять</h3>
                        <div className="address-items">
                            {locations.map((place, index) => (
                                <AddressItem
                                    sotrNewAllDanceArr={sotrNewAllDanceArr}
                                    setActiveAdress={setActiveAdress}
                                    locationAndDance={locationAndDance}
                                    setActiveDance={setActiveDance}
                                    place={place}
                                    key={index}
                                />
                            ))}
                            {/* <a href="#" className='address-item second'>
                                <span className='text-address-item'>Львів, Наукова 7а</span>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                            </a>
                            <a href="#" className='address-item third'>
                                <span className='text-address-item'>{props.newadressArr.data}</span>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="content">
                    <div className="select-dance">
                        <h3 className="title-select">Вибери категорію танців</h3>
                        <div className="select-dance-items">
                            <ul className="all-dance">
                                {sotrNewAllDanceArr.map((dance, index) => (
                                    <DanceItem
                                        activeDance={activeDance}
                                        setActiveDance={setActiveDance}
                                        key={index}
                                        dance={dance}
                                    />
                                ))}
                            </ul>
                            <ul className="all-dance">
                                <li className="select-dance-item">
                                    <span>ВСІ ТАНЦІ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="content-schedule">
                    <div className="schedule-background"></div>
                    <div className="schedule content">
                        <h2 className="schedule-title">{activeAdress}</h2>
                        {/* {duplicateDay.map((data, index) => {
                return (
                  <div>
                  <div>{ data.day }</div>
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
                          </div></div>
                
              )}
            )}         */}
                        {allDanceTime.map((data, index) => (
                            <ScheduleItem
                                duplicateDay={duplicateDay}
                                activeDay={activeDay}
                                data={data}
                                key={index}
                            />
                        ))}
                        {/* <div className="schedule-item">
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
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;
