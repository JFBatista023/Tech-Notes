import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const DashFooter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <footer className="dash-footer">
            {pathname === "/dash" ? (
                <button
                    className="dash-footer__button icon-button"
                    title="Home"
                    onClick={() => navigate("/dash")}>
                </button>
            ) : (<button className="dash-footer__button icon-button" title="Home" onClick={() => navigate("/dash")}>
                <FontAwesomeIcon icon={faHouse} />
            </button>)}
            <p>Current User:</p>
            <p>Status:</p>
        </footer>
    );
};

export default DashFooter;
