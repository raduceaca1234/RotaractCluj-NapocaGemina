import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const featurebox = () => (
  <div className='row'>
    <div className="col-lg-12 ">
      <div className="feature-box f-boxed style-3" style={{ marginTop: 0, marginBottom: 100, height: '100%' }}>
        <div className="text">
          <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
            <h4 className="" style={{ marginBottom: 30}}>
              Ce reprezinta Rotaract Cluj-Napoca Gemina?</h4>
          </Reveal>
          <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
            <p className="">În primul rând o familie, clubul nostru s-a format în anul 2020 dintr-un grup de oameni din comunitatea locală, dedicați acesteia și pasionați de a face bine.
              Împreună ne-am propus să sprijinim educația în toate formele ei, fără a uita însă și de alte nevoi ale comunității pe care o servim.
              Motto-ul organizației noastre "A servi mai presus de sine" ne onorează în fiecare zi în care, prin implicarea noastră în societate, putem aduce un zâmbet pe chipul celor aflați în nevoie. </p>
          </Reveal>
        </div>
      </div>
    </div>

    {/* <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">So what’s the whole concept?</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">We are bringing forward to the digital stage the first Romanian series of NFTs, built on the Elrond blockchain with an entirely charitable purpose, made in order to support the Ukrainian refugees. NoWar NFT is a unique collection of 10.000 NFTs which aims to raise funds for those in need. Everything that we will raise together out of this project will be directed to various causes that support the Ukrainians and their refugees.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_image"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Wow, that’s nice! And big! But who’s the team?</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Probably we do need to be a bit idealistic in order to have an impact. So the first thing you should know about us is that we like to get involved. To stay informed. To take action. We are people from different cities of Romania, with different backgrounds and different skills, but with similar principles and beliefs. We are all part of Rotaract Clubs of District 2241 Romania & Republic of Moldova and we all have volunteering in our blood.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_globe-2"></i>
              </div>
          </div> */}

    {/* <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">What is Lorem Ipsum?</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_globe-2"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">What is Lorem Ipsum?</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">What is Lorem Ipsum?</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div> */}
  </div>
);
export default featurebox;