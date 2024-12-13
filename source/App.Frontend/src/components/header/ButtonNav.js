import { Link } from "react-router-dom";

const ButtonNav = (props) => {

    return (
      <li>
          <Link to={props.to}>{props.children}</Link>
      </li>
    )
};

export default ButtonNav;