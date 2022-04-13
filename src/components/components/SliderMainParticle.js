import React from 'react';
import Reveal from 'react-awesome-reveal';
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
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
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle = () => (
  <div className="container">
    <div className="row align-items-center" style={{ marginTop: 20}}>
      <div className="col-md-6">
        <div className="spacer-single"></div>
        <div className="spacer-double"></div>
        {/* <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
          <h1 className="col-white">NoWarNft</h1>
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
          <p className="lead col-white">
            The first Rotaract NFT project with an entirely charitable purpose, built on the Elrond blockchain, made in order to support the Ukrainian refugees.</p>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
          <span onClick={() => {
            window.location.href = 'https://trust.market/';
            return null;
          }} className="btn-main inline lead">Explore</span>
          <span onClick={() => {
            window.location.href = 'https://discord.gg/zEH87mrrwE';
            return null;
          }} className="btn-main inline white lead">Join</span>
          <div className="mb-sm-30"></div>
        </Reveal> */}
      </div>
    </div>
    {/* <div className="de-flex-col">
      <div className="social-icons">
        <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
          <span onClick={() => {
            window.location.href = 'https://discord.gg/u8en2eZk';
            return null;
          }}><i><BsDiscord /></i></span>
          <span onClick={() => {
            window.location.href = 'https://twitter.com/NFTNoWar';
            return null;
          }}><i><BsTwitter /></i></span>
          <span onClick={() => {
            window.location.href = 'https://www.instagram.com/nowarnft_egld/';
            return null;
          }}><i><BsInstagram /></i></span>
          <span onClick={() => {
            window.location.href = 'https://www.facebook.com/nowarnft';
            return null;
          }}><i><AiFillFacebook /></i></span>
        </Reveal>
      </div>
    </div> */}
  </div>
);
export default slidermainparticle;