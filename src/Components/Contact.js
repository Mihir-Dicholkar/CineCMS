import React from 'react';
import './Contact.css'
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot, faPhone, faEnvelope);

function Contact(){
    const [location, setLocation] = useState('');

    const handleGetLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`);
                },
                () => {
                    alert('UNable to retrive location');
                }
            );
        }else{
            alert('Geolocation not suppport by your browser');
        }
    };
    return(
        <div className='contact-page'>
                 { <video
                className='bg-video'
                src='/bgvideo.mp4'
                autoPlay
                loop
                muted
                playsInline
            /> }
          <main className="contact-main">
  <section className='Contact'>
    <div className='title'>
      <h1>Get in Touch</h1>
      <p>Have questions, feedback, or need support? We're here to help. Fill out the form below or use our contact details.</p>
    </div>
    <div className="form-details-row">
      <form className='form'>
        <h1>Send us Message</h1>
        <input type='Name' placeholder='Enter Your Name' required />
        <input type='Email' placeholder='Enter you Email'  />
        <input type='text' placeholder='Subject' />
        <textarea placeholder='Message..' id='message' rows={15} style={{resize: "vertical"}} />
        <button>Submit Message</button>
      </form>
      <div className='details'>
        <div className='Contact-info'>
          <h1>Contact Information</h1>
          <FontAwesomeIcon icon={['fas','envelope']} id='mail' /> <h5>Email:</h5><p>support@cinecms.com</p>
          <FontAwesomeIcon icon={['fas','phone']} id='phone'/> <h5>Phone:</h5><p>+1 (234) 567-890 (Mon-Fri, 9am-5pm EST)</p>
          <FontAwesomeIcon icon={['fas', 'location-dot']} id='location' /><h5>Address:</h5><p>+1 (234) 567-890 (Mon-Fri, 9am-5pm EST)</p>
        </div>
        <div className='input-location'>
            <input type='text' placeholder='Enter your Location' name='location' value={location} 
            onChange={e => setLocation(e.target.value)}
        />
        <button type='button' className='geo-btn' onClick={handleGetLocation}>Use my Location</button>
         {location && location.includes(',') && (
    <div className="location-map">
      <iframe
        title="Your Location"
        width="100%"
        height="160"
        frameBorder="0"
        style={{ borderRadius: "10px", marginTop: "1rem" }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(location.split(',')[1])-0.01}%2C${parseFloat(location.split(',')[0])-0.01}%2C${parseFloat(location.split(',')[1])+0.01}%2C${parseFloat(location.split(',')[0])+0.01}&layer=mapnik&marker=${location}`}
        allowFullScreen=""
      ></iframe>
    </div>
  )}
        </div>
      </div>
    </div>
  </section>
</main>
        </div>
    );
}
export default Contact;