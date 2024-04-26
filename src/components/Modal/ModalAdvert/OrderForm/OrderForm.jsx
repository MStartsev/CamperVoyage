import { useState } from 'react';
import { SubmitButton } from 'components/Button/Button';
import css from './OrderForm.module.css';
import sprite from 'icons/sprite.svg';

const OrderForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    setFormSubmitted(true);
  };

  return (
    <div className={css.wrapper}>
      <form name="BookingForm" className={css.form} onSubmit={handleSubmit}>
        <div className={css.title_wrapper}>
          <h3 className={css.subtitle}>Book your campervan now</h3>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={css.container}>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="auto"
              className={css.input}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="auto"
              className={css.input}
              required
            />
          </label>

          <label htmlFor="inputDate" className={css.calendar_input}>
            <span className={css.datepicker_toggle_button}>
              <svg className={css.calendar_svg} width={20} height={20}>
                <use href={`${sprite}#calendar`}></use>
              </svg>
            </span>
            <input
              id="inputDate"
              name="inputDate"
              type="date"
              placeholder="Booking date"
              className={`${css.input} ${css.datepicker}`}
              required
            />
          </label>

          <label htmlFor="comment">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              className={css.textarea}
            ></textarea>
          </label>
        </div>
        <SubmitButton type="submit">Send</SubmitButton>
      </form>
      {formSubmitted && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default OrderForm;
