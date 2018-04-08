import React from 'react';

import Offer from '../Offer';
import Gallery from '../Gallery';

import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-us">
    <h3>Firma</h3>
    <div className="about-us__text">
        Firma Hydrobud powstała w 1992 roku pod nazwą Zakład Instalacji Sanitarnych C.O. i Gaz. W 2002 roku nastąpiła zmiana nazwy na obecną. W ciągu 25 lat działalności zrealizowaliśmy szereg inwestycji dla klientów instytucjonalnych i indywidualnych na terenie całego kraju. Specjalizujemy się w wykonawstwie instalacji hydraulicznych, wodno-kanalizacyjnych, centralnego ogrzewania, wentylacji i klimatyzacji. Posiadamy kompetentną kadrę oraz niezbędny sprzęt do wykonywania powierzonych prac. Priorytetem firmy jest maksymalizacja satysfakcji klientów.
    </div>
    <hr />
    <Gallery />
    <Offer />
  </div>
);

export default AboutUs;
