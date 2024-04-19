import css from './DetailsList.module.css';

const DetailsList = ({ details }) => {
  const listItems = Object.entries(details)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => (
      <li key={key} className={css.item}>
        {value} {key}
      </li>
    ));

  return <ul className={css.list}>{listItems}</ul>;
};

export default DetailsList;
