import profile from "../../assets/profile-user.png"
import briefcase from "../../assets/portfolio.png"

import "./Menu.css"

const Menu = ({ setPage, page, activeMenu }) => {
    return (
        <div className="menu" >
            <img alt="profile" src={profile} className={`menuIcon ${!activeMenu ? "active" : ""} `} onClick={() => page ? setPage(0) : null} />
            <img alt="work" src={briefcase} className={`menuIcon ${activeMenu ? "active" : ""} `} onClick={() => !page ? setPage(1) : null} />
        </div>
    );
}

export default Menu;