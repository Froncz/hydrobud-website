import React from 'react';

import Offer from '../Offer';
import Gallery from '../Gallery';

import "./AboutUs.css";

const AboutUs = ({ content: { o_nas }}) => (
  <div className="about-us">
    <h3>{o_nas.tytul}</h3>
    <div className="about-us__text">
        {o_nas.o_firmie}
    </div>
    <hr />
    <Gallery o_nas={o_nas} />
    <Offer o_nas={o_nas} />
  </div>
);

export default AboutUs;
