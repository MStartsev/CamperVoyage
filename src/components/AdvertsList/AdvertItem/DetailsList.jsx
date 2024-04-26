import sprite from 'icons/sprite.svg';
import css from './DetailsList.module.css';

const DetailsList = ({ details, list }) => {
  const listItems = Object.entries(details)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => (
      <li key={key} className={css.item}>
        <svg className={css.icon} width={20} height={20}>
          <use xlinkHref={`${sprite}#${key.toLowerCase()}`} />
        </svg>
        <span>
          {value} {key}
        </span>
      </li>
    ));

  return <ul className={list || css.list}>{listItems}</ul>;
};

export default DetailsList;
