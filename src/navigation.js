import { Link } from "react-router-dom";

const LeftNav = () => {
    return(
        <ul className="List-group">
            <li className="list-group-item bg-dark text-light p-2"><h3>Quick Links</h3></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/" className="text-decoration-none  text-light"><i className="fa fa-home"> </i> Dashboard </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/basic" className="text-decoration-none  text-light"><i className="fa fa-user"> </i> My Basic </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/Contact" className="text-decoration-none  text-light"><i className="fa fa-headset"> </i> My Contact </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/Education" className="text-decoration-none  text-light"><i className="fa fa-book"> </i> My Education </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/Skills" className="text-decoration-none  text-light"><i className="fa fa-desktop"> </i> My Skills </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/Project" className="text-decoration-none  text-light"><i className="fa fa-suitcase"> </i> My Project </Link></li>
            <hr/>
            <li className="list-group-item p-1"><Link to="/Experience" className="text-decoration-none  text-light"><i className="fa fa-file"> </i> Experience </Link></li>
            <hr/>
        </ul>
    )

}

export default LeftNav;