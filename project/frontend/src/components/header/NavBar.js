import style from "./navbar.module.css";
import ButtonNav from "./ButtonNav";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link to="/" className="site-title">MineNostalgia</Link>
            <ul className={ style.navButtons }>
                <ButtonNav to="/">Home</ButtonNav>
                <ButtonNav to="/history">History</ButtonNav>
                <ButtonNav to="/stats">Stats</ButtonNav>
                <ButtonNav to="/medals">Medals</ButtonNav>
            </ul>
            <Link to="/Login" className="login">Log In</Link>
        </nav>
    )
};

export default NavBar;
