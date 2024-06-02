import s from "./header.module.scss";
import { FaShoppingBasket, FaSun, FaMoon } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";

import HeaderIcons from "./headerIIcons/headerIcons";
import HeaderLogo from "./headerLogo/headerLogo";
import HeaderUl from "./headerUl/headerUl";
import PropTypes from "prop-types";
const Header = ({ countStar, countBasket, changeTheme, theme }) => {
  return (
    <div className={`${s.header} ${theme === "light" ? s.light : s.dark}`}>
      <HeaderLogo className={s.header__logo} />
      <div className={s.header__list}>
        <HeaderUl className={s.header__list__ul} />
        <HeaderIcons className={s.header__list__basket}>
          <FaShoppingBasket />
          <span>{countBasket}</span>
        </HeaderIcons>
        <HeaderIcons className={s.header__list__basket}>
          <MdOutlineStarPurple500 />
          <span>{countStar}</span>
        </HeaderIcons>
        <HeaderIcons onClick={changeTheme} className={s.header__list__basket}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </HeaderIcons>
        
      </div>
    </div>
  );
};
Header.propTypes = {
  countStar: PropTypes.number.isRequired,
  countBasket: PropTypes.number.isRequired,
};
export default Header;
