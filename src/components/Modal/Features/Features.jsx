import css from './Features.module.css';
import DetailsList from 'components/AdvertsList/AdvertItem/DetailsList';
import capitalizeWord from 'helpers/capitalizeWord';

const Features = ({ advert }) => {
  return (
    <>
      <DetailsList details={advert.details} list={css.list} />
      <h3 className={`${css.vehicle_title}`}>Vehicle details</h3>
      <ul className={css.vehicle_details}>
        <li className={css.vehicle_details__item}>
          <p>Form</p>
          <p>{capitalizeWord(advert.form)}</p>
        </li>
        <li className={css.vehicle_details__item}>
          <p>Length</p>
          <p>{advert.length}</p>
        </li>
        <li className={css.vehicle_details__item}>
          <p>Width</p>
          <p>{advert.width}</p>
        </li>
        <li className={css.vehicle_details__item}>
          <p>Height</p>
          <p>{advert.height}</p>
        </li>
        <li className={css.vehicle_details__item}>
          <p>Tank</p>
          <p>{advert.tank}</p>
        </li>
        <li className={css.vehicle_details__item}>
          <p>Consumption</p>
          <p>{advert.consumption}</p>
        </li>
      </ul>
    </>
  );
};

export default Features;
