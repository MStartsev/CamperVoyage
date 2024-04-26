import css from './Reviews.module.css';
import sprite from 'icons/sprite.svg';

const ratingValues = Array.from({ length: 5 }, (_, index) => index + 1);

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews ? (
        reviews.map((review, key) => {
          return (
            <li className={css.item} key={key}>
              <div className={css.title}>
                <span className={css.avatar}>
                  {review.reviewer_name.slice(0, 1).toUpperCase()}
                </span>
                <div>
                  <h4 className={css.reviewer_name}>{review.reviewer_name}</h4>
                  <ul className={css.rating}>
                    {ratingValues.map((item, key) => {
                      return (
                        <li
                          className={
                            Number(review.reviewer_rating) >= item
                              ? css.active_star
                              : css.deactive_star
                          }
                          key={key}
                        >
                          <svg width={16} height={16}>
                            <use href={`${sprite}#star`}></use>
                          </svg>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          );
        })
      ) : (
        <p>There are no comments for this camper</p>
      )}
    </ul>
  );
};

export default Reviews;
