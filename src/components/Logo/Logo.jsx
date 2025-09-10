import { Link } from 'react-router-dom';
import css from './Logo.module.css';
import LogoSvg from '../../assets/Logo.svg';

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoSvg} alt="RentalCar Logo" className={css.logo} />
    </Link>
  );
};

export default Logo;
