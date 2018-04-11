import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import "./Realisations.css";

const realisations = [
  "Wykonanie instalacji wentylacji, klimatyzacji, ogrzewania i kanalizacji sanitarnej wraz z odtworzeniem nawierzchni drogowej przy placu węglowym w Elektrociepłowni Kozienice.",
  "Wykonanie instalacji wodociągowej, gazowej i sanitarnej wraz ze zbiornikiem retencyjnym w ramach rozbudowy zakładu Ajimoto w Kańkowie.",
  "Montaż instalacji wentylacji mechanicznej, chłodniczej, grzewczej, kanalizacji sanitarnej i klimatyzacji w Zespole budynków biurowych Libra ul. Daimlera 2 w Warszawie.",
  "Wykonanie instalacji centralnego ogrzewania, wodno – kanalizacyjnej, gazu i kotłowni w Zespole budynków mieszkalnych wielorodzinnych z garażami podziemnymi Wilanów ul. Bruzdowa w Warszawie.",
  "Montaż instalacji sanitarnej, centralnego ogrzewania i solarnej na budowie Aquapark w Siedlcach.",
  "Wykonanie instalacji wody, kanalizacji sanitarnej i deszczowej, centralnego ogrzewania, ciepła technologicznego wraz z kotłownią, wentylacji mechanicznej, sprężonego powietrza w zakładzie artykułów higieniczno – kosmetycznych w Nowym Dworze Mazowieckim.",
  "Wymiana instalacji wod-kan, centralnego ogrzewania, montaż węzła cieplnego i instalacji p.poż wraz z instalacją elektryczną w Centrum Medycznym Kształcenia Podyplomowego przy ul. Marymonckiej w Warszawie.",
  "Wykonanie instalacji centralnego ogrzewania, zimnej i ciepłej wody użytkowej oraz instalacji p.poż. w internacie Wojskowej Agencji Mieszkaniowej przy ul. Zegrzyńskiej 17 w Legionowie.",
  "Budowa instalacji centralnego ogrzewania, wodociągowej, hydrantowej, kanalizacji wraz z kolektorami w ramach rewitalizacji zespołu biurowego Cross Point w Łodzi.",
  "Wykonanie zewnętrznych sieci: wodociągowej, kanalizacji deszczowej i sanitarnej dla budynków przy ul. Okunin 134 w Nowym Dworze Mazowieckim.",
  "Remont instalacji sanitarnych i grzewczych na budowie WB Electronics w Ożarowie Mazowieckim.",
  "Przeprowadzenie kompletnego remontu instalacji sanitarnych i grzewczych w ocynkowni w Dębicy.",
  "Wykonanie kompletu instalacji sanitarnych i grzewczych na budowie Fabryki Wanien Akrylowych i Kabin Prysznicowych CERSANIT II i na budowie Fabryki Mebli Łazienkowych Cersanit II w Starachowicach.",
];

const Realisations = () => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay realisations"
    style={{ position: 'absolute' }}
  >
    <div className="inner">
      <h3>Realizacje</h3>
      <strong>Przykłady niektórych z naszych realizacji:</strong>
      <div className="realisations__list">
        {realisations.map((realisation, key) => (
          <span key={key}>{realisation}</span>
        ))}
      </div>
      <hr />
      <h3>Referencje</h3>
      <div className="realisations__references">
          Referencje przedstawiamy na życzenie.
      </div>
    </div>
  </Scrollbars>
);

export default Realisations;
