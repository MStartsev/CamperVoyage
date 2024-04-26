import { useState } from 'react';
import Modal from '../../Modal/Modal';
import DetailsList from './DetailsList';
import { AccentButton } from 'components/Button/Button';
import sprite from 'icons/sprite.svg';
import css from './AdvertItem.module.css';

const AdvertItem = ({ advert }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const {
    id,
    name,
    price,
    location,
    description,
    details,
    rating,
    reviews,
    gallery,
  } = advert;

  return (
    <li className={css.item} id={id}>
      <img
        className={css.img}
        src={gallery && gallery?.length && gallery[0]}
        alt={name}
        width={290}
        height={310}
        loading="lazy"
      />

      <div className={css.content}>
        <div className={css.header_wrapper}>
          <div className={css.header}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.price_wrapper}>
              <p className={css.price}>€{price.toFixed(2)}</p>
            </div>
          </div>
          <div className={css.info}>
            <p className={css.rating}>
              <svg className={css.icon} width={16} height={16}>
                <use xlinkHref={`${sprite}#star`} />
              </svg>
              <span className={css.rating_text}>
                {rating} ({reviews.length} Reviews)
              </span>
            </p>

            <span className={css.location}>{location}</span>
          </div>
        </div>

        <p className={css.description}>{description}</p>

        <DetailsList details={details} />

        <AccentButton onClick={handleShowModal}>Show more</AccentButton>

        {showModal && <Modal onClose={handleCloseModal} advert={advert} />}
      </div>
    </li>
  );
};

export default AdvertItem;