import React from 'react';
import bachata from "../img/bachata.jpg";
import lsalsa from "../img/salsaLatina.jpg";
import ksalsa from "../img/salsaCubana.jpg";
import zuk from "../img/zuk.jpg";
import kizomba from "../img/kizomba.jpg";

import CarouselMainPage from './carouselMainPage.jsx';

const MainPage = () => {
    return (
        <div>

            <CarouselMainPage />

            <section id='dance'>
                <div className="content">
                    <div className="dance-list">
                        <div className='dance-items'>
                            <h3>БАЧАТА</h3>
                            <h4>коротка цитата про танець</h4>
                            <div className='dance-inside-item'>
                                <div><img src={bachata} alt="" /></div>

                                <p>
                                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                                    asperiores repellat?
                                    At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
                                    voluptatum deleniti
                                    atque corrupti, quos dolores et quas molestias excepturi sint, velit esse cillum dolore eu
                                    fugiat nulla pariatur.
                                    Temporibus autem quibusdam et aut
                                    officiis debitis aut rerum necessitatibus saepe eveniet, consectetur adipiscing elit,
                                    qui </p>
                            </div>
                        </div>
                        <div className='dance-items'>

                            <h3>ЛІНІЙНА САЛЬСА</h3>
                            <h4>коротка цитата про танець</h4>
                            <div className='dance-inside-item'>
                                <div><img src={lsalsa} alt="" /></div>


                                <p>Ut enim ad minima veniam, consectetur adipiscing elit, quae ab illo inventore veritatis
                                    et quasi architecto beatae vitae dicta sunt, explicabo?

                                    Ut enim ad minima veniam, nam libero tempore,
                                    cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime
                                    placeat,</p>
                            </div>
                        </div>
                        <div className='dance-items'>

                            <h3>КУБИНСЬКА САЛЬСА</h3>
                            <h4>коротка цитата про танець</h4>
                            <div className='dance-inside-item'>
                                <div><img src={ksalsa} alt="" /></div>


                                <p>nulla pariatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                    saepe eveniet,
                                    consectetur adipiscing elit, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                                    velit,
                                    іsed quia non numquam eius modi tempora incidunt,
                                    ut labore et dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam...</p>
                            </div>
                        </div>
                        <div className='dance-items'>

                            <h3>ЗУК</h3>
                            <h4>коротка цитата про танець</h4>
                            <div className='dance-inside-item'>
                                <div><img src={zuk} alt="" /></div>


                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus, n
                                    am libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit,
                                    quo minus id, quod maxime placeat, nisi ut aliquid ex ea commodi consequatur!
                                    Et harum quidem</p>
                            </div>
                        </div>
                        <div className='dance-items'>

                            <h3>КІЗОМБА</h3>
                            <h4>коротка цитата про танець</h4>
                            <div className='dance-inside-item'>
                                <div><img src={kizomba} alt="" /></div>


                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus, n
                                    am libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit,
                                    quo minus id, quod maxime placeat, nisi ut aliquid ex ea commodi consequatur!
                                    Et harum quidem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;