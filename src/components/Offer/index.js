import React from 'react';

import './Offer.css';

const range1 = [
  'wodno-kanalizacyjne',
  'gazowe',
  'centralnego ogrzewania'
];

const range2 = [
  'kanalizacyjne',
  'wodociągowe',
  'gazowe'
];

const Offer = () => (
  <div className="offer">
    <h3>Oferta</h3>
    <div>
      <p>
        Naszą specjalnością są instalacje wewnętrzne:
      </p>
      <div className="offer__list">
        {range1.map((title, key) => (
          <div
            key={key}
            className="offer__list-item"
          >
            {title}
          </div>
        ))}
      </div>
      <p>
        a także sieci zewnętrzne:
      </p>
      <div className="offer__list">
        {range2.map((title, key) => (
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
        Wykonujemy instalacje klimatyzacji i wentylacji oraz montaż pomp ciepła i kolektorów słonecznych. Realizujemy także roboty towarzyszące, takie jak odtworzenie tynków, zabudowa gips-karton, malowanie oraz układanie kostki brukowej.
      </p>
    </div>
  </div>
);

export default Offer;
