import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home1';
import Explore from './pages/explore';
// import Explore2 from './pages/explore2';
// import Rangking from './pages/rangking';
import Collection from './pages/collection';
import Cause from './pages/cause'
import Organization from './pages/organization';
// import Helpcenter from './pages/helpcenter';
// import ItemDetail from './pages/ItemDetail';
// import Author from './pages/Author';
// import Wallet from './pages/wallet';
// import Login from './pages/login';
// import LoginTwo from './pages/loginTwo';
// import Register from './pages/register';
// import Price from './pages/price';
// import Works from './pages/works';
import News from './pages/news';
// import Create from './pages/create';
// import Create2 from './pages/create2';
// import Create3 from './pages/create3';
// import Createoption from './pages/createOptions';
// import Activity from './pages/activity';
// import Contact from './pages/contact';
// import ElegantIcons from './pages/elegantIcons';
// import EtlineIcons from './pages/etlineIcons';
// import FontAwesomeIcons from './pages/fontAwesomeIcons';
// import Accordion from './pages/accordion';
// import Alerts from './pages/alerts';
// import Progressbar from './pages/progressbar';
// import Tabs from './pages/tabs';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app = () => (
  <div className="wraper">
    <GlobalStyles />
    <Header />
    <Location>
      <Route path='/privacy-policy' component={() => {
        <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
      }} />
    </Location>
    <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Explore path="/explore" />
        <Organization path="/organization" />
        {/* <Explore2 path="/explore2" />
        <Rangking path="/rangking" /> */}
        <Collection path="/collection" />
        <Cause path="/cause" />
        {/* <Helpcenter path="/helpcenter" />
        <ItemDetail path="/ItemDetail" /> */}
        {/* <Author path="/Author" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <LoginTwo path="/loginTwo" />
        <Register path="/register" /> */}
        {/* <Price path="/price" />
        <Works path="/works" /> */}
        <News path="/news" />
        {/* <Create path="/create" />
        <Create2 path="/create2" />
        <Create3 path="/create3" />
        <Createoption path="/createOptions" />
        <Activity path="/activity" /> */}
        {/* <Contact path="/contact" />
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" /> */}
      </ScrollTop>
    </PosedRouter>
    <ScrollToTopBtn />

  </div>
);
export default app;