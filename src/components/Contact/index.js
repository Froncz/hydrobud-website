import React from 'react';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaMap from 'react-icons/lib/fa/map';
import { Scrollbars } from 'react-custom-scrollbars';

import './Contact.css';

const Contact = () => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay contact"
    style={{ position: 'absolute' }}
  >
    <div className="inner">
      <h3>Kontakt</h3>
      <div className="contact__form">
        <div className="contact__company-info">
          <div className="contact__info">
            <strong>Biuro:</strong>
            <p className="contact__company">
              Hydrobud
            </p>
            <div>
              <a href="https://goo.gl/maps/ZkrYiAbE5eK2">
                <FaMap />
                <div>
                  <span>ul. Karowa 16</span>
                  <span>08-119 Siedlce</span>
                </div>
              </a>
              <div>
                <div>
                  <div>
                    <FaPhoneSquare />
                    <div>
                      <a href="tel:+48256322990">
                        tel./fax: (25) 6322990
                      </a>
                      <a href="tel:+48600345625">
                        tel: 600345625
                      </a>
                      <a href="tel:+48604105315">
                        tel: 604105315
                      </a>
                    </div>
                  </div>
                  <a href="mailto:biuro@hydrobud.waw.pl">
                    <FaEnvelopeSquare />
                    biuro@hydrobud.waw.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__info">
            <strong>Siedziba:</strong>
            <p className="contact__company">
              Hydrobud
            </p>

            <div>
              <a href="https://goo.gl/maps/HaGJdPH9xh82">
                <FaMap />
                <div>
                  <span>ul. Rejtana 22</span>
                  <span>08-110 Siedlce</span>
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
