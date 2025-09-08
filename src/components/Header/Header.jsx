import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <p>
        HEADER
        <Navigation />
      </p>
    </header>
  );
};

export default Header;
