import React, { useState } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Sample from './Sample'
function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="WhitepaperNoWarNFT.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #0358B6;
    border-bottom: solid 1px #0358B6;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
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

const tabs = () => (
  <div>
    <GlobalStyles />
    <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/bg-shape-1-dark.jpg'})` }}>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12 text-center'>
              <h1>Whitepaper</h1>
              <p>Handbook of the project</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container">

      <div className="column">
        <div className='row-md-6 mt-3'>
          {Sample()}
        </div>
      </div>

    </section>

    <section className="container">
      <div className="column">
        <div className='row-md-6 mt-3'>
          {/* <h3>Our cause</h3> */}
          <div id="tabs2">
            <Tabs fill defaultActiveKey="home">
              <Tab eventKey="home" title="Who is the team?">
                <div>
                  <p>

                    Rotaract District 2241 through Rotaract clubs from the district
                  </p>
                  <p>What is a district and what is a Rotaract club?</p>
                  <p>
                    What is a district and what is a Rotaract club?
                    Rotaract is a service organization that is spread through all around the world and brings together business, professional and community leaders in order to provide service to others, promote integrity and advance good will, peace, and understanding in the world.
                    The Rotary family is formed from Interact clubs, Rotaract clubs, and Rotary clubs. Each club is formed from different age groups formed together in order to do good and to take action. Each geographical area is divided in Districts.
                    So the Rotaract District 2241 is formed from all the Rotaract clubs from Romania and Republic of Moldova.
                    We have done many projects along the years and now we have united our forces to help Ukraine.
                    We have already started to help Ukraine, organized collection centers in different areas, we have sent transports with supplies, helped refugees that arrived at our boarder and we found ourselves unable to do more cause of the lack of funds.
                    We know the needs and constantly have people who we can communicate from all around the country and from Ukraine and want to do more.
                    For that we started the NoWar NFT to gather funds. All the funds we gather will be donated.
                  </p>
                </div>
              </Tab>
              <Tab eventKey="profile" title="What will we do after mint?">
                <div>
                  <p>Effective aid, sustainable aid. </p>
                  <p>With a national reach, our volunteers are on the scene every day to see what refugees need. Their needs are constantly changing and with a flow of food and items sent by different organisations, resources are often wasted and the needs remain unmet. We aim to make efficient and sustainable use of the resources at our disposal. </p>
                  <p>How will we do this?</p>
                  <p>By being present on the scene, our volunteers will be able to respond to the refugees needs more quickly by accessing the NoWar-NFT fund, without having to do a separate fundraising campaign for funds or products that would prolong the process. Moreover, through this mechanism we are able to respond to needs in a way that is not wasteful, managing resources in a sustainable way, avoiding harming the environment.</p>
                  <p><strong>All the money we gather will be donated,</strong> and we will not get paid for this. Our benefit is that we can help and do good! </p>
                  <p>We are going to divide the money as follow:</p>
                  <h4>Step 1</h4>
                  <p><strong>We address the Ukrainians that remained in Ukraine and the Refugees than came to Romania.</strong></p>
                  <p>40% To medical supplies for people from Ukraine as well as for Refugees.</p>
                  <p>30% To Hygiene products and elementary items</p>
                  <p>20% To non-perishable goods, housing, transport and integration in the new community</p>
                  <p>10% We will let the community vote on how this % to be spent depending on the needs</p>
                  <h4>Step 2</h4>
                  <p><strong>We address to all Ukrainian citizens that will remain in Romania.</strong></p>
                  <p>40% Education: language courses, school supplies, books, library pass</p>
                  <p>30% Essentials: health, hygiene products, food</p>
                  <p>20% Services: translator, professional retraining courses.</p>
                  <p>10% community</p>
                  <p>All of the % above can change depending on what info we get and what needs exist in the moment of the mint.</p>
                  <p>We are getting different requests like fuel, medical, different supplies. We will be transparent with all we buy and post the on our social channels.</p>

                </div>
              </Tab>
              <Tab eventKey="contact" title="What are the benefits?">
                <div>
                  <p>All the money will be donated to help Ukrainian refugees.</p>
                  <p>We know what the exact needs are, and you can be sure your donation is not wasted. For example, there is plenty of food that has been bought and sent to the borders, so there's not a great need for food. People want to help, but do not know how. Our organization will manage all the funds and be transparent throughout the process.</p>
                  <p>You will receive a cool NFT that you can show off, keep and even resell.</p>
                </div>
              </Tab>
              {/* <Tab eventKey="Parties" title="Did I hear Parties?">
                <div>
                  <p>Every year we will organize a National Conference where you as a non-Rotaract member will be able to join if you own a NFT.</p>
                  <p>We will have trainings from different domains, learn new skills, team work and at the end socializing and parties.
                  </p>
                  <p>You probably heard that before on other projects, what is different is that we have these conferences every year, and it will not be our first one. We have experience on that side and every Rotaract member can confirm.</p>
                </div>
              </Tab> */}
              <Tab eventKey="Royalties" title="Do you have Royalties?">
                <div>
                  <p>We will have 10% royalty from every transaction. We do that to ensure you we will be here along the project working hard. </p>
                  <p>Also, all the Royalties will be donated!</p>
                  <p>Where?</p>
                  <p>For start the Royalties will go to the Ukraine cause. After that we will redirect the funds to another Rotaract cause where is the biggest need.</p>
                  <p>Our causes till now were based on:</p>
                  <p>medical – like hospital renovations</p>
                  <p>learning – like scholarships to students that work hard and do not have the financial support</p>
                  <p>social – people in need</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>


      </div>
    </section>


    <Footer />
  </div>

);
export default tabs;