import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import "./Realisations.css";

const Realisations = ({ content: { realizacje }}) => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay realisations"
    style={{ position: window.innerWidth <= 768 ? 'fixed' : 'absolute' }}
  >
    <div className="inner">
      <h3>{realizacje.tytul}</h3>
      <strong>{realizacje.podtytul}</strong>
      <div className="realisations__list">
        {realizacje.lista && realizacje.lista.map((realisation, key) => (
          <span key={key}>{realisation}</span>
        ))}
      </div>
      <hr />
      <h3>{realizacje.referencje_tytul}</h3>
      <div className="realisations__references">
          {realizacje.referencje_info}
      </div>
    </div>
  </Scrollbars>
);

export default Realisations;
