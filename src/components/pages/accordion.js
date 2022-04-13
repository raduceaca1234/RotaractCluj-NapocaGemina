import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
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
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const accordion = () => (
  <div>
    <GlobalStyles />
    <section className='container-fluid bg-gray'>
      <div className='row'>

        {/* <div className='col-md-6 mb-5'>
      <h3>Default</h3>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Accordion Item #1
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables. </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Accordion Item #2
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Accordion Item #3
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body> <strong>This is the first item's accordion body.</strong> 
              It is shown by default, until the collapse 
              plugin adds the appropriate classes that 
              we use to style each element. 
              These classes control the overall appearance, 
              as well as the showing and hiding via CSS transitions. 
              You can modify any of this with custom CSS or 
              overriding our default variables.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div> */}
        <div className='col-lg-12'>
          <div className='text-center'>
            <h2>Frequently Asked Questions</h2>
            <div className="small-border"></div>
          </div>
          <Accordion style={{marginLeft: '10%', marginRight: '10%'}}>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="0" style={{color:'#fff'}}>
                  First things first: What the h*ck is an NFT?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <strong>NFT stands for non-fungible tokens.</strong> Ok. Might sound weird. Leti us explain better: Goods can be fungible or non-fungible. Fungible goods can be interchanged with other goods of the same type, because fungibility implies equal value between the assets. Money is fungible. A Non-fungibility means uniqueness: it can't be replaced with something else. A non-fungible token is a piece of digital media that can be owned, sold and traded. NFTs are one of the fastest growing assets in the crypto industry. They are non-interchangeable units of data, containing a piece of identifying information that makes them distinguishable from all other tokens. Because no two tokens are the same, they cannot be traded or exchanged at an equivalent rate or broken down into smaller units like currency. So, we asked ourselves: why don’t we create charity NFTs? We are a global organization and it’s time to accept the fact that we live in a digital world as well.  Therefore, our purpose is to take things to another level. </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="1" style={{color:'#fff'}}>
                  Why are they so interesting?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body> <strong>Apart from the fact that they are unique, they represent easily verifiable digital assets, meaning you are bound by a smart contract when you purchase one.</strong> The footprints of ownership are easily recognizable, thanks to blockchain. Each token is valued differently and can’t simply be replaced by another. As each NFT is unique, many people see them as valuable assets. It’s basically having something that cannot be copied: anyone can buy a Van Gogh print, but only one person can own the original. And now think about this in a digital manner. So there’s quite some hype in here with the NFTs, because owning one (or several) gets you some basic usage rights, plus, of course, there are bragging rights that you own the art, with a blockchain entry to back it up. An NFT reflects the value of the concept it represents. So just believe the hype, cause it’s real, and let’s start helping the world!</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="3" style={{color:'#fff'}}>
                  How do NFTs work?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body> <strong>Simple, but yet complex.</strong> They need to be “tokenized”. Basically, you take something that is not a token and turn it into one. Many believe that almost everything will one day be tokenized. The NFTs usually take the form of digital assets like pictures, videos, music, 3D art, poems, photography. These assets are then “minted” into tokens and stored on blockchain technology. Each token is unique and can be sold, traded, or used in other ways. It’s like buying and collecting art, and you can find different ways to use it. </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="4" style={{color:'#fff'}}>
                  How do we make an NFT? What’s a wallet?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body> <strong>There are multiple NFT marketplaces to choose from if you want to sell your art online.</strong> It depends on the cryptocurrency you want to work with. Some worldwide very well-known platforms are OpenSea, Rarible, SuperRare (these work on Ethereum - you must have a wallet compatible with the Ethereum network). We are working on Trust Market with Elrond. Each marketplace has a different process for minting NFTs. Anyone can create an NFT. All that’s needed is a digital wallet, a small purchase of cryptocurrency and a connection to an NFT marketplace where you’ll be able to upload and turn the content into an NFT or crypto art. A crypto wallet is essential if you want to buy/sell NFTs in any NFT marketplace. The most popular crypto wallet used with OpenSea, for example, is Metamask. It is a browser plugin and it is easy to set up. You can download the wallet plugin from the Metamask website. An NFT wallet doesn't work like a physical wallet. You don't actually store NFTs or cryptocurrency in your wallet, but it provides access to the assets, which are held on the blockchain. It does so by providing a private key to that address, which allows the wallet owner to authorize transactions. If you have the private key, you effectively own anything at that address. A wallet will take care of all the technical bits for you and provide a nice user interface for buying, selling, and transferring NFTs or cryptocurrency. Moreover, it can also provide increased security with two-factor authentication, and it provides a convenient way to track your assets across devices.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="5" style={{color:'#fff'}}>
                  What’s minting?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body> <strong>Uploading / creating it into a marketplace.</strong> To mint an NFT, look for the create button. You will be redirected to a page where you need to upload your NFT (make sure that the NFT you are minting is in a format allowed by the marketplace website’s standards). After naming your NFT and uploading it, scroll down and click on the create option. Your NFT will then be on the marketplace, but you still need to list it for selling. So there’s a lot going on - and that’s just the process for ONE NFT,  there’s a whole different story for a 10,000 NFTs collection - but for us it is all worth it! </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="6" style={{color:'#fff'}}>
                  Ok, ok. NFTs, wallets, minting… but what are we even trying to do?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body> <strong>The time to be passive is long gone.</strong> It’s time to take action and do something to help this world rise again from this unimaginable situation we were forced to experience during our lifetime!
                  We are team players passionate about delivering creative & innovative projects to promote peace, fellowship and connection. There's a real war going on right above us, in Ukraine and we want to help our neighbors in as many ways as possible. This is why we decided to make an NFT fundraising and to give the opportunity to all NFT enthusiasts to participate, donate and do good together. We are transparent, honest, creative and well-intentioned. We’re also firm believers that there’s a lot of kindness in people’s hearts and we’re convinced that we can create something together in this digital world. We are already involved in humanitarian actions, we’re putting a lot of work every day in our projects in real life, but we believe the digital community should also be an important part of our joint efforts.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="7" style={{color:'#fff'}}>
                  So, what’s the whole concept?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body> <strong>We are bringing forward to the digital stage the first Rotaract NFT project with an entirely charitable purpose, built on the Elrond blockchain, made in order to support the Ukrainian refugees.</strong> NoWar NFT is a unique collection of 10.000 NFTs which aims to raise funds for those in need. Everything that we will raise together out of this project will be directed to various causes that support the Ukrainians and their refugees. The situation in Ukraine and here in Romania - especially at the borders - is changing every hour and it’s clear that we are living through difficult times. But in difficult times, strong and good people must raise to empower, inspire and prove humanity and solidarity. The art of NoWar NFT is based on real life characters we have seen these days - either face to face, either on TV, either offering much-needed help, either slowly crossing the border with tears in their eyes and hope in their hearts. NoWar NFT promotes real-life heroes. The ones who are willing to go the extra mile to do good, to persevere, to succeed! </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header style={{backgroundColor:'#0358B6'}}>
                <Accordion.Toggle as={Button} variant="text" eventKey="8" style={{color:'#fff'}}>
                  Wow...that is something we all need to do right now! Who's behind this project?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body> <strong>In order to achieve something great, of impact, we can’t help but dream. We are idealistic.</strong> One of the firsts things you should know about us is that we like to get involved. To stay informed. To act. We are people from different cities of Romania and Republica Moldova, with different backgrounds and different skills, but with similar principles and beliefs. We are all part of Rotaract Clubs of District 2241 Romania & Republic of Moldova, and we all have volunteering in our blood. Rotaract as an organization is part of Rotary International, which is a global network of 1.4 million neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to create lasting change – across the globe, in our communities  and in ourselves.
                  Solving real problems takes real commitment and vision. For more than 110 years, Rotary's people of action have used their passion, energy, and intelligence to deliver sustainable projects. We are always working to better our world, and we stay committed until the end.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

      </div>
    </section>
  </div>

);
export default accordion;