import React from 'react';

import './Offer.css';

const Offer = ({ o_nas }) => (
  <div className="offer">
    <h3>{o_nas.oferta_tytul}</h3>
    <div>
      <p>
        {o_nas.zakres1_tytul}
      </p>
      <div className="offer__list">
        {o_nas.zakres1_lista && o_nas.zakres1_lista.map((title, key) => (
          <div
            key={key}
            className="offer__list-item"
          >
            {title}
          </div>
        ))}
      </div>
      <p>
        {o_nas.zakres2_tytul}
      </p>
      <div className="offer__list">
        {o_nas.zakres2_lista && o_nas.zakres2_lista.map((title, key) => (
          <div
            key={key}
            className="offer__list-item"
          >
            {title}
          </div>
        ))}
      </div>
      <hr />
      <p>
        {o_nas.oferta_dodatkowe}
      </p>
    </div>
  </div>
);

export default Offer;
