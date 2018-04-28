import React from 'react';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaMap from 'react-icons/lib/fa/map';
import { Scrollbars } from 'react-custom-scrollbars';

import './Contact.css';

const Contact = ({ content: { kontakt }}) => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay contact"
    style={{ position: window.innerWidth <= 768 ? 'fixed' : 'absolute' }}
  >
    <div className="inner">
      <h3>{kontakt.tytul}</h3>
      <div className="contact__form">
        <div className="contact__company-info">
          <div className="contact__info">
            <strong>{kontakt.biuro}</strong>
            <p className="contact__company">
              {kontakt.biuro_nazwa}
            </p>
            <div>
              <a href="https://goo.gl/maps/ZkrYiAbE5eK2">
                <FaMap />
                <div>
                  <span>{kontakt.biuro_adres1}</span>
                  <span>{kontakt.biuro_adres2}</span>
                </div>
              </a>
              <div>
                <div>
                  <div>
                    <FaPhoneSquare />
                    <div>
                      <a href={`tel:+48${kontakt.biuro_numer_fax}`}>
                        tel./fax: {kontakt.biuro_numer_fax}
                      </a>
                      <a href={`tel:+48${kontakt.biuro_numer2}`}>
                        tel: {kontakt.biuro_numer2}
                      </a>
                      <a href={`tel:+48${kontakt.biuro_numer3}`}>
                        tel: {kontakt.biuro_numer3}
                      </a>
                    </div>
                  </div>
                  <a href={`mailto:${kontakt.biuro_email}`}>
                    <FaEnvelopeSquare />
                    {kontakt.biuro_email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__info">
            <strong>{kontakt.siedziba}</strong>
            <p className="contact__company">
              {kontakt.siedziba_nazwa}
            </p>

            <div>
              <a href="https://goo.gl/maps/HaGJdPH9xh82">
                <FaMap />
                <div>
                  <span>{kontakt.siedziba_adres1}</span>
                  <span>{kontakt.siedziba_adres2}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Scrollbars>
);

export default Contact;
