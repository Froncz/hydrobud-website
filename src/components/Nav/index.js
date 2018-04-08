import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

import './Nav.css';

class Nav extends PureComponent {
  onClick() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
  render() {
    const { location } = this.props;
    const pathname = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.length);

    let linkOffer = 'realizacje';
    let linkContact = 'kontakt';

    if (pathname === 'realizacje') {
      linkOffer = location.pathname.substring(0, location.pathname.lastIndexOf("/realizacje") + 1);
    }

    if (pathname === 'kontakt') {
      linkContact = location.pathname.substring(0, location.pathname.lastIndexOf("/kontakt") + 1);
    }
    return (
      <div className="nav">
        <Link
          to={linkOffer}
          className={`nav-item ${pathname === 'realizacje' ? 'active' : ''}`}
          onClick={this.onClick}
        >
          Realizacje
          <FaAngleUp />
        </Link>
        <Link
          to={linkContact}
          className={`nav-item ${pathname === 'kontakt' ? 'active' : ''}`}
          onClick={this.onClick}
        >
          Kontakt
          <FaAngleUp />
        </Link>
      </div>
    );
  }
}

export default withRouter(Nav);
