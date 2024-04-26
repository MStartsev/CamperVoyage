import { useState } from 'react';
// order form

import Reviews from '../Reviews/Reviews';
import Features from '../Features/Features';
import sprite from 'icons/sprite.svg';
import css from './ModalAdvert.module.css';
import cssItem from '../../AdvertsList/AdvertItem/AdvertItem.module.css';

const ModalAdvert = ({ advert }) => {
  const [btnActive, setBtnActive] = useState('features');

  return (
    <div className={`${css.modal_window} `}>
      <div>
        <div className={cssItem.header_wrapper}>
          <div className={cssItem.header}>
            <h2 className={cssItem.title}>{advert.name}</h2>
            <div className={cssItem.price_wrapper}></div>
          </div>
          <div className={cssItem.info}>
            <p className={cssItem.rating}>
              <svg className={cssItem.icon} width={16} height={16}>
                <use xlinkHref={`${sprite}#star`} />
              </svg>
              <span className={cssItem.rating_text}>
                {advert.rating} ({advert.reviews.length} Reviews)
              </span>
            </p>
            <span className={cssItem.location}>{advert.location}</span>
          </div>
          <p className={cssItem.price}>&#8364;{advert.price.toFixed(2)}</p>
        </div>
      </div>

      <div className={css.container}>
        <div className={css.list_container}>
          <ul className={cssItem.img_wrapper}>
            {advert.gallery.map(image_url => (
              <li key={image_url}>
                <img
                  className={cssItem.img}
                  src={image_url}
                  alt={advert.name}
                  width={290}
                  height={310}
                />
              </li>
            ))}
          </ul>
          <p className={`${css.description} text`}>{advert.description}</p>

          <div className={css.nav}>
            <button
              className={`${css.nav_link} ${
                btnActive === 'features' && css.accent
              }`}
              onClick={() => setBtnActive('features')}
            >
              Features
            </button>
            <button
              className={`${css.nav_link} ${
                btnActive === 'rewiews' && css.accent
              }`}
              onClick={() => setBtnActive('rewiews')}
            >
              Reviews
            </button>
          </div>
          <div className={css.details_wrapper}>
            <div className={css.details}>
              {btnActive === 'features' && <Features advert={advert} />}
              {btnActive === 'rewiews' && <Reviews reviews={advert.reviews} />}
            </div>
            {/* <BookingForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdvert;
