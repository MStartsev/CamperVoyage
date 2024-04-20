import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/favoriteSlice';
import DetailsList from './DetailsList';
import sprite from 'icons/sprite.svg';
import css from './AdvertItem.module.css';

const AdvertItem = ({ card }) => {
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
  } = card;

  const dispatch = useDispatch();

  const { favorites } = useSelector(selectFavorites);
  const isFavorite = !favorites.find(favorite => favorite.id === id);

  const handleFavorite = () =>
    isFavorite
      ? dispatch(addFavorite(card))
      : dispatch(removeFavorite(card.id));

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
              <button
                className={(isFavorite && css.favorite) || css.favorite__added}
                onClick={handleFavorite}
              >
                <svg className={css.icon} width={24} height={24}>
                  <use xlinkHref={`${sprite}#heart`} />
                </svg>
              </button>
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

        <button className={css.button_more}>Show more</button>
      </div>
    </li>
  );
};

export default AdvertItem;
