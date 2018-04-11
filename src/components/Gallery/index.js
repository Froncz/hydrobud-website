import React, { PureComponent } from 'react';
import ImageZoom from 'react-medium-image-zoom'
import { Scrollbars } from 'react-custom-scrollbars';

import './Gallery.css';

const images = [
  {
    low: require('../../images/image2-low.jpg'),
    high: require('../../images/image2.jpg')
  },
  {
    low: require('../../images/image3-low.jpg'),
    high: require('../../images/image3.jpg')
  },
  {
    low: require('../../images/image4-low.jpg'),
    high: require('../../images/image4.jpg')
  },
  {
    low: require('../../images/image5-low.jpg'),
    high: require('../../images/image5.jpg')
  },
  {
    low: require('../../images/image6-low.jpg'),
    high: require('../../images/image6.jpg')
  },
  {
    low: require('../../images/image1-low.jpg'),
    high: require('../../images/image1.jpg')
  }
]

class Gallery extends PureComponent {
  render() {
    return (
      <div className="gallery">
        <Scrollbars
          className="gallery__list"
          style={{ height: '140px' }}
          renderThumbHorizontal={() => <div className="thumb-small thumb-small--horizontal"/>}
          renderThumbVertical={() => <div className="thumb-small thumb-small--vertical"/>}
        >
          {images.map((image, key) => (
            <div className="gallery__item" key={key}>
              <ImageZoom
                image={{
                  src: image.low
                }}
                zoomImage={{
                  src: image.high
                }}
              />
            </div>
          ))}
        </Scrollbars>
      </div>
    );
  }
}

export default Gallery;
