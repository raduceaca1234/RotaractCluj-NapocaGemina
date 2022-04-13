import React from 'react';
import Particle from '../components/Particle';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import ColumnZero from '../components/ColumnZeroTwo';
import AuthorList from '../components/authorList';
import RoadMap from '../components/RoadMap'
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #0358B6;
    border-bottom: solid 1px #0358B6;
  }
  header#myHeader.navbar .search #quick_search{
    color: #0358B6;
    background: #0358B6;
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #0358B6;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #0358B6;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
const timelineInfo = [
  {
    timelineClass: "block block-left",
    title: 'Platform Development Starts',
    date_from: 'May 12, 2018',
    date_to: 'Jun 19, 2018'
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Groundwork Preparation for ICO',
    date_from: 'Aug 18, 2018',
    date_to: 'Sep 23, 2018'
  },
  {
    timelineClass: "block block-left mt-30",
    title: 'Crypto Blockchain Release',
    date_from: 'Oct 08, 2018',
    date_to: 'Nov 16, 2018'
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Release Bank & Cards Phase',
    date_from: 'Dec 28, 2018',
    date_to: 'Jan 29, 2019'
  }
]

const homeone = () => (
  <div>
    <GlobalStyles />
    <section className="jumbotron no-bg">
      <img />
      {/* <img style={{backgroundImage: `url(${'./img/background/OIP22.jpg'})`}}/> */}
      <Particle />
      <SliderMainParticle />
    </section>

    <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Funds Allocation</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <RoadMap data={timelineInfo} />

    </section>

    <section className='container-fluid bg-gray'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>About us</h2>
            <div className="small-border-white"></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <FeatureBox />
      </div>
    </section>

    <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Popular Items</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>

      <ColumnNew />

    </section>

    <section className='container-fluid bg-gray'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Partners</h2>
            <div className="small-border-white"></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Team</h2>
            <div className="small-border"></div>
          </div>
        </div>
        <div className='col-lg-12'>
          <ColumnZero />
        </div>
      </div>
    </section>

    <Footer />

  </div>
);
export default homeone;