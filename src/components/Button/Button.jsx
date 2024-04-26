import css from './Button.module.css';

export const LigthButton = ({ children, onClick }) => {
  return (
    <button className={css.ligth_btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export const AccentButton = ({ children, onClick }) => {
  return (
    <button className={css.accent_btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export const SubmitButton = ({ children, onSubmit }) => {
  return (
    <button className={css.accent_btn} type="submit" onSubmit={onSubmit}>
      {children}
    </button>
  );
};
