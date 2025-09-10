import clsx from 'clsx';

import css from './Button.module.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button className={clsx(css.btn, className)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
export default Button;
