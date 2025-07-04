import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from './Components/Contact';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import CustomCursor from "./Components/custom-cursor";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt, faChartColumn, faCircleCheck, faCloudArrowUp, faDollar, faGlobe, faHeadphonesSimple, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import  { fab, faSpotify, faYoutube }  from "@fortawesome/free-brands-svg-icons";
library.add(faGlobe, faYoutube, faUserPlus, faCloudArrowUp, faHeadphonesSimple, faCircleCheck, faBolt, faSpotify, faChartColumn, faDollar);


function App() {

  const location = useLocation();

  useEffect(() => {
    if(location.hash) {
      const el = document.querySelector(location.hash);
      if (el){
        el.scrollIntoView({behavior : 'instant'});
      }
    }
  }, [location]);


  useEffect(() => {

    if(location.pathname !== "/") return;
    const cards = document.querySelectorAll('.card-fade');
    const observer = new window.IntersectionObserver(
      entries =>{
        entries.forEach(entry => {
          if (entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold: 0.2}
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [location.pathname]);
  return ( <div className='home'>
    

      
    <Header />
    <Routes>
      <Route path='/' element ={ 
    
   
    <main className='main-with-bg'>
      <video className='bg-video'
      src='/bgvideo.mp4'
      autoPlay
      loop muted playsInline/>
        
        <section className='hero-section'>
          
              <div className='center-logo-border'></div>
    <img src='/main-logo.png' alt='logo' className='center-logo'/>
  
        
          <h1 className="gradient-heading">Unlock Your Sound.</h1>
          <h1>Share It Worldwide.</h1>
          <p>CINECMS empowers independent artists and labels with cutting-edge tools for global music distribution, royalty collection, and audience growth. Your music, your terms.</p>
          <div className='btn-2'>
            <button>Cine Dashboard</button>
            <button>Discover More</button>
          </div>
        </section>
        <section className='next-steps' id='simplified-steps'>
          <h1 className="HEAD">Your Music Journey:<span>Simplified in 3 Steps</span></h1>
          <p className="PARA">Audio-Video Distribution , Artist Services , AI-based CINEDASHBOARD CMS .</p>
          <div className='cards'>
                <div className='account card card-fade' id='account-card'>
                  <FontAwesomeIcon icon={['fas', 'user-plus']} id='user' />
                  <h1>1. Create Your Account</h1>
                  <p>Sign up in seconds. Set up your artist or label profile with ease.</p>
                </div>
            <div className='upload card card-fade' id='upload-card'>
              <FontAwesomeIcon icon={['fas', 'cloud-arrow-up']} id="cloud" />
            <h1>2. Upload & Perfect</h1>
            <p>Drag & drop your tracks, add artwork, and fine-tune your release metadata.</p>
            </div>
            <div className='global card card-fade' id='global-card'>
            <FontAwesomeIcon icon={['fas', 'circle-check']} id="check" />
              <h1>3. Go Global & Get Paid</h1>
              <p>Distribute to 150+ platforms. Track streams and get your royalties, hassle-free.</p>
            </div>
          </div>
        </section>
           <section className='next-steps love-cinecms' id='love-cinecms'>
          <h1 className="HEAD">Why Artists<span>Love CINECMS</span></h1>
          <p className="PARA">We're built by musicians, for musicians. <br/> Experience the difference with features designed for your success.
</p>
          <div className='cards'>
            <div className='distribution card card-fade' id='distribution'>
              <FontAwesomeIcon icon={['fas', 'globe']}  id='globe'/>
              <h1>Global Distribution</h1>
              <p>Reach millions on Spotify, Apple Music, TikTok, and more. One upload, worldwide impact.</p>
            </div>
            <div className='analytics card card-fade' id='analytics'>
              <FontAwesomeIcon icon={['fas','chart-column']  } id="chart" />
              <h1>Powerful Analytics</h1>
              <p>Deep dive into your streams, downloads, listener demographics with our dashboard.</p>
            </div>
            <div className='royalties card card-fade' id='royalties'>
              <FontAwesomeIcon icon={['fas', 'dollar']} id="dollar" />
              <h1>Transparent Royalties</h1>
              <p>Get paid fairly and on time. Track every penny earned with clear, detailed statements.</p>
              </div>
            <div className='release card card-fade' id='release'>
              <FontAwesomeIcon icon={['fas', 'bolt']} id="bolt" />
              <h1>Lightning Fast Release</h1>
              <p> Get your music live on major platforms faster than ever. No more waiting weeks.</p>
            </div>
          </div>
        </section>
           <section className='next-steps artist-presence' id='artist-presence'>
          <h1 className="HEAD">Manage Your<span>Artist Presence</span></h1>
          <p className="PARA">Take control of your profiles on major platforms. CINECMS helps you get set up and verified.</p>
          <div className='cards'>
            <div className='spotify  card-fade' id='Spotify'>
              <FontAwesomeIcon icon={['fab', 'spotify']} id='spotify-icon' />
              <h1 className="art" >Spotify for Artists</h1>
              <p>Update your bio and artist photos, share updates with fans through Artist Pick, and feature playlists.</p>
              <button className='profile'> Claim Your Profile</button>
            </div>
            <div className='AppleMusic card-fade' id='AppleMusic'>
              <FontAwesomeIcon icon={['fas', 'headphones-simple']} id="headphone" />
              <h1 className="art">Apple Music for Artists</h1>
              <p>Add personality to your artist profile, upload lyrics for each track, and access your data and insights.</p>
              <button className='Applemusic'>Access Apple Music</button>
            </div>
            <div className='OAC  card-fade' id='OAC'>
              <FontAwesomeIcon icon={['fab', 'youtube']} id="youtube" />
              <h1 className="art">Official Artist Channel(OAC)</h1>
              <p>All content & subscribers from across your channels together in one place, plus Analytics for Artists.</p>
              <button className='Oac'>Inquire About OAC</button>
            </div>
          </div>
        </section>
        <section className='cineai'>
          <h1 >Explore <span>CINE AI </span>Music Tools</h1>
          <p >Dive into AI-powered music generation, artwork creation, and strategic distribution insights. Unleash your creativity with CINECMS.</p>
          <div className='ai-music'><button>Discover Ai Music Generation</button></div>
          <p>Click to explore AI music creation and more on our dedicated CINE AI page.</p>
        </section>
        <section className='power-distribution-insight'>
          <h1>AI-Powered <span>Distribution Insights</span></h1>
          <p>Leverage AI for strategic planning. Get insights on reaching your target audience, optimizing release schedules, and more.</p>
          <div className='ai-strategy'><button>Explore Ai strategic Tools</button></div>
          <p>Visit our CINE AI page to see how AI can shape your music distribution.</p>
        </section>
           <section className='next-steps perfect-plan' id='perfect-plan'>
          <h1 className="HEAD">Choose Your<span>Perfect Plan</span></h1>
          <p className="PARA">Simple, transparent pricing. No hidden fees. Ever. (Pricing is illustrative)</p>
          <div className='cards'>
            <div className='Free card card-fade'>
              <h1  className="tag">Spark<br/><span>Free</span></h1>
              <ul> 
              <li>1 Artist Profile</li>
              <li>Unlimited Releasest</li>
              <li>Basic Analytics</li>
              <li> Community Support</li>
              <li> Skipable Ads</li>
              <li> Materil View</li></ul>
              <button> Get Started Free</button>
            </div>
            <div className='Popular card card-fade'>
              <h1 className="tag">Amplify <br/><span>12$</span></h1><span className='pr'>/mo</span>
              <p>most popular</p>
              <ul> 
              <li>5 Artist Profiles</li>
              <li>Unlimited Releases</li>
              <li>Advanced Analytics & Trends</li>
              <li>Priority Email Support</li>
              <li>Custom Release Dates</li>
              <li> YouTube Content ID</li></ul>
              <button> Choose Amplify</button>
            </div>
           
         
            <div className='Label card card-fade'>
              <h1 className="tag">Label Pro <br/><span>35$</span></h1><span className='pr'>/mo</span>
              <ul> 
              <li>Unlimited Artist Profiles</li>
              <li>Unlimited Releases</li>
              <li>Full Analytics Suite</li>
              <li>Dedicated Account Manager</li>
              <li>Bulk Upload & Management</li>
              <li>Custom Label Branding</li></ul>
              <button> GO to Label Pro</button>
            </div>
        
            </div>
        </section>
        <section className='with-cinecms'>
          <h1>Ready to make Waves With CINECMS ?</h1>
          <p>Join the CINECMS community. Your next hit is waiting to be heard.</p>
         <div className='launch-cinecms'><button>Launch your music now</button></div>
        </section>
       
        </main>} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
        <CustomCursor />
     <Footer/>
    
    </div>
);
}
export default App;
