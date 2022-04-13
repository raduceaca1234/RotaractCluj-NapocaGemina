import React from 'react';
import Particle from '../components/Particle';
import SliderMainParticle from '../components/SliderMainParticle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import ColumnZeroThree from '../components/ColumnZeroThree';
import ColumnZeroThree2 from '../components/ColumnZeroThree2';
import AuthorList from '../components/authorList';
import Accordion from '../pages/accordion';
import RoadMap from '../components/RoadMap'
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #F6DC4B;
    border-bottom: solid 1px #F6DC4B;
  }
  header#myHeader.navbar .search #quick_search{
    color: #05295A;
    background: #05295A;
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
      background: #F6DC4B;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #F6DC4B;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
const timelineInfo = [
  {
    timelineClass: "block block-left",
    title: 'Phase 1',
    date_from: '40%',
    date_to: 'Plan: identifying a solution for raising funds to help the Ukrainian refugees and building a team to create the plan and implement it.'
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Phase 2',
    date_from: '30%',
    date_to: 'Community: promoting the project, building the community around it and creating partnerships.'
  },
  {
    timelineClass: "block block-left mt-30",
    title: 'Phase 3',
    date_from: '20%',
    date_to: 'Launch: minting the NFTs & publishing the NFT collection on trust.market.'
  },
  {
    timelineClass: "block block-right mt-30",
    title: 'Phase 4',
    date_from: '10%',
    date_to: 'Donating the funds to causes that support the Ukrainians and their refugees.'
  }
]

const homeone = () => (
  <div>
    <GlobalStyles />

    <section className="jumbotron no-bg">
      <Particle className="particle"/>
      <SliderMainParticle />

    </section>

    {/* <section className='container' style={{marginBottom: 100}}>
      <div className='row' style={{marginBottom: -50}}>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Roadmap</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <RoadMap data={timelineInfo} />

    </section> */}
    <section className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>About us</h2>
            <div className="small-border"></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <FeatureBox />
      </div>
    </section>
    <section className='container-fluid bg-gray'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Board 2021-2022</h2>
            <div className="small-border"></div>
          </div>
        </div>
        <div className='col-lg-12'>
          <ColumnZeroThree2 />
        </div>
      </div>
    </section>

        <section className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Intreaga echipa</h2>
            <div className="small-border"></div>
          </div>
        </div>
        <div className='col-lg-12'>
          <ColumnZeroThree />
        </div>
      </div>
    </section>



    {/* <ColumnNew /> */}



    {/* <section className='container-fluid bg-gray'>
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
    </section> */}
{/* 
    <Accordion /> */}

    <Footer />

  </div>
);
export default homeone;